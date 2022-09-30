import React from "react";
import { Route, Routes } from "react-router-dom";
import Menus from "../components/Menus";
import Movie from "../components/Movie";
import "../css/Movies.scss";

const MENUTITLE = [
    { id: 1, title: "박스오피스", active: "on", link: "/" },
    { id: 2, title: "상영예정작", link: "/comingsoon" },
    { id: 3, title: "특별상영", link: "/special" },
    { id: 4, title: "필름소사이어티", link: "/film" },
    { id: 5, title: "클래식소사이어티", link: "/classic" },
];

const routeURL = "/movies";

/** App.js > Movies.js에서 movie props전달 rank, movieNm:영화이름, openDt:개봉일*/
const Movies = ({ BOXOFFICE }) => {
    console.log(BOXOFFICE, "2222222222222");
    return (
        <section className="Movies">
            <div className="container">
                <h2>전체영화</h2>
                {console.log("inner:", BOXOFFICE)}
                <Routes>
                    {MENUTITLE.map((it) => {
                        return (
                            <Route
                                key={it.id}
                                path="/*"
                                element={
                                    <Menus
                                        menuTitle={MENUTITLE}
                                        routeURL={routeURL}
                                    />
                                }
                            />
                        );
                    })}
                </Routes>
                {/** App.js 에서 movie props전달
                  rank:순위, movieNm:영화이름, openDt:개봉일*/}
                <Movie BOXOFFICE={BOXOFFICE} />
            </div>
        </section>
    );
};

export default Movies;
