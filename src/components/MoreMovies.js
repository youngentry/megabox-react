import React, { useEffect, useRef } from "react";
import "../css/components/MoreMovies.scss";
import { FaAngleDown } from "react-icons/fa";

const MoreMovies = ({ setShowCount }) => {
    const num = useRef(3);
    const showCountPlus = (num) => {
        num.current++;
        setShowCount(num.current);
    };

    // 4 * 4 까지 출력하게 되면 더보기 버튼이 사라짐
    return (
        <div className="MoreMovies">
            {num.current < 5 ? (
                <button onClick={() => showCountPlus(num)}>
                    <span>더보기</span>
                    <i>
                        <FaAngleDown />
                    </i>
                </button>
            ) : (
                ""
            )}
        </div>
    );
};

export default MoreMovies;
