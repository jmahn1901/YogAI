const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const userRouter = require("./routes/user/user");
const dailyRouter = require("./routes/post/post");
// const authMiddleware = require("./utils/authMiddleware");

// 소셜로그인
// const oauthRouter = require('./routes/auth/oauth')

const app = express();

const PORT = 8080;


// Yoga 이름으로 DB 에 테이블 생성 == 초기에는 존재하지 않으므로 생성됨
mongoose.connect('mongodb://localhost:27017/Yoga');


// DB 와 연결 시 콘솔 창에서의 메세지
mongoose.connection.on('connected', () => {
    console.log('mongodb Connect Success');
})

// DB 와의 연결 실패시 콘솔창에서의 메세지
mongoose.connection.on('error', (err) => {
    console.log(err);
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use('/oauth', oauthRouter) // 로그인 기능이기에 순서 잘 지키기

app.use("/user", userRouter);
app.use("/community", dailyRouter); // authMiddleware,

app.listen(PORT, () => {
    console.log(`open server : ${PORT}`);
});