import React, { useEffect, useState } from "react";
import "../css/Menus.scss";

const Menus = ({ menuTitle }) => {
    const [active, setActive] = useState();

    return (
        <div className="Menus">
            <ul>
                {menuTitle.map((el, idx) => {
                    return (
                        <li
                            key={el.id}
                            className={`${el.id == active + 1 ? "on" : ""}`}
                            onClick={(e) => {
                                setActive(idx);
                            }}
                        >
                            {el.title}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Menus;
