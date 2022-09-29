import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Menus from "../components/Menus";
import "../css/Event.scss";

const MENUTITLE = [
    { id: 1, title: "전체", active: "on", link: "/" },
    { id: 2, title: "메가Pick", link: "/megapick" },
    { id: 3, title: "영화", link: "/movie" },
    { id: 4, title: "극장", link: "/theater" },
    { id: 5, title: "제휴/할인", link: "/promotion" },
    { id: 6, title: "시사회/무대인사", link: "/premiere" },
];

const routeURL = "/event";

const Event = () => {
    return (
        <section className="Event">
            <div className="container">
                <h2>진행중인 이벤트</h2>
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
            </div>
            <div className="recoEvent">
                <div className="container">
                    <h3>추천 이벤트</h3>
                    <div className="box">
                        <Link to="#">
                            <figure>
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/assets/img/reco01.jpg"
                                    }
                                    alt=""
                                />
                                <p>
                                    <span className="text">
                                        [알뜰교통카드 X 메가박스] 알뜰하게
                                        영화보고 콤보 구매하는 방법
                                    </span>
                                    <span className="date">
                                        2021.11.04 ~ 2022.12.31
                                    </span>
                                </p>
                            </figure>
                        </Link>
                        <Link to="#">
                            <figure>
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/assets/img/reco02.jpg"
                                    }
                                    alt=""
                                />
                                <p>
                                    <span className="text">
                                        [알뜰교통카드 X 메가박스] 알뜰하게
                                        영화보고 콤보 구매하는 방법
                                    </span>
                                    <span className="date">
                                        2021.11.04 ~ 2022.12.31
                                    </span>
                                </p>
                            </figure>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Event;
