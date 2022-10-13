import { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import "../../css/main/Theater.scss";
import Event from "../event/Event";
import Events from "../event/Events";
import Recommendation from "../event/Recommendation";

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

const Theater = () => {
    const [region, setRegion] = useState(0);

    return (
        <section className="Theater">
            <div className="container">
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
                            <li key={idx} className={`city ${el.id === region + 1 ? "on" : ""}`}>
                                <ul>
                                    {el.city.map((li, idx) => (
                                        <li key={idx}>
                                            <Link to="#">{li}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </div>
                    <div className="interest">
                        <span>나의 선호영화관 정보</span>
                        <Link to="#">
                            <button>로그인하기</button>
                        </Link>
                    </div>
                </div>
                <div className="title theaterEvent">
                    <h3>극장 이벤트</h3>
                    <Link className="more" to="/event/theater">
                        <span>더보기</span> <FaAngleRight />
                    </Link>
                </div>
                {/* Theater > .recoEvent 백그라운드, 패딩, p, h3 {display:none}  */}
                <Recommendation />
            </div>
        </section>
    );
};

export default Theater;
