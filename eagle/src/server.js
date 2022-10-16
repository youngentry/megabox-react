const express = require("express");
const app = express();
const port = 3001; // <- 3000에서 다른 숫자로 변경
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post("/text", (req, res) => {
    const text1 = req.body.inText;
    console.log(text1);
    //////추가 내용/////
    const sendText = {
        text: "보내기 성공",
    };
    res.send(sendText);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
