import React from "react";
import { FaRegCalendarAlt, FaSearch, FaTicketAlt, FaWindowMaximize } from "react-icons/fa";
import { Link } from "react-router-dom";
import Movie from "../components/Movie";
import "../css/Main.scss";

const Main = ({ BOXDATA, NAVERMOVIE }) => {
    return (
        <main>
            <section className="MainVisual">
                <div className="container">
                    <h2>박스오피스</h2>

                    {/* {NAVERMOVIE.map((el, idx) => {
                        return (
                            <ul key={idx}>
                                <li>{el.title}</li>
                                <li>{el.link}</li>
                                <li>{el.image}</li>
                            </ul>
                        );
                    })} */}

                    <div className="boxOffice">
                        <Movie BOXDATA={BOXDATA} />
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