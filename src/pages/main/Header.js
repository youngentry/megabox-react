import React from "react";
import "../../css/main/Header.scss";
import { FaBars, FaSearch, FaRegCalendarAlt, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import SearchMovie from "../../components/SearchMovie";

const Header = ({ TRENDINGDATA, getTMDBSearch, searchList, setSearchList, searchQuery, setSearchQuery }) => {
    return (
        <header className="Header">
            <div className="container">
                <nav>
                    <h1>
                        <Link to="/">
                            <img src={process.env.PUBLIC_URL + "/assets/img/megabox-logo.png"} alt="LOGO"></img>
                        </Link>
                    </h1>
                    <div className="left">
                        <ul className="top">
                            <li>
                                <Link to="#">VIP LOUNGE</Link>
                            </li>
                            <li>
                                <Link to="#">멤버십</Link>
                            </li>
                            <li>
                                <Link to="#">고객센터</Link>
                            </li>
                        </ul>
                        <ul className="bottom">
                            <li className="icons">
                                <div>
                                    <i>
                                        <FaBars />
                                    </i>
                                </div>
                                <div>
                                    <i>
                                        <FaSearch />
                                    </i>
                                </div>
                            </li>
                            <li>
                                <Link to="/movies/boxoffice">영화</Link>
                            </li>
                            <li>
                                <Link to="/ticketing">예매</Link>
                            </li>
                            <li>
                                <Link to="/theater">극장</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul className="top">
                            <li>
                                <Link to="#">로그인</Link>
                            </li>
                            <li>
                                <Link to="#">회원가입</Link>
                            </li>
                            <li>
                                <Link to="#">빠른예매</Link>
                            </li>
                        </ul>
                        <ul className="bottom">
                            <li>
                                <Link to="/event/allevent">이벤트</Link>
                            </li>
                            <li>
                                <Link to="/store/newitem">스토어</Link>
                            </li>
                            <li>
                                <Link to="/benefit/membership">혜택</Link>
                            </li>
                            <li className="icons">
                                <Link to="#">
                                    <div>
                                        <i>
                                            <FaRegCalendarAlt />
                                        </i>
                                    </div>
                                </Link>
                                <div>
                                    <i>
                                        <FaUserAlt />
                                    </i>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <SearchMovie
                        TRENDINGDATA={TRENDINGDATA}
                        getTMDBSearch={getTMDBSearch}
                        searchList={searchList}
                        setSearchList={setSearchList}
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                    />
                </nav>
            </div>
        </header>
    );
};

export default Header;
