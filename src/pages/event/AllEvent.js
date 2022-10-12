import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Curtaincall from "./Curtaincall";
import EventMovie from "./EventMovie";
import Megapick from "./Megapick";
import Promotion from "./Promotion";
import Recommendation from "./Recommendation";
import Theater from "./EventTheater";

const AllEvent = ({ MEGAPICKDATA }) => {
    return (
        <div>
            <Recommendation />
            <div className="container">
                <ul>
                    <li>
                        <div className="title megapick">
                            <h3>메가Pick</h3>
                            <Link className="more" to="/event/megapick">
                                <span>더보기</span> <FaAngleRight />
                            </Link>
                        </div>
                        <Megapick MEGAPICKDATA={MEGAPICKDATA} num={4} />
                    </li>
                    <li>
                        <div className="title eventmovie">
                            <h3>영화</h3>
                            <Link className="more" to="/event/eventmovie">
                                <span>더보기</span> <FaAngleRight />
                            </Link>
                        </div>
                        <EventMovie num={4} />
                    </li>
                    <li>
                        <div className="title theater">
                            <h3>극장</h3>
                            <Link className="more" to="/event/theater">
                                <span>더보기</span> <FaAngleRight />
                            </Link>
                        </div>
                        <Theater num={4} />
                    </li>
                    <li>
                        <div className="title promotion">
                            <h3>제휴/할인</h3>
                            <Link className="more" to="/event/promotion">
                                <span>더보기</span> <FaAngleRight />
                            </Link>
                        </div>
                        <Promotion num={4} />
                    </li>
                    <li>
                        <div className="title curtaincall">
                            <h3>시사회/무대인사</h3>
                            <Link className="more" to="/event/curtaincall">
                                <span>더보기</span> <FaAngleRight />
                            </Link>
                        </div>
                        <Curtaincall num={4} />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AllEvent;
