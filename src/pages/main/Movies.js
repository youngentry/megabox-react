import React, { useEffect, useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Menus from "../../components/Menus";
import MoreMovies from "../../components/MoreMovies";
import Movie from "../../components/Movie";
import "../../css/main/Movies.scss";

const MENUTITLE = [
    { id: 1, title: "박스오피스", active: "on", link: "/boxoffice" },
    { id: 2, title: "상영예정작", link: "/comingsoon" },
    { id: 3, title: "특별상영", link: "/special" },
    { id: 4, title: "필름소사이어티", link: "/film" },
    { id: 5, title: "클래식소사이어티", link: "/classic" },
];

const routeURL = "/movies";

/** App.js > Movies.js에서 movie props전달 rank, movieNm:영화이름, openDt:개봉일*/
const Movies = ({ TRENDINGDATA }) => {
    const [showCount, setShowCount] = useState(3);

    return (
        <section className="Movies">
            <div className="container">
                <h2>전체영화</h2>
                <Routes>
                    {MENUTITLE.map((it) => {
                        return <Route key={it.id} path="/*" element={<Menus menuTitle={MENUTITLE} routeURL={routeURL} />} />;
                    })}
                </Routes>
                {/** App.js 에서 movie props전달
                  rank:순위, movieNm:영화이름, openDt:개봉일*/}
                <Routes>
                    <Route path="/boxoffice" element={<Movie showCount={showCount} TRENDINGDATA={TRENDINGDATA} num={4} />} />
                    <Route path="/comingsoon" element={<Movie showCount={showCount} TRENDINGDATA={TRENDINGDATA} />} />
                    <Route path="/special" element={<Movie showCount={showCount} TRENDINGDATA={TRENDINGDATA} />} />
                    <Route path="/film" element={<Movie showCount={showCount} TRENDINGDATA={TRENDINGDATA} />} />
                    <Route path="/classic" element={<Movie showCount={showCount} TRENDINGDATA={TRENDINGDATA} />} />
                </Routes>
                <MoreMovies showCount={showCount} setShowCount={setShowCount} />
            </div>
        </section>
    );
};

export default Movies;
