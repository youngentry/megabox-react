import React from "react";
import { Link } from "react-router-dom";
import "../../css/store/Goods.scss";

const Goods = ({ STOREDATA }) => {
    return (
        <div className="Goods">
            <ul>
                {STOREDATA.map((el) => {
                    return (
                        <li key={el.id}>
                            <Link to="#">
                                <figure className="giftImg">
                                    <img src={process.env.PUBLIC_URL + `/assets/img/store/${el.imgSrc}.png`} alt="" />
                                </figure>
                                <div className="txt">
                                    <p>{el.content}</p>
                                    <strong>{el.des}</strong>
                                    <span>{el.price}</span>
                                </div>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Goods;
