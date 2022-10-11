import React from "react";
import Events from "./Events";

const Megapick = ({ MEGAPICKDATA, num }) => {
    return (
        <div>
            <h3>메가Pick</h3>
            {console.log(MEGAPICKDATA.slice(0, num))}
            {MEGAPICKDATA.map((el) => {
                return <Events EVENTDATA={el} />;
            })}
        </div>
    );
};

export default Megapick;
