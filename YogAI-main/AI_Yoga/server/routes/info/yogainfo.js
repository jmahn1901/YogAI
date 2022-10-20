const { Router } = require("express");
const router = Router();
const { Info } = require("./../../models");

//게시글 리스트 가져오기
//http://localhost:8080/infopose
router.get("/", async (req, res, next) => {

    // const infoData = await Info.find({});
    // console.log("infoData", infoData);

    // console.log("infoData.length", infoData.length);

    // 여기 부터 주석
    //req.query page라는 쿼리를 가져오는데 이게 undifind이면 1을 넣어라
    let page = Number(req.query.page) || 1; //현재 페이지

    console.log("page", page);

    //현재 페이지가 1보다 작다면 오류처리
    if (page < 1) {
        next("존재하지 않는 페이지 입니다.");
        return;
    }

    //perPage는 1페이지에 총 보여지는 일기장의 개수
    // let perPage = Number(req.query.page) || 8; //한 페이지에 보여지는 일기장의 개수
    let perPage = 8;
    console.log("perPage",perPage);


    // 8개보다 많으면 그러면 오류를 처리
    if (perPage > 8) {
        next("최대 8개의 일기장을 보낼 수 있습니다.");
        return;
    }
    // 전체 일기장의 수를 가져오는 부분
    let total = await Info.countDocuments({});

    console.log("총 total", total);

    //요가정보 리스트를 가져옴
    let infoData = await Info.find({}).sort({num : -1 }).skip(perPage * (page-1)).limit(perPage)
        // .sort({ num : -1 }) // 최신순
        // .skip(perPage * (page - 1)) // 몇번째부터 시작할껀지
        // .limit(perPage) // 지정해준 수 부터 perPage의 수만큼 반환해줌

    // console.log("info",info);

    //총 일기장 수에서 보여주고 싶은 일기장 수를 나눠서 => 총 페이지의 수가 나옴
    let totalPage = Math.ceil(total / perPage);
    // 여기까지 주석

    console.log("totalPage", totalPage);

    res.json({ infoData, totalPage });

});

module.exports = router;