import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Menus from "../components/Menus";
import "../css/Benefit.scss";

const MENUTITLE = [
    { id: 1, title: "멤버십 안내", active: "on", link: "/membership" },
    { id: 2, title: "VIP LOUNGE", link: "/vip" },
];

const routeURL = "/benefit";

const MEMBERSHIP = [
    {
        id: 1,
        title: "포인트 적립",
        des1: "영화 티켓, 매점 상품 구매 시 등급에 따라",
        des2: "5 ~ 10% 포인트를 적립할 수 있어요",
    },
    {
        id: 2,
        title: "포인트 선물",
        des1: "사랑하는 가족, 친구에게 포인트를 선물하세요",
        des2: "포인트 선물은 신포인트만 가능해요",
    },
    {
        id: 3,
        title: "포인트 사용",
        des1: "보유한 포인트로 원하는 영화 보고",
        des2: "팝콘도 구매하세요",
    },
    {
        id: 4,
        title: "생일 축하 쿠폰",
        des1: "회원이라면 누구나 생일 축하 쿠폰을 드려요",
    },
    {
        id: 5,
        title: "VIP LOUNGE",
        des1: "VIP 회원이라면",
        des2: "더 많은 추가 혜택을 받을 수 있어요",
    },
    {
        id: 6,
        title: "스페셜 멤버십",
        des1: "메가박스 멤버십 혜택에",
        des2: "스페셜 멤버십 추가혜택도 받을 수 있어요",
    },
];

const Benefit = () => {
    return (
        <section className="Benefit">
            <div className="container">
                <h2>메가박스 멤버십</h2>
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
            <div className="membership">
                <div className="container">
                    <div className="box">
                        <h3>MEGABOX MEMBERSHIP</h3>
                        <span>
                            메가박스 멤버십 회원에게만 제공되는 다양한 혜택
                        </span>
                    </div>
                    <div className="des">
                        <h4>메가박스 멤버십 혜택</h4>
                        <ul className="content">
                            {MEMBERSHIP.map((el) => {
                                return (
                                    <li key={el.id}>
                                        <h5>{el.title}</h5>
                                        <p>{el.des1}</p>
                                        <p>{el.des2}</p>
                                        <Link to="#">
                                            <button>자세히 보기</button>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefit;
