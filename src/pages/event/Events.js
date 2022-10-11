import React from "react";

const Events = ({ EVENTDATA }) => {
    return (
        <li>
            <figure>
                <img src={process.env.PUBLIC_URL + `/assets/img/event/${EVENTDATA.imgSrc}.jpg`} alt="" />
            </figure>
        </li>
    );
};

export default Events;
