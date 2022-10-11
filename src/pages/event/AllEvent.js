import React from "react";
import Megapick from "./Megapick";
import Recommendation from "./Recommendation";

const AllEvent = ({ MEGAPICKDATA }) => {
    return (
        <div>
            <Recommendation />
            <div className="container">
                <Megapick MEGAPICKDATA={MEGAPICKDATA} num={4} />
            </div>
        </div>
    );
};

export default AllEvent;