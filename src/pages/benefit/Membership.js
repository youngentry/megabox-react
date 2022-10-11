import React from "react";
import { Link } from "react-router-dom";
import "../../css/Membership.scss";

const Membership = ({ MEMBERSHIPDATA }) => {
    return (
        <div>
            {
                <div className="Membership">
                    <div className="container">
                        <div className="box">
                            <h3>MEGABOX MEMBERSHIP</h3>
                            <span>메가박스 멤버십 회원에게만 제공되는 다양한 혜택</span>
                        </div>
                        <div className="des">
                            <h4>메가박스 멤버십 혜택</h4>
                            <ul className="content">
                                {MEMBERSHIPDATA.map((el) => {
                                    return (
                                        <li key={el.id}>
                                            <h5>{el.title}</h5>
                                            <p>{el.des1}</p>
                                            <p>{el.des2}</p>
                                            <Link to="#">
                                                <button>자세히 보기</button>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Membership;
