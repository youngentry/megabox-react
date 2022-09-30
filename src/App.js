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

const App = () => {
    const [itm, setItm] = useState();

    useEffect(() => {
        const key = "b4f3293a5bbeeb23428ff7f42088c8f2";

        const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=20120101`;
        const getMovie = async () => {
            const res = await axios.get(url);
            const BOXOFFICE = res.data.boxOfficeResult.dailyBoxOfficeList.map(
                (it) => {
                    return {
                        rank: it.rank,
                        movieNm: it.movieNm,
                        openDt: it.openDt,
                    };
                }
            );
            setItm(BOXOFFICE);
        };
        getMovie();
    }, []);
    console.log(itm, "111111111111111111111111");

    return (
        <>
            {!itm ? (
                <div>loading...</div>
            ) : (
                <Wrapper>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/theater" element={<Theater />} />
                        <Route path="/event/*" element={<Event />} />
                        <Route path="/store/*" element={<Store />} />
                        <Route path="/benefit/*" element={<Benefit />} />
                        <Route
                            path="/movies/*"
                            element={<Movies BOXOFFICE={itm} />}
                        />
                        <Route path="/ticketing" element={<Ticketing />} />
                    </Routes>
                    <Footer />
                </Wrapper>
            )}
        </>
    );
};

export default App;
