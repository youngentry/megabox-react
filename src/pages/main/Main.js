import React, { useRef, useState } from "react";
import { FaRegCalendarAlt, FaSearch, FaTicketAlt, FaWindowMaximize } from "react-icons/fa";
import { Link } from "react-router-dom";
import Movie from "../../components/Movie";
import "../../css/main/Main.scss";

const Main = ({ TRENDINGDATA }) => {
    const [showCount, setShowCount] = useState(1);

    return (
        <main>
            <section className="MainVisual">
                <div className="container">
                    <h2>박스오피스</h2>
                    <div className="boxOffice">
                        <Movie TRENDINGDATA={TRENDINGDATA} showCount={showCount} />
                        <ul className="service">
                            <li>
                                <form action="">
                                    <input placeholder="영화명을 입력해 주세요"></input>
                                    <button>
                                        <FaSearch />
                                    </button>
                                </form>
                            </li>
                            <li>
                                <Link to="#" className="link">
                                    <i>
                                        <FaRegCalendarAlt />
                                    </i>
                                    <span>상영시간표</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="link">
                                    <i>
                                        <FaWindowMaximize />
                                    </i>
                                    <span>박스오피스</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="link">
                                    <i>
                                        <FaTicketAlt />
                                    </i>
                                    <span>빠른예매</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Main;
