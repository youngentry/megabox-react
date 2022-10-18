import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../css/components/Movie.scss";

const Movie = ({ showCount, TRENDINGDATA }) => {
    console.log(TRENDINGDATA);
    return (
        <div className="Movie">
            <ul>
                {TRENDINGDATA.slice(0, 4 * showCount).map((el) => {
                    return (
                        <li key={el.id}>
                            <Link to="#">
                                <div className="poster">
                                    <figure>
                                        <img src={"https://image.tmdb.org/t/p/w500/" + el.poster_path} alt="" />
                                        <div className="inner">
                                            <p className="overview">{el.overview.slice(0, 200)}</p>
                                            <p className="vote">
                                                관람평 <span>{el.vote_average.toString().slice(0, 3)}</span>
                                            </p>
                                        </div>
                                    </figure>
                                </div>
                            </Link>
                            <div className="box">
                                <button className="heart">
                                    <i>
                                        <FaRegHeart />
                                    </i>
                                    {el.vote_count}
                                </button>
                                <button className="buy">예매</button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Movie;
