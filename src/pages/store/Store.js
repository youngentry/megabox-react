import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Menus from "../../components/Menus";
import "../../css/store/Store.scss";
import Giftcard from "./Giftcard";
import NewItem from "./NewItem";

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
                        return <Route key={it.id} path="/*" element={<Menus menuTitle={MENUTITLE} routeURL={routeURL} />} />;
                    })}
                </Routes>
                <Routes>
                    <Route path="/newitem" element={<NewItem />} />
                    <Route path="/giftcard" element={<Giftcard />} />
                </Routes>
            </div>
        </section>
    );
};

export default Store;
