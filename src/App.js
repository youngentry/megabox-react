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
import getToday from "./modules/getToday";
import index from ".";

const App = () => {
    const [itm, setItm] = useState();

    useEffect(() => {
        axios.get("http://localhost:4000/").then((response) => {
            console.log(response.data);
        });

        const key = "b4f3293a5bbeeb23428ff7f42088c8f2";
        const today = getToday();
        const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${today}`;
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
            // console.log(BOXOFFICE, today);
        };
        getMovie();
    }, []);

    return (
        <>
            {!itm ? (
                <div>loading...</div>
            ) : (
                <Wrapper>
                    <Header />
                    <Routes>
                        <Route
                            path="/"
                            exact={true}
                            element={<Main BOXOFFICE={itm} />}
                        />
                        <Route
                            path="/theater"
                            exact={true}
                            element={<Theater />}
                        />
                        <Route
                            path="/event/*"
                            exact={true}
                            element={<Event />}
                        />
                        <Route
                            path="/store/*"
                            exact={true}
                            element={<Store />}
                        />
                        <Route
                            path="/benefit/*"
                            exact={true}
                            element={<Benefit />}
                        />
                        <Route
                            path="/movies/*"
                            exact={true}
                            element={<Movies BOXOFFICE={itm} />}
                        />
                        <Route
                            path="/ticketing"
                            exact={true}
                            element={<Ticketing />}
                        />
                    </Routes>
                    <Footer />
                </Wrapper>
            )}
        </>
    );
};

export default App;
