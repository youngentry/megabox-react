import { Route, Routes } from "react-router-dom";

import Wrapper from "./pages/Wrapper";
import Header from "./pages/Header";
import Main from "./pages/Main";
import Theater from "./pages/Theater";
import Event from "./pages/Event";
import Ticketing from "./pages/Ticketing";
import Footer from "./pages/Footer";
import Movies from "./pages/Movies";
import "./css/basic.scss";
import Store from "./pages/Store";
import Benefit from "./pages/Benefit";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [itm, setItm] = useState();
    useEffect(() => {
        const key = "b4f3293a5bbeeb23428ff7f42088c8f2";
        const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=20120101`;
        const getMovie = async () => {
            const sdsd = await axios.get(url);
            sdsd.data.boxOfficeResult.dailyBoxOfficeList.map((it) => {
                return {
                    rank: it.rank,
                    movieNm: it.movieNm,
                    openDt: it.openDt,
                };
            });
            console.log(sdsd.data.boxOfficeResult);
            // console.log(res.data.boxOfficeResult.dailyBoxOfficeList);
            // const movieData = res.data.boxOfficeResult.dailyBoxOfficeList.map(
            //     (it) => {
            //         return {
            //             rank: it.rank,
            //             movieNm: it.movieNm,
            //             openDt: it.openDt,
            //         };
            //     }
            // );
            // setItm(movieData);
            // console.log(1111111111);
        };
        getMovie();
    }, []);

    return <>ddd</>;
}

export default App;
