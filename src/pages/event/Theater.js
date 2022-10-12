import React from "react";
import Events from "./Events";
// import "../../css/event/Theater.scss";

const THEATERDATA = [
    { id: 1, imgSrc: "theater01", title: "돌비 시네마 콜렉션 <듄> 재개봉 기념 A3포스터 증정", period: "2022.10.12 ~ 2022.10.23" },
    { id: 2, imgSrc: "theater02", title: "<오펀: 천사의 탄생> 돌아온 최강 싸패! 당신의 사이코 지수는?", period: "2022.10.12 ~ 2022.10.23" },
    { id: 3, imgSrc: "theater03", title: "[예지미인X메가박스] 그날에 당황하지 말고 PINK BOX", period: "2022.10.07 ~ 2023.09.30" },
    { id: 4, imgSrc: "theater04", title: "Dolby cinema Collection", period: "2022.09.14 ~ 2022.11.08" },
    { id: 5, imgSrc: "theater05", title: "메가박스 오리지널 티켓 Re.13 <사랑은 비를 타고>", period: "2022.09.21 ~ 2022.10.12" },
    { id: 6, imgSrc: "theater06", title: "나도 영화 평론가! 관람평 쓰고 포인트 받자!", period: "2022.07.01 ~ 2022.12.31" },
    { id: 7, imgSrc: "theater07", title: "메가박스 오리지널 티켓북 시즌2", period: "2022.10.12 ~ 2022.10.23" },
    { id: 8, imgSrc: "theater08", title: "✌ 2022년 VIP 회원 혜택 안내 ✌", period: "2022.10.12 ~ 2022.10.23" },
];

const Theater = ({ num }) => {
    return (
        <div className="Theater">
            <div className="content">
                <div className="container">
                    {num !== 4 ? (
                        <p>
                            전체 <span>{THEATERDATA.length}</span>건
                        </p>
                    ) : (
                        ""
                    )}
                    <Events EVENTDATA={THEATERDATA} num={num} />
                </div>
            </div>
        </div>
    );
};

export default Theater;
