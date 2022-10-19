import { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import "../../css/theater/Theater.scss";
import Recommendation from "../event/Recommendation";
import Table from "../../components/Table";

const THEATER = [
    {
        id: 1,
        region: "서울",
        city: [
            "강남111",
            "강남대로(씨티)",
            "강동",
            "강남대로(씨티)",
            "강동",
            "강남대로(씨티)",
            "강동",
            "강남대로(씨티)",
            "강동",
            "강남대로(씨티)",
            "강동",
            "강남대로(씨티)",
            "강동",
            "강남대로(씨티)",
            "강동",
            "군자",
        ],
    },
    {
        id: 2,
        region: "경기",
        city: ["강남222", "강남대로(씨티)", "강동", "군자", "강남대로(씨티)", "강동", "강남대로(씨티)", "강동"],
    },
    {
        id: 3,
        region: "인천",
        city: [
            "강남333",
            "강남대로(씨티)",
            "강동",
            "강남대로(씨티)",
            "강동",
            "강남대로(씨티)",
            "강동",
            "강남대로(씨티)",
            "강동",
            "강남대로(씨티)",
            "강동",
            "강남대로(씨티)",
            "강동",
            "강남대로(씨티)",
            "강동",
            "군자",
            "안동",
        ],
    },
    {
        id: 4,
        region: "대전/충청/세종",
        city: ["강남444", "강남대로(씨티)", "강동", "군자"],
    },
    {
        id: 5,
        region: "부산/대구/경상",
        city: ["강남555", "강남대로(씨티)", "강동", "강남대로(씨티)", "강동", "강남대로(씨티)", "강동", "강남대로(씨티)", "강동", "강남대로(씨티)", "강동", "강남대로(씨티)", "강동", "군자"],
    },
    {
        id: 6,
        region: "광주/전라",
        city: ["강남666", "강남대로(씨티)", "강동", "군자"],
    },
    {
        id: 7,
        region: "강원",
        city: ["강남777", "강남대로(씨티)", "강동", "군자"],
    },
];

const theaterTable = [
    { id: 1, number: "1", place: "코엑스", title: "	[코엑스] 부티크 프라이빗 공사에 따른 이용 안내 (10/11~12월 중순)", region: "서울", date: "2022.10.11", link: "#" },
    { id: 2, number: "2", place: "구미강동", title: "[구미강동] 10월 7일 건물정전으로 인한 상영중단 및 취소 안내", region: "부산/대구/경상	", date: "2022.10.11", link: "#" },
    { id: 3, number: "3", place: "경북도청", title: "	[경북도청] 전산시스템 점검 일정 안내 (10/4 화요일 오전 9시부터~)", region: "부산/대구/경상	", date: "2022.09.28", link: "#" },
    { id: 4, number: "4", place: "대전현대아울렛", title: "[긴급] 대전현대아울렛 화재로 영화관 이용불가 안내", region: "대전/충청/세종	", date: "2022.09.26", link: "#" },
    { id: 5, number: "5", place: "상암월드컵경기장", title: "[상암월드컵경기장] 22년 9월 27(화) 축구 국가대표 평가전 경기 당일 주차 안내", region: "서울", date: "2022.09.20", link: "#" },
];

const Theater = () => {
    const [region, setRegion] = useState(0);

    return (
        <section className="Theater">
            <div className="container">
                <ul>
                    <li>
                        <h2>전체극장</h2>
                        <div className="find">
                            <div className="district">
                                {THEATER.map((el, index) => {
                                    return (
                                        <ul key={el.id} className={`region ${el.id === region + 1 ? "on" : ""}`}>
                                            <li>
                                                <strong
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setRegion(index);
                                                    }}
                                                >
                                                    {el.region}
                                                </strong>
                                            </li>
                                        </ul>
                                    );
                                })}
                            </div>
                            <div className="place">
                                {THEATER.map((el, idx) => (
                                    <div key={idx} className={`city ${el.id === region + 1 ? "on" : ""}`}>
                                        <ul>
                                            {el.city.map((li, idx) => (
                                                <li key={idx}>
                                                    <Link to="#">{li}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                            <div className="interest">
                                <span>나의 선호영화관 정보</span>
                                <Link to="#">
                                    <button>로그인하기</button>
                                </Link>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="title theaterEvent">
                            <h3>극장 이벤트</h3>
                            <Link className="more" to="/event/theater">
                                <span>더보기</span> <FaAngleRight />
                            </Link>
                        </div>
                        {/* Theater > .recoEvent 백그라운드, 패딩, p, h3 {display:none}  */}
                        <Recommendation />
                    </li>
                    <li>
                        <div className="title theaterEvent">
                            <h3>극장 공지사항</h3>
                            <Link className="more" to="/event/theater">
                                <span>더보기</span> <FaAngleRight />
                            </Link>
                        </div>
                        <Table theaterTable={theaterTable} />
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Theater;
