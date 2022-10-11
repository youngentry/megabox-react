import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Menus from "../../components/Menus";
import "../../css/event/Event.scss";
import Recommendation from "./Recommendation";

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
                        return <Route key={it.id} path="/*" element={<Menus menuTitle={MENUTITLE} routeURL={routeURL} />} />;
                    })}
                </Routes>
            </div>
            <Recommendation />
        </section>
    );
};

export default Event;
