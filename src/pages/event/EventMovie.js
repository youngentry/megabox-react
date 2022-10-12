import React, { useState } from "react";
import Events from "./Events";
import "../../css/event/EventMovie.scss";

const EventMovie = ({ num }) => {
    const EVENTMOVIEDATA = [
        { id: 1, imgSrc: "eventmovie11", title: "돌비 시네마 콜렉션 <듄> 재개봉 기념 A3포스터 증정", period: "2022.10.12 ~ 2022.10.23", category: "" },
        { id: 2, imgSrc: "eventmovie12", title: "<오펀: 천사의 탄생> 돌아온 최강 싸패! 당신의 사이코 지수는?", period: "2022.10.12 ~ 2022.10.23", category: "zero" },
        { id: 3, imgSrc: "eventmovie13", title: "[예지미인X메가박스] 그날에 당황하지 말고 PINK BOX", period: "2022.10.07 ~ 2023.09.30", category: "zeroplus" },
        { id: 4, imgSrc: "eventmovie14", title: "Dolby cinema Collection", period: "2022.09.14 ~ 2022.11.08", category: "zero" },
        { id: 5, imgSrc: "eventmovie15", title: "메가박스 오리지널 티켓 Re.13 <사랑은 비를 타고>", period: "2022.09.21 ~ 2022.10.12", category: "" },
        { id: 6, imgSrc: "eventmovie16", title: "나도 영화 평론가! 관람평 쓰고 포인트 받자!", period: "2022.07.01 ~ 2022.12.31", category: "" },
        { id: 7, imgSrc: "eventmovie17", title: "메가박스 오리지널 티켓북 시즌2", period: "2022.10.12 ~ 2022.10.23", category: "zeroplus" },
        { id: 8, imgSrc: "eventmovie18", title: "✌ 2022년 VIP 회원 혜택 안내 ✌", period: "2022.10.12 ~ 2022.10.23", category: "" },
        { id: 9, imgSrc: "eventmovie19", title: "[VIP제휴혜택] 2022 교보문고 & 핫트랙스 특별 제휴 안내", period: "2022.10.12 ~ 2022.10.23", category: "goodspackage" },
        { id: 10, imgSrc: "eventmovie20", title: "신규 & 휴면회원 만반잘부! 모두 혜택 받아가세요", period: "2022.10.12 ~ 2022.10.23", category: "" },
        { id: 11, imgSrc: "eventmovie01", title: "돌비 시네마 콜렉션 <듄> 재개봉 기념 A3포스터 증정", period: "2022.10.12 ~ 2022.10.23", category: "" },
        { id: 12, imgSrc: "eventmovie02", title: "<오펀: 천사의 탄생> 돌아온 최강 싸패! 당신의 사이코 지수는?", period: "2022.10.12 ~ 2022.10.23", category: "zeroplus" },
        { id: 13, imgSrc: "eventmovie03", title: "[예지미인X메가박스] 그날에 당황하지 말고 PINK BOX", period: "2022.10.07 ~ 2023.09.30", category: "" },
        { id: 14, imgSrc: "eventmovie04", title: "Dolby cinema Collection", period: "2022.09.14 ~ 2022.11.08", category: "zeroplus" },
        { id: 15, imgSrc: "eventmovie05", title: "메가박스 오리지널 티켓 Re.13 <사랑은 비를 타고>", period: "2022.09.21 ~ 2022.10.12", category: "zeroplus" },
        { id: 16, imgSrc: "eventmovie06", title: "나도 영화 평론가! 관람평 쓰고 포인트 받자!", period: "2022.07.01 ~ 2022.12.31", category: "" },
        { id: 17, imgSrc: "eventmovie07", title: "메가박스 오리지널 티켓북 시즌2", period: "2022.10.12 ~ 2022.10.23", category: "goodspackage" },
        { id: 18, imgSrc: "eventmovie08", title: "✌ 2022년 VIP 회원 혜택 안내 ✌", period: "2022.10.12 ~ 2022.10.23", category: "goodspackage" },
        { id: 19, imgSrc: "eventmovie09", title: "[VIP제휴혜택] 2022 교보문고 & 핫트랙스 특별 제휴 안내", period: "2022.10.12 ~ 2022.10.23", category: "goodspackage" },
        { id: 20, imgSrc: "eventmovie10", title: "신규 & 휴면회원 만반잘부! 모두 혜택 받아가세요", period: "2022.10.12 ~ 2022.10.23", category: "" },
    ];
    const EVENTCATEGORYLIST = [
        { id: 1, title: "전체", category: "all" },
        { id: 2, title: "빵원쿠폰", category: "zero" },
        { id: 3, title: "빵원쿠폰플러스", category: "zeroplus" },
        { id: 4, title: "굿즈패키지", category: "goodspackage" },
    ];
    // 클릭한 탭메뉴에 on 붙이기
    const [on, setOn] = useState(1);
    // 카테고리 스테이트 만들기
    const [category, setCategory] = useState("all");

    // 카테고리 스테이트를 클릭한 리스트의 카테고리로 설정하기
    const categoryHandler = (el) => {
        setOn(el.id);
        if (el.category) setCategory(el.category);
    };

    // filter ?조건 => 모든 리스트 반환하기
    // filter :조건 => 카테고리와 일치하는 데이터만 반환하기
    const filteredDATA = EVENTMOVIEDATA.filter((el) => {
        return category === "all" ? el : el.category === category;
    });

    return (
        <div className="EventMovie">
            <div className="container">
                <div className="eventCategory">
                    <ul>
                        {EVENTCATEGORYLIST.map((el, idx) => {
                            return num !== 4 ? (
                                <li key={el.id} onClick={() => categoryHandler(el)} className={on === idx + 1 ? "on" : ""}>
                                    <span>{el.title}</span>
                                </li>
                            ) : (
                                ""
                            );
                        })}
                    </ul>
                </div>
                <div className="content">
                    {num !== 4 ? (
                        <p>
                            전체 <span>{filteredDATA.length}</span>건
                        </p>
                    ) : (
                        ""
                    )}
                    {/* filter된 데이터 반환하기 */}
                    <Events EVENTDATA={filteredDATA} num={num} category={category} />
                </div>
            </div>
        </div>
    );
};

export default EventMovie;
