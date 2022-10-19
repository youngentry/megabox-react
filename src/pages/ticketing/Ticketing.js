import React from "react";
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

const Ticketing = ({ TRENDINGDATA }) => {
    return (
        <section className="Ticketing">
            <div className="container">
                <h2>빠른예매</h2>
                <div className="content">
                    <div className="days">
                        <ul className="date">
                            {date.map((el) => {
                                return (
                                    <li key={el.id}>
                                        <strong>{el.date}</strong>
                                        <span>{el.week}</span>
                                    </li>
                                );
                            })}
                        </ul>
                        <div className="calendar">
                            <i>달력</i>
                        </div>
                    </div>
                    <div className="choice">
                        <div className="movie">
                            <h4>영화</h4>
                            <ul className="scroll">
                                {TRENDINGDATA.map((el) => {
                                    return (
                                        <li key={el.id} className="selMovie">
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
                                    {THEATER.map((el) => {
                                        return <li key={el.id}>{el.region}</li>;
                                    })}
                                </ul>
                                <div className="selTheater scroll">
                                    <ul>
                                        {THEATER[0].city.map((el, idx) => {
                                            return <li key={idx}>{el}</li>;
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="time">
                            <div className="top">
                                <h4>시간</h4>
                                <div className="sun">
                                    <span>조조</span>
                                    <span>브런치</span>
                                    <span>심야</span>
                                </div>
                            </div>
                            <ul className="tab">
                                <li>09</li>
                                <li>10</li>
                                <li>11</li>
                                <li>12</li>
                                <li>13</li>
                                <li>14</li>
                                <li>15</li>
                                <li>16</li>
                                <li>17</li>
                                <li>18</li>
                                <li>19</li>
                            </ul>
                            <ul className="selTime scroll">
                                <li>
                                    <div className="left">
                                        <div className="showTime">
                                            <strong>11:30</strong>
                                            <span>~13:44</span>
                                        </div>
                                        <div className="show">
                                            <strong>블랙아담</strong>
                                            <span>2D(자막)</span>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="where">
                                            <div>강남</div>
                                            <div>4관</div>
                                            <div className="seat">101/103</div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="left">
                                        <div className="showTime">
                                            <strong>11:30</strong>
                                            <span>~13:44</span>
                                        </div>
                                        <div className="show">
                                            <strong>블랙아담</strong>
                                            <span>2D(자막)</span>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="where">
                                            <div>강남</div>
                                            <div>4관</div>
                                            <div className="seat">101/103</div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="left">
                                        <div className="showTime">
                                            <strong>11:30</strong>
                                            <span>~13:44</span>
                                        </div>
                                        <div className="show">
                                            <strong>블랙아담</strong>
                                            <span>2D(자막)</span>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="where">
                                            <div>강남</div>
                                            <div>4관</div>
                                            <div className="seat">101/103</div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ticketing;
