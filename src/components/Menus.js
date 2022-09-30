import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/Menus.scss";

const Menus = ({ menuTitle, routeURL }) => {
    const [num, setNum] = useState(0);

    return (
        <div className="Menus">
            <ul>
                {menuTitle.map((el, idx) => {
                    return (
                        <Link
                            to={routeURL + el.link}
                            className="link"
                            key={el.id}
                        >
                            <li
                                className={`${idx == num ? "on" : ""}`}
                                onClick={() => setNum(idx)}
                            >
                                {el.title}
                            </li>
                        </Link>
                    );
                })}
            </ul>
        </div>
    );
};

export default Menus;
