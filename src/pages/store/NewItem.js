import React from "react";
import { Link } from "react-router-dom";
import "../../css/store/NewItem.scss";

const NewItem = () => {
    return (
        <div>
            <div className="NewItem">
                <div className="container">
                    <Link to="#">
                        <div className="box">
                            <div className="text">
                                <p>메가박스 기프트카드 런칭!</p>
                                <p>소중한 분께 선물하세요!</p>
                                <span>메가박스 기프트카드 3만원권</span>
                            </div>
                            <figure className="cardImg">
                                <img src={process.env.PUBLIC_URL + "/assets/img/giftcard01.jpg"} alt="" />
                            </figure>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NewItem;
