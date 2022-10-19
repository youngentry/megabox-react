import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight, FaCalendarAlt } from "react-icons/fa";
import Menus from "../../components/Menus";
import "../../css/ticketing/Ticketing.scss";
import Theater from "../theater/Theater";

const date = [
    { id: 1, date: 19, week: "오늘" },
    { id: 2, date: 20, week: "내일" },
    { id: 3, date: 21, week: "금" },
    { id: 4, date: 22, week: "토" },
    { id: 5, date: 23, week: "일" },
    { id: 6, date: 24, week: "월" },
    { id: 7, date: 25, week: "화" },
    { id: 8, date: 26, week: "수" },
    { id: 9, date: 27, week: "목" },
    { id: 10, date: 28, week: "금" },
    { id: 11, date: 29, week: "토" },
    { id: 12, date: 30, week: "일" },
    { id: 13, date: 31, week: "월" },
    { id: 14, date: 1, week: "화" },
];
const THEATER = [
    {
        id: 1,
        region: "서울",
        city: [
            "강남",
            "강남대로(씨티)",
            "강동",
            "군자",
            "강동",
            "동대문",
            "마곡",
            "목동",
            "상봉",
            "상암월드컵경기장",
            "성수",
            "센트럴",
            "송파파크하비오",
            "신촌",
            "이수",
            "창동",
            "코엑스",
            "홍대",
            "화곡",
            "ARTNINE",
        ],
    },
    {
        id: 2,
        region: "경기",
        city: [
            "목동",
            "상봉",
            "상암월드컵경기장",
            "성수",
            "센트럴",
            "송파파크하비오",
            "신촌",
            "강남대로(씨티)",
            "강동",
            "군자",
            "강남대로(씨티)",
            "목동",
            "상봉",
            "상암월드컵경기장",
            "성수",
            "센트럴",
            "송파파크하비오",
            "신촌",
            "강동",
            "강남대로(씨티)",
            "강동",
        ],
    },
    {
        id: 3,
        region: "인천",
        city: ["송파파크하비오", "신촌", "이수", "창동", "코엑스", "홍대", "화곡", "ARTNINE", "강동", "강남대로(씨티)", "군자", "강동", "동대문", "마곡", "목동", "상봉"],
    },
    {
        id: 4,
        region: "대전/충청/세종",
        city: [
            "마곡",
            "목동",
            "상봉",
            "상암월드컵경기장",
            "성수",
            "센트럴",
            "송파파크하비오",
            "신촌",
            "이수",
            "상암월드컵경기장",
            "성수",
            "센트럴",
            "송파파크하비오",
            "신촌",
            "이수",
            "창동",
            "코엑스",
            "강남대로(씨티)",
            "강동",
            "군자",
        ],
    },
    {
        id: 5,
        region: "부산/대구/경상",
        city: [
            "상암월드컵경기장",
            "성수",
            "센트럴",
            "송파파크하비오",
            "신촌",
            "이수",
            "송파파크하비오",
            "신촌",
            "이수",
            "상암월드컵경기장",
            "성수",
            "센트럴",
            "송파파크하비오",
            "신촌",
            "이수",
            "강동",
            "군자",
        ],
    },
    {
        id: 6,
        region: "광주/전라",
        city: [
            "이수",
            "송파파크하비오",
            "신촌",
            "이수",
            "상암월드컵경기장",
            "성수",
            "센트럴",
            "송파파크하비오",
            "신촌",
            "이수",
            "상암월드컵경기장",
            "성수",
            "센트럴",
            "송파파크하비오",
            "신촌",
            "이수",
            "강남대로(씨티)",
            "강동",
            "군자",
        ],
    },
    {
        id: 7,
        region: "강원",
        city: ["목동", "상봉", "상암월드컵경기장", "성수", "센트럴", "송파파크하비오", "신촌", "센트럴", "상암월드컵경기장", "성수", "센트럴", "강남대로(씨티)", "강동", "군자"],
    },
];
const TIME = [
    { id: 1, time: 10 },
    { id: 2, time: 11 },
    { id: 3, time: 12 },
    { id: 4, time: 13 },
    { id: 5, time: 14 },
    { id: 6, time: 15 },
    { id: 7, time: 16 },
    { id: 8, time: 17 },
    { id: 9, time: 18 },
    { id: 10, time: 19 },
    { id: 11, time: 20 },
    { id: 12, time: 21 },
    { id: 13, time: 22 },
    { id: 14, time: 23 },
];

