import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Menus from "../../components/Menus";
import "../../css/event/Event.scss";
import AllEvent from "./AllEvent";
import Megapick from "./Megapick";
import Recommendation from "./Recommendation";

const MENUTITLE = [
    { id: 1, title: "전체", active: "on", link: "/allevent" },
    { id: 2, title: "메가Pick", link: "/megapick" },
    { id: 3, title: "영화", link: "/movie" },
    { id: 4, title: "극장", link: "/theater" },
    { id: 5, title: "제휴/할인", link: "/promotion" },
    { id: 6, title: "시사회/무대인사", link: "/premiere" },
];

const routeURL = "/event";

const MEGAPICKDATA = [
    { id: 1, imgSrc: "megapick01", title: "돌비 시네마 콜렉션 <듄> 재개봉 기념 A3포스터 증정", period: "2022.10.12 ~ 2022.10.23" },
    { id: 2, imgSrc: "megapick02", title: "<오펀: 천사의 탄생> 돌아온 최강 싸패! 당신의 사이코 지수는?", period: "2022.10.12 ~ 2022.10.23" },
    { id: 3, imgSrc: "megapick03", title: "[예지미인X메가박스] 그날에 당황하지 말고 PINK BOX", period: "2022.10.07 ~ 2023.09.30" },
    { id: 4, imgSrc: "megapick04", title: "Dolby cinema Collection", period: "2022.09.14 ~ 2022.11.08" },
    { id: 5, imgSrc: "megapick05", title: "메가박스 오리지널 티켓 Re.13 <사랑은 비를 타고>", period: "2022.09.21 ~ 2022.10.12" },
    { id: 6, imgSrc: "megapick06", title: "나도 영화 평론가! 관람평 쓰고 포인트 받자!", period: "2022.07.01 ~ 2022.12.31" },
    { id: 7, imgSrc: "megapick07", title: "메가박스 오리지널 티켓북 시즌2", period: "2022.10.12 ~ 2022.10.23" },
    { id: 8, imgSrc: "megapick08", title: "✌ 2022년 VIP 회원 혜택 안내 ✌", period: "2022.10.12 ~ 2022.10.23" },
    { id: 9, imgSrc: "megapick09", title: "[VIP제휴혜택] 2022 교보문고 & 핫트랙스 특별 제휴 안내", period: "2022.10.12 ~ 2022.10.23" },
    { id: 10, imgSrc: "megapick10", title: "신규 & 휴면회원 만반잘부! 모두 혜택 받아가세요", period: "2022.10.12 ~ 2022.10.23" },
];

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

            <Routes>
                <Route path="/allevent" element={<AllEvent MEGAPICKDATA={MEGAPICKDATA} />} />
                <Route path="/megapick" element={<Megapick MEGAPICKDATA={MEGAPICKDATA} />} />
            </Routes>
        </section>
    );
};

export default Event;
