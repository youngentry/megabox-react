import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Menus from "../components/Menus";
import "../css/Store.scss";

const MENUTITLE = [
    { id: 1, title: "새로운 상품", active: "on", link: "/newitem" },
    { id: 2, title: "기프트카드", link: "/giftcard" },
    { id: 3, title: "메가티켓", link: "/megaticket" },
    { id: 4, title: "팝콘/음료/굿즈", link: "/food" },
    { id: 5, title: "포인트몰", link: "/pointmall" },
];

const routeURL = "/store";

const Store = () => {
    return (
        <section className="Store">
            <div className="container">
                <h2>스토어</h2>
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
            <div className="giftcard">
                <div className="container">
                    <Link to="#">
                        <div className="box">
                            <div className="text">
                                <p>메가박스 기프트카드 런칭!</p>
                                <p>소중한 분께 선물하세요!</p>
                                <span>메가박스 기프트카드 3만원권</span>
                            </div>
                            <figrue className="cardImg">
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/assets/img/giftcard01.jpg"
                                    }
                                    alt=""
                                />
                            </figrue>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Store;