const Ticketing = ({ TRENDINGDATA }) => {
    const [isDateClicked, setIsDateClicked] = useState(false);
    const [isRegionClicked, setIsRegionClicked] = useState(false);
    const [isTheaterClicked, setIsTheaterClicked] = useState(false);
    const [dateNum, setDateNum] = useState(0);
    const [movieNum, setMovieNum] = useState(0);
    const [regionNum, setRegionNum] = useState(null);
    const [theaterNum, setTheaterNum] = useState(null);
    const [timeNum, setTimeNum] = useState(0);

    return (
        <section className="Ticketing">
            <div className="container">
                <h2>빠른예매</h2>
                <div className="content">
                    <div className="days">
                        <ul className="date">
                            <div>
                                <i>
                                    <FaAngleLeft />
                                </i>
                            </div>
                            {date.map((el, idx) => {
                                return (
                                    <li
                                        key={el.id}
                                        className={`${dateNum === idx ? "on" : ""}`}
                                        onClick={() => {
                                            setDateNum(idx);
                                        }}
                                    >
                                        <strong>{el.date}</strong>
                                        <span>{el.week}</span>
                                    </li>
                                );
                            })}
                            <div>
                                <i>
                                    <FaAngleRight />
                                </i>
                            </div>
                        </ul>
                        <div className="calendar">
                            <i>
                                <FaCalendarAlt />
                            </i>
                        </div>
                    </div>
                    <div className="choice">
                        <div className="movie">
                            <h4>영화</h4>
                            <ul className="scroll">
                                {TRENDINGDATA.map((el, idx) => {
                                    return (
                                        <li
                                            key={el.id}
                                            className={`selMovie ${movieNum === idx ? "on" : ""}`}
                                            onClick={() => {
                                                setMovieNum(idx);
                                            }}
                                        >
                                            {el.title}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="theater">
                            <h4>극장</h4>
                            <div className="box">
                                <ul className="selRegion">
                                    {THEATER.map((el, idx) => {
                                        return (
                                            <li
                                                key={idx}
                                                className={`${regionNum === idx ? "on" : ""}`}
                                                onClick={() => {
                                                    setRegionNum(idx);
                                                    setIsRegionClicked(true);
                                                    setTheaterNum(null);
                                                    setIsTheaterClicked(false);
                                                }}
                                            >
                                                {el.region}({el.city.length})
                                            </li>
                                        );
                                    })}
                                </ul>
                                <div className={`selTheater scroll ${isRegionClicked ? "clicked" : ""}`}>
                                    <ul>
                                        {regionNum === null
                                            ? THEATER[0].city.map((el, idx) => {
                                                  return (
                                                      <li
                                                          key={idx}
                                                          className={`${theaterNum === idx ? "on" : ""}`}
                                                          onClick={() => {
                                                              setTheaterNum(idx);
                                                              setIsTheaterClicked(true);
                                                          }}
                                                      >
                                                          {el}
                                                      </li>
                                                  );
                                              })
                                            : THEATER[regionNum].city.map((el, idx) => {
                                                  return (
                                                      <li
                                                          key={idx}
                                                          className={`${theaterNum === idx ? "on" : ""}`}
                                                          onClick={() => {
                                                              setTheaterNum(idx);
                                                              setIsTheaterClicked(true);
                                                          }}
                                                      >
                                                          {el}
                                                      </li>
                                                  );
                                              })}
                                        {}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={`time ${isTheaterClicked ? "clicked" : ""}`}>
                            <div className="top">
                                <h4>시간</h4>
                                <div className="sun">
                                    <span>조조</span>
                                    <span>브런치</span>
                                    <span>심야</span>
                                </div>
                            </div>
                            <ul className="tab">
                                {TIME.map((el, idx) => {
                                    return (
                                        <li
                                            key={el.idx}
                                            className={`${timeNum === idx ? "on" : ""}`}
                                            onClick={() => {
                                                setTimeNum(idx);
                                            }}
                                        >
                                            {el.time}
                                        </li>
                                    );
                                })}
                            </ul>
                            <ul className="selTime scroll">
                                {TRENDINGDATA.map((el, idx) => {
                                    return (
                                        <li key={idx}>
                                            <div className="left">
                                                <div className="showTime">
                                                    <strong>{`${TIME[idx % 14].time + timeNum}:30`}</strong>
                                                    <span>{`${TIME[idx % 14].time + timeNum + 2}:31`}</span>
                                                </div>
                                                <div className="show">
                                                    <strong>{TRENDINGDATA[movieNum].title}</strong>
                                                    <span>2D(자막)</span>
                                                </div>
                                            </div>
                                            <div className="right">
                                                <div className="where">
                                                    <div>강남</div>
                                                    <div>4관</div>
                                                    <div className="seat">101 / 103</div>
                                                </div>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ticketing;
