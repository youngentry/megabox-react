import React from "react";
import "../../css/Vip.scss";
import { FaRegQuestionCircle } from "react-icons/fa";

const Vip = () => {
    return (
        <div className="Vip">
            <div className="container">
                <div className="ticketBox">
                    <div className="left">
                        <h3>MEGABOX VIP</h3>
                        <span>메가박스의 더 많은 혜택을 누릴 수 있는 방법!</span>
                    </div>
                    <div className="right">
                        <FaRegQuestionCircle className="question" />
                        <span>로그인 후 메가박스 등급을 확인하세요.</span>
                        <button>로그인</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vip;
