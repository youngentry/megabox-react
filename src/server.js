// // 네이버 검색 API 예제 - 블로그 검색
// var express = require("express");
// var app = express();
// var client_id = "1siuMKAq0eomhPtDkmMu";
// var client_secret = "XX0pegB6T7";
// app.get("/", function (req, res) {
//     var api_url = `https://openapi.naver.com/v1/search/movie.json`;
//     var request = require("request");
//     var options = {
//         url: api_url,
// headers: {
//     "X-Naver-Client-Id": client_id,
//     "X-Naver-Client-Secret": client_secret,
// },
//     };
//     request.get(options, function (error, response, body) {
//         if (!error && response.statusCode === 200) {
//             res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
//             res.end(body);
//         } else {
//             res.status(response.statusCode).end();
//             console.log("error = " + response.statusCode);
//         }
//     });
// });
// app.listen(4000, function () {
//     console.log(
//         "http://127.0.0.1:4000/search/blog?query=검색어 app listening on port 4000!"
//     );
// });

const express = require("express");
const axios = require("axios");
const { response } = require("express");
const app = express();
const client_id = "1siuMKAq0eomhPtDkmMus";
const client_secret = "XX0pegB6T7";

const currentPut = async () => {
    let response;
    try {
        response = await axios.get(
            `https://openapi.naver.com/v1/search/movie.json?query=%EC%A3%BC%EC%8B%9D&display=10&start=1&genre=1"`,
            {
                headers: {
                    "X-Naver-Client-Id": client_id,
                    "X-Naver-Client-Secret": client_secret,
                },
            }
        );
    } catch (e) {
        console.log(e);
    }
    return response;
};

app.get("/", (req, res) => {
    currentPut().then((response) => {
        res.json(response.data.response.body);
    });
}); //node서버에서 프론트서버로 데이터를 보내기 위한 코드

app.listen(4000, () => {
    console.log("서버가 연결되었습니다.");
});

// const express = require("express");
// const axios = require("axios");
// const app = express();

// const currentPut = async () => {
//     let response;
//     const key = "b4f3293a5bbeeb23428ff7f42088c8f2";

//     try {
//         response = await axios.get(
//             `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${20221002}`
//         );
//     } catch (e) {
//         console.log(e);
//     }
//     return response;
// };

// app.get("/", (req, res) => {
//     currentPut().then((response) => {
//         res.setHeader("Access-Control-Allow-Origin", "*");
//         res.json(response.data);
//     });
// }); //node서버에서 프론트서버로 데이터를 보내기 위한 코드

// app.listen(4000, () => {
//     console.log("서버가 연결되었습니다.");
// });
