import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../css/store/NewItem.scss";
import Food from "./Food";
import Giftcard from "./GiftCard";
import Megaticket from "./Megaticket";

const NewItem = ({ num }) => {
    return (
        <div className="NewItem">
            <div className="container">
                <ul>
                    <li>
                        <Link to="#">
                            <div className="box">
                                <div className="text">
                                    <p>메가박스 기프트카드 런칭!</p>
                                    <p>소중한 분께 선물하세요!</p>
                                    <span>메가박스 기프트카드 3만원권</span>
                                </div>
                                <figure className="cardImg">
                                    <img src={process.env.PUBLIC_URL + "/assets/img/newitem01.jpg"} alt="" />
                                </figure>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <div className="title">
                            <h3>기프트카드</h3>
                            <Link className="more" to="/store/giftcard">
                                <span>더보기</span> <FaAngleRight />
                            </Link>
                        </div>
                        <Giftcard />
                    </li>
                    <li>
                        <div className="title">
                            <h3>메가티켓</h3>
                            <Link className="more" to="/store/megaticket">
                                <span>더보기</span> <FaAngleRight />
                            </Link>
                        </div>
                        <Megaticket num={num} />
                    </li>
                    <li>
                        <div className="title">
                            <h3>팝콘/음료/굿즈</h3>
                            <Link className="more" to="/store/food">
                                <span>더보기</span> <FaAngleRight />
                            </Link>
                        </div>
                        <Food />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NewItem;
