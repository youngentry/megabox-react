import React, { useRef } from "react";
import "../css/components/MoreMovies.scss";

const MoreMovies = ({ setShowCount }) => {
    const num = useRef(1);
    const showCountPlus = (num) => {
        num.current++;
        setShowCount(num.current);
    };

    // const [isNoMore, setIsNoMore] = useState(false);
    // const toggleIsNoMore = () => setIsNoMore(!isNoMore);
    // if (showCount > MOVIEDATA.length)

    return (
        <div className="MoreMovies">
            <button onClick={() => showCountPlus(num)}>더보기</button>
        </div>
    );
};

export default MoreMovies;
