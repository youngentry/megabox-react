import { Route, Routes } from "react-router-dom";

import Wrapper from "./pages/Wrapper";
import Header from "./pages/main/Header";
import Main from "./pages/main/Main";
import Theater from "./pages/theater/Theater";
import Event from "./pages/event/Event";
import Ticketing from "./pages/ticketing/Ticketing";
import Footer from "./pages/main/Footer";
import Movies from "./pages/movies/Movies";
import "./css/basic.scss";
import Store from "./pages/store/Store";
import Benefit from "./pages/benefit/Benefit";
import { instance, category } from "./data/TMDBDATA";
import { useEffect, useState } from "react";
import Movielist from "./pages/movielist/Movielist";

const App = () => {
    const [trendingList, setTrendingList] = useState([]);
    const [upcomingList, setUpcomingList] = useState([]);
    const [searchList, setSearchList] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [pagination, setPagination] = useState(1);

    useEffect(() => {
        getTMDBTrending();
        getTMDBUpcoming();
        setPagination(1);
    }, []);

    const getTMDBTrending = async () => {
        const res = await instance.get(category.trending + pagination);
        const trendingData = res.data.results;
        setTrendingList(trendingData);
    };
    const getTMDBUpcoming = async () => {
        const res = await instance.get(category.upcoming + pagination);
        const upcomingData = res.data.results;
        setUpcomingList(upcomingData);
    };
    const getTMDBSearch = async () => {
        const res = await instance.get(category.search + searchQuery);
        const searchData = res.data.results;
        setSearchList(searchData);
    };

    return (
        <>
            {!trendingList ? (
                <div>loading...</div>
            ) : (
                <Wrapper>
                    <Header TRENDINGDATA={trendingList} getTMDBSearch={getTMDBSearch} searchList={searchList} setSearchList={setSearchList} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                    <Routes>
                        <Route path="/" element={<Main TRENDINGDATA={trendingList} />} />
                        <Route path="/theater" element={<Theater />} />
                        <Route path="/event/*" element={<Event />} />
                        <Route path="/store/*" element={<Store />} />
                        <Route path="/benefit/*" element={<Benefit />} />
                        <Route path="/movies/*" element={<Movies TRENDINGDATA={trendingList} UPCOMINGDATA={upcomingList} />} />
                        <Route path="/ticketing" element={<Ticketing TRENDINGDATA={trendingList} />} />
                        <Route path="/detail/:id" element={<Movielist TRENDINGDATA={trendingList} />} />
                    </Routes>
                    <Footer />
                </Wrapper>
            )}
        </>
    );
};

export default App;
