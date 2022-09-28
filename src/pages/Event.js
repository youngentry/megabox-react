import React from "react";
import Menus from "../components/Menus";
import "../css/Event.scss";

const MENUTITLE = [
    { id: 1, title: "전체", active: "on" },
    { id: 2, title: "메가Pick" },
    { id: 3, title: "영화" },
    { id: 4, title: "극장" },
    { id: 5, title: "제휴/할인" },
    { id: 6, title: "시사회/무대인사" },
];

const Event = () => {
    return (
        <section className="Event">
            <div className="container">
                <h2>진행중인 이벤트</h2>
                <Menus menuTitle={MENUTITLE} />
            </div>
        </section>
    );
};

export default Event;
