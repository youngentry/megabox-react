import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../css/Movie.scss";

const MOVIEDATA = [
    {
        id: 1,
        imgSrc: "m01.jpg",
        heart: 515,
    },
    {
        id: 2,
        imgSrc: "m02.jpg",
        heart: 1400,
    },
    {
        id: 3,
        imgSrc: "m03.jpg",
        heart: 410,
    },
    {
        id: 4,
        imgSrc: "m04.jpg",
        heart: 155,
    },
];

function Movie() {
    return (
        <div className="Movie">
            <ul>
                {MOVIEDATA.map((el) => {
                    return (
                        <li key={el.id}>
                            <Link to="#">
                                <figure>
                                    <img
                                        src={
                                            process.env.PUBLIC_URL +
                                            `/assets/img/${el.imgSrc}`
                                        }
                                        alt=""
                                    />
                                </figure>
                            </Link>
                            <div className="box">
                                <button className="heart">
                                    <i>
                                        <FaRegHeart />
                                    </i>
                                    {el.heart}
                                </button>
                                <button className="buy">예매</button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Movie;
