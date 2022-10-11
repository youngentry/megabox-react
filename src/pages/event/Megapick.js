import React from "react";
import Events from "./Events";
import "../../css/event/Megapick.scss";

const Megapick = ({ MEGAPICKDATA, num }) => {
    return (
        <div className="MegaPick">
            <div className="container">
                {num !== 4 ? (
                    <p>
                        전체 <span>{MEGAPICKDATA.length}</span>건
                    </p>
                ) : (
                    ""
                )}
                <Events MEGAPICKDATA={MEGAPICKDATA} num={num} />
            </div>
        </div>
    );
};

export default Megapick;
