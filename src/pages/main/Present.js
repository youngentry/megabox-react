import React from "react";
import { FaGem, FaGift, FaPlus, FaRegAddressCard, FaThermometer, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../css/main/Present.scss";

const Present = () => {
    return (
        <section className="Present">
            <div className="container">
                <div className="tit">
                    <h2>혜택</h2>
                    <i>
                        <Link to="event/allevent">
                            <FaPlus />
                        </Link>
                    </i>
                </div>
                <div className="content">
                    <div className="left">
                        <div className="slide">
                            <div className="inLeft">
                                <figure>
                                    <Link to="#">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/main/es01.jpg"} alt="" />
                                    </Link>
                                </figure>
                            </div>
                            <div className="inRight">
                                <figure>
                                    <Link to="#">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/main/es01-2.jpg"} alt="" />
                                    </Link>
                                </figure>
                            </div>
                        </div>
                        <div className="ad">
                            <figure>
                                <Link to="#">
                                    <img src={process.env.PUBLIC_URL + "/assets/img/main/e01.jpg"} alt="" />
                                </Link>
                            </figure>
                            <figure>
                                <Link to="#">
                                    <img src={process.env.PUBLIC_URL + "/assets/img/main/e02.jpg"} alt="" />
                                </Link>
                            </figure>
                        </div>
                    </div>
                    <div className="right">
                        <figure>
                            <Link to="#">
                                <img src={process.env.PUBLIC_URL + "/assets/img/main/e03.jpg"} alt="" />
                            </Link>
                        </figure>
                    </div>
                </div>
            </div>
            <div className="linkIcons">
                <div className="container">
                    <ul>
                        <li>
                            <i>
                                <Link to="benefit/vip">
                                    <FaGem />
                                </Link>
                            </i>
                            <span>VIP LOUNGE</span>
                        </li>
                        <li>
                            <i>
                                <Link to="benefit/membership">
                                    <FaUserAlt />
                                </Link>
                            </i>
                            <span>멤버십</span>
                        </li>
                        <li>
                            <i>
                                <Link to="#">
                                    <FaRegAddressCard />
                                </Link>
                            </i>
                            <span>할인카드안내</span>
                        </li>
                        <li>
                            <i>
                                <Link to="event/allevent">
                                    <FaGift />
                                </Link>
                            </i>
                            <span>이벤트</span>
                        </li>
                        <li>
                            <i>
                                <Link to="store/newitem">
                                    <FaThermometer />
                                </Link>
                            </i>
                            <span>스토어</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Present;
