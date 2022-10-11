import React from "react";
import { Link } from "react-router-dom";
import "../../css/event/Events.scss";

const Events = ({ MEGAPICKDATA, num }) => {
    return (
        <div className="Events">
            <ul>
                {MEGAPICKDATA.slice(0, num).map((el) => {
                    return (
                        <li key={el.id}>
                            <Link to="#">
                                <figure>
                                    <img src={process.env.PUBLIC_URL + `/assets/img/event/${el.imgSrc}.jpg`} alt="" />
                                </figure>
                                <div className="txt">
                                    <p>{el.title}</p>
                                    <strong>{el.period}</strong>
                                </div>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Events;
