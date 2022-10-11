import React from "react";
import { Link } from "react-router-dom";
import "../../css/event/Recommendation.scss";

const Recommendation = () => {
    return (
        <div className="recoEvent">
            <div className="container">
                <h3>추천 이벤트</h3>
                <div className="box">
                    <Link to="#">
                        <figure>
                            <img src={process.env.PUBLIC_URL + "/assets/img/reco01.jpg"} alt="" />
                            <p>
                                <span className="text">[알뜰교통카드 X 메가박스] 알뜰하게 영화보고 콤보 구매하는 방법</span>
                                <span className="date">2021.11.04 ~ 2022.12.31</span>
                            </p>
                        </figure>
                    </Link>
                    <Link to="#">
                        <figure>
                            <img src={process.env.PUBLIC_URL + "/assets/img/reco02.jpg"} alt="" />
                            <p>
                                <span className="text">[알뜰교통카드 X 메가박스] 알뜰하게 영화보고 콤보 구매하는 방법</span>
                                <span className="date">2021.11.04 ~ 2022.12.31</span>
                            </p>
                        </figure>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Recommendation;
