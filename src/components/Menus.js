import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../css/components/Menus.scss";

const Menus = ({ menuTitle, routeURL }) => {
    //
    const [num, setNum] = useState(null);
    const params = useParams();

    return (
        <div className="Menus">
            <ul>
                {menuTitle.map((el) => {
                    return (
                        <Link to={routeURL + el.link} className="link" key={el.id}>
                            {/* 데이터의 link와 params가 같은 탭메뉴를 on으로 함 */}
                            <li className={`${el.link.slice(1, el.link.length) === params["*"] ? "on" : ""}`} onClick={() => setNum(params["*"])}>
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
