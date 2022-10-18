const { default: axios } = require("axios");

const url = "https://api.themoviedb.org/3";
const key = "fd372a536c70d731cd668179d6cd16d7";

const instance = axios.create({
    // 기본 url
    baseURL: url,
    // params : URL 파라미터 ( ?key=value 로 요청하는 url get방식을 객체로 표현한 것)
    params: {
        api_key: key,
        language: "ko-KR",
    },
});

const category = {
    trending: "trending/movie/week?page=",
    genre: "genre/movie/list?page=",
    nowPlaying: "movie/now_playing?page=",
    upcoming: "movie/upcoming?page=",
    search: "search/movie?query=",
};
/** genre >>> 0 : {id: 28, name: 'Action'} ~ 18  */
/** trending >>> 0 : {adult: false, backdrop_path: '주소.jpg', poster_path: '주소.jpg', id: 894205, title: '제목', original_language: '언어', genre_ids: '[28,14,27], overview: '줄거리', release_date: '년월일', vote_average: '7.4', vote_count: '321', popularity: '510.713'} ~ 19 */

export { instance, category };
