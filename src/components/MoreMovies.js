import React, { useRef } from "react";
import "../css/components/MoreMovies.scss";

const MoreMovies = ({ setShowCount }) => {
    const num = useRef(1);
    const showCountPlus = (num) => {
        num.current++;
        setShowCount(num.current);
        console.log(num);
    };

    // 4 * 4 까지 출력하게 되면 더보기 버튼이 사라짐
    return <div className="MoreMovies">{num.current < 4 ? <button onClick={() => showCountPlus(num)}>더보기</button> : ""}</div>;
};

export default MoreMovies;
