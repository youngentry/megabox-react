import React from "react";
import Movie from "../../components/Movie";

const Comingsoon = ({ showCount, UPCOMINGDATA }) => {
    return (
        <div>
            <Movie showCount={showCount} MOVIEDATA={UPCOMINGDATA} />
        </div>
    );
};

export default Comingsoon;
