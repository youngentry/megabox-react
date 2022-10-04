var express = require("express");
var app = express();
var client_id = "k9ZhunsCP0QgsvgJ0DW7";
var client_secret = "1Cgy20c7WS";

app.get("/", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    // 여기다 검색 기능 구현하기
    // const searchWord = "%EC%A3%BC%EC%8B%9D";

    var api_url = `https://openapi.naver.com/v1/search/movie.json?query=%EC%A3%BC%EC%8B%9D&display=10&start=1&genre=1`; // JSON 결과
    var request = require("request");
    var options = {
        url: api_url,
        headers: {
            "X-Naver-Client-Id": client_id,
            "X-Naver-Client-Secret": client_secret,
        },
    };
    request.get(options, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
            res.end(body);
        } else {
            res.status(response.statusCode).end();
            console.log("error = " + response.statusCode);
        }
    });
});
app.listen(4000, function () {
    console.log("API CORS정책을 따르기 위한 서버 app listening on port 4000!");
});
