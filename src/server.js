const express = require("express");
const axios = require("axios");
const app = express();

const currentPut = async () => {
    let response;
    try {
        response = await axios.get(
            "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=&EXAM_CNT&startCreateDt=20200310&endCreateDt=20200316&_type=json"
        );
    } catch (e) {
        console.log(e);
    }
    return response;
};

app.get("/", (req, res) => {
    currentPut().then((response) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.json(response.data.response.body);
    });
}); //node서버에서 프론트서버로 데이터를 보내기 위한 코드

app.listen(3001, () => {
    console.log("서버가 연결되었습니다.");
});
