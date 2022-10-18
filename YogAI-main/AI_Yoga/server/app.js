const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const userRouter = require("./routes/user/user");
// const dailyRouter = require("./routes/daily/daily");
// const authMiddleware = require("./utils/authMiddleware");

// 소셜로그인
// const oauthRouter = require('./routes/auth/oauth')

const app = express();

const PORT = 8080;

// Yoga DB 생성
mongoose.connect('mongodb://localhost:27017/Yoga');

mongoose.connection.on('connected', () => {
    console.log('mongodb Connect Success');
})

mongoose.connection.on('error', (err) => {
    console.log(err);
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use('/oauth', oauthRouter) // 로그인 기능이기에 순서 잘 지키기

app.use("/user", userRouter);
// app.use("/daily", authMiddleware, dailyRouter);

app.listen(PORT, () => {
    console.log(`open server : ${PORT}`);
});