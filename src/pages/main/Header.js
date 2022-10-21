import React, { useState } from "react";
import "../../css/main/Header.scss";
import { FaBars, FaSearch, FaRegCalendarAlt, FaUserAlt, FaPlus } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import SearchMovie from "../../components/SearchMovie";
import { BsFillXCircleFill, IconName } from "react-icons/bs";

const Header = ({ TRENDINGDATA, getTMDBSearch, searchList, setSearchList, searchQuery, setSearchQuery, setSearchOne }) => {
    const [searchVisual, setSearchVisual] = useState(false);
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
                                    {/* 돋보기 아이콘 <-> 닫기 아이콘 전환 */}
                                    <i
                                        className={`searchI ${searchVisual ? "on" : ""}`}
                                        onClick={(e) => {
                                            setSearchVisual(!searchVisual);
                                        }}
                                    >
                                        <FaSearch />
                                    </i>
                                    <i className={`closeI ${searchVisual ? "" : "on"}`} onClick={(e) => setSearchVisual(!searchVisual)}>
                                        <BsFillXCircleFill />
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
                                <Link to="/ticketing">
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
                        searchVisual={searchVisual}
                        TRENDINGDATA={TRENDINGDATA}
                        getTMDBSearch={getTMDBSearch}
                        searchList={searchList}
                        setSearchList={setSearchList}
                        setSearchOne={setSearchOne}
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                    />
                </nav>
            </div>
        </header>
    );
};

export default Header;
