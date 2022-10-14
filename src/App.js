import { Route, Routes } from "react-router-dom";

import Wrapper from "./pages/Wrapper";
import Header from "./pages/main/Header";
import Main from "./pages/main/Main";
import Theater from "./pages/theater/Theater";
import Event from "./pages/event/Event";
import Ticketing from "./pages/main/Ticketing";
import Footer from "./pages/main/Footer";
import Movies from "./pages/main/Movies";
import "./css/basic.scss";
import Store from "./pages/store/Store";
import Benefit from "./pages/benefit/Benefit";
import { BOXOFFICEDATA } from "./data/BOXOFFICEDATA";
// import { NAVERMOVIEDATA } from "./data/NAVERDATA";
import { instance, category, getTMDBTGenre, getTMDBRated } from "./data/TMDBDATA";
import { useEffect, useState } from "react";

const App = () => {
    const BOXDATA = BOXOFFICEDATA();
    // const NAVERMOVIE = NAVERMOVIEDATA();

    const [trendingItm, setTrendingItm] = useState([]);

    useEffect(() => {
        getTMDB();
    }, []);

    const getTMDB = async () => {
        const res = await instance.get(category.trending);
        console.log(res.data);
        const trendingData = res.data.results;
        setTrendingItm(trendingData);
    };

    return (
        <>
            {!BOXDATA ? (
                <div>loading...</div>
            ) : (
                <Wrapper>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Main RATEDDATA={trendingItm} BOXDATA={BOXDATA} />} />
                        <Route path="/theater" element={<Theater />} />
                        <Route path="/event/*" element={<Event />} />
                        <Route path="/store/*" element={<Store />} />
                        <Route path="/benefit/*" element={<Benefit />} />
                        <Route path="/movies/*" element={<Movies BOXDATA={BOXDATA} />} />
                        <Route path="/ticketing" element={<Ticketing />} />
                    </Routes>
                    <Footer />
                </Wrapper>
            )}
        </>
    );
};

export default App;
