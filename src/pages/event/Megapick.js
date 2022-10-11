import React from "react";
import Events from "./Events";
import "../../css/event/Megapick.scss";

const Megapick = ({ MEGAPICKDATA, num }) => {
    return (
        <div className="MegaPick">
            <div className="container">
                <h3>메가Pick</h3>
                <ul>
                    {MEGAPICKDATA.slice(0, num).map((el) => {
                        return <Events key={el.id} EVENTDATA={el} />;
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Megapick;
