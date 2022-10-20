const { Router } = require("express");
const router = Router();
const { Info } = require("./../../models");

//게시글 리스트 가져오기
//http://localhost:8080/infopose
router.get("/", async (req, res, next) => {

    const infoData = await Info.find({});
    console.log(infoData);


    // // 전체 일기장의 수를 가져오는 부분
    // let total = await Info.countDocuments({});

    // //일기장을 생성한 회원의 정보와함께 리스트를 가져옴
    // let info = await Info.find({})
    //     .sort({ createdAt: -1 }) // 최신순
    //     .skip(perPage * (page - 1)) // 몇번째부터 시작할껀지
    //     .limit(perPage) // 지정해준 수 부터 perPage의 수만큼 반환해줌

    // //총 일기장 수에서 보여주고 싶은 일기장 수를 나눠서 => 총 페이지의 수가 나옴
    // let totalPage = Math.ceil(total / perPage);

    res.json({ infoData });

});

module.exports = router;