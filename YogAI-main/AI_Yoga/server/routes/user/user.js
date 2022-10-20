const { Router } = require("express");
const crypto = require("crypto");
const { Member } = require("../../models");
const router = Router();
const jwt = require("jsonwebtoken");
const jwtSecret = {
    "secret": "005c9780fe7c11eb89b4e39719de58a5"
}
// const jwtConfig = require("./../../config/jwtConfig");
// const nodemailer = require("nodemailer");


// http://localhost:8080/user/register
// 회원 가입
router.post("/register", async (req, res, next) => {
    let { email, password, nickname } = req.body;

    let chkEmail = await Member.findOne({ email });

    if (chkEmail) {
        res.json({
            status: false,
            stateEmail: false,
            message: "이미 존재 하는 이메일이네용!"
        })
        return;
    }

    const emailRegex =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&#]{8,}$/;
    
    const emailValueCheck = emailRegex.test(email);
    const passwordValueCheck = passwordRegex.test(password);

    if (!emailValueCheck) {
        res.json({
            status: false,
            stateEmail: false,
            message: "이메일 형식이 잘못되었네용!!"
        })
        return;
      }
    else if (!passwordValueCheck) {
        res.json({
            status: false,
            statePassword: false,
            message: "비번 형식이 잘못되었네용!!"
        })
        return;
    }
    else if (nickname === undefined || nickname.length === 0) {
        res.json({
            status: false,
            stateNickname: false,
            message: "닉네임을 입력해주세용!!"
        })
    }

    // 해쉬 사용
    const hashPwd = passwordHash(password)
    
    console.log(nickname);
    // 디비에 저장
    await Member.create({
        email,
        password: hashPwd,
        nickname
    })

    res.json({
        status: true,
        message: "회원가입이 완료 되었습니다."
    })

})

// http://localhost:8080/user/login
// 로그인
router.post("/login", async (req, res, next) => {
    const { email, password } = req.body;

    const chkEmail = await Member.findOne({ email });
    if (!chkEmail) {
        res.json({
            status: false,
            message: "존재 하지 않는 이메일이네용.. 호호호"
        })
        return;
    }
    // 해쉬를 해서 해쉬된 비밀번호끼리 비교하려고
    const hashedPwd = passwordHash(password);
    // 비교 => 비밀번호 불일치
    if (hashedPwd !== chkEmail.password) {

        res.json({
            status: false,
            messgage: "비밀번호가 틀렸음!"
        })
        return;
    }
    // 일치
    jwt.sign({
        email: chkEmail.email, // 이메일과 이름을 jwt로 변경해주기 위해 작성
        nickname: chkEmail.nickname
    }, jwtSecret.secret, { //jwtConfig.secret는 암호문자열임
        expiresIn: '1d'     // 기간을 줌 (1d => 하루, 1h => 한시간, 1m => 1분)
    }, (error, token) => {
        if (error) {
            //토큰을 제대로 발행하지 못하고 오류가 났을경우.
            res.status(401)
                .json({ status: false, message: "토큰 발행 실패" });
        } else {
            //정상적으로 토큰을 발행 했을경우,
            res.json({
                status: true,
                accessToken: token, //토큰 값을 브라우저에게 넘겨주는 부분
                email: chkEmail.email,
                nickname: chkEmail.nickname
            })
        }
    })
})


// 해쉬 함수
const passwordHash = (password) => {
    return crypto.createHash("sha1").update(password).digest("hex");
}

module.exports = router;