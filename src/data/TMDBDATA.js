import { useEffect, useState } from "react";

const { default: axios } = require("axios");

const url = "https://api.themoviedb.org/3";
const key = "fd372a536c70d731cd668179d6cd16d7";

const instance = axios.create({
    // 기본 url
    baseURL: url,
    // params : URL 파라미터 ( ?key=value 로 요청하는 url get방식을 객체로 표현한 것)
    params: {
        api_key: key,
    },
});

const category = {
    trending: "/trending/movie/week",
    genre: "/genre/movie/list",
    nowPlaying: "movie/now_playing",
    rated: "/movie/top_rated",
};

export { instance, category };
