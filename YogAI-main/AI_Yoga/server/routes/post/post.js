const { Router } = require("express");
const router = Router();
const { Daily } = require("./../../models");
const { Member } = require("./../../models");

//일기장 생성
//http://localhost:8080/community/ 
router.post("/", async (req, res, next) => {
    let { title, content, url, email } = req.body;

    try {
    console.log(req.body);
        
        // 일기장 생성하기전에 작성자를 같이 담아주기 위해서 email에 맞는 정보를 가지고 있는,
        // 회원의 데이터를 가져옴 == 누가 작성했는지 email 을 가져와 확인
        const authData = await Member.findOne({ email });

        //회원의 정보와 함께 저장함
        await Daily.create({
            title,
            content,
            url,
            author: authData
        })

        res.json({
            status: true,
            message: "일기장을 생성하였습니다."
        })

    } catch (e) {
        
        next(e);
    }

});

//게시글 리스트 가져오기
//http://localhost:8080/daily
router.get("/", async (req, res, next) => {

    //req.query page라는 쿼리를 가져오는데 이게 undifind이면 1을 넣어라
    let page = Number(req.query.page) || 1; //현재 페이지

    //현재 페이지가 1보다 작다면 오류처리
    if (page < 1) {
        next("존재하지 않는 페이지 입니다.");
        return;
    }

    //perPage는 1페이지에 총 보여지는 일기장의 개수
    let perPage = Number(req.query.perPage) || 6; //한 페이지에 보여지는 일기장의 개수

    // 6개보다 많으면 그러면 오류를 처리
    if (perPage > 6) {
        next("최대 6개의 일기장을 보낼 수 있습니다.");
        return;
    }

    // 전체 일기장의 수를 가져오는 부분
    let total = await Daily.countDocuments({});

    //일기장을 생성한 회원의 정보와함께 리스트를 가져옴
    let daily = await Daily.find({})
        .sort({ createdAt: -1 }) // 최신순
        .skip(perPage * (page - 1)) // 몇번째부터 시작할껀지
        .limit(perPage) // 지정해준 수 부터 perPage의 수만큼 반환해줌
        .populate('author'); // 사용자의 정보도 반환해줌

    //총 일기장 수에서 보여주고 싶은 일기장 수를 나눠서 => 총 페이지의 수가 나옴
    let totalPage = Math.ceil(total / perPage);

    res.json({ daily, totalPage });

});

//게시글 수정
//http://localhost:8080/community/shortId/update
router.post("/:shortId/update", async (req, res, next) => {
    let { shortId } = req.params;
    let { title, content, url } = req.body;

    try {

        //shortId에 해당하는 게시글의 정보를 수정함
        await Daily.updateOne({ shortId }, {
            title,
            content,
            url
        });

        res.json({
            status: true,
            message: "일기장을 수정하였습니다."
        })

    } catch (e) {
        next(e);
    }

});

//일기장 삭제
//http://localhost:8080/community/shortId/delete
router.post("/:shortId/delete", async (req, res, next) => {
    let { shortId } = req.params;
    try {

        //shortId에 해당하는 일기장을 삭제함.
        await Daily.deleteOne({ shortId });

        res.json({
            status: true,
            message: "일기장을 삭제하였습니다."
        });

    } catch (e) {
        next(e);
    }
})



module.exports = router;