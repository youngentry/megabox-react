import React from "react";
import Events from "./Events";

const CURTAINCALLDATA = [
    { id: 1, imgSrc: "curtaincall01", title: "돌비 시네마 콜렉션 <듄> 재개봉 기념 A3포스터 증정", period: "2022.10.12 ~ 2022.10.23" },
    { id: 2, imgSrc: "curtaincall02", title: "<오펀: 천사의 탄생> 돌아온 최강 싸패! 당신의 사이코 지수는?", period: "2022.10.12 ~ 2022.10.23" },
];

const Curtaincall = ({ num }) => {
    return (
        <div className="Curtaincall">
            <div className="content">
                <div className="container">
                    {num !== 4 ? (
                        <p>
                            전체 <span>{CURTAINCALLDATA.length}</span>건
                        </p>
                    ) : (
                        ""
                    )}
                    <Events EVENTDATA={CURTAINCALLDATA} num={num} />
                </div>
            </div>
        </div>
    );
};

export default Curtaincall;
