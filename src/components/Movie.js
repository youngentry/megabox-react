import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../css/components/Movie.scss";

const Movie = ({ showCount, MOVIEDATA, pagination, setPagination }) => {
    const [isMovie, setIsMovie] = useState(false);

    useEffect(() => {
        if (showCount !== 1) {
            setIsMovie(true);
        }
    }, [showCount]);

    return (
        <div className="Movie">
            {/*  isMovie 기능 :
            무비페이지에서는 타이틀, 예매율, 개봉일 표시하고
            메인페이지에서는 찜과 예매 버튼만 표시합니다. */}
            {isMovie ? (
                <ul>
                    {MOVIEDATA.slice(0, 4 * showCount).map((el) => {
                        return (
                            <li key={el.id}>
                                <Link to={`/list/${el.id}`}>
                                    <div className="poster">
                                        <figure>
                                            <img src={"https://image.tmdb.org/t/p/w500/" + el.poster_path} alt="" />
                                            {/* overview의 내용이 없는 경우 처리 */}
                                            {el.overview !== "" ? (
                                                <div className="inner">
                                                    <p className="overview">{el.overview.slice(0, 200)}</p>
                                                    <p className="vote">
                                                        관람평 <span>{el.vote_average.toString().slice(0, 3)}</span>
                                                    </p>
                                                </div>
                                            ) : (
                                                <div className="inner">
                                                    <p className="overview">줄거리 업데이트 예정입니다.</p>
                                                    <p className="vote">
                                                        관람평 <span>{el.vote_average.toString().slice(0, 3)}</span>
                                                    </p>
                                                </div>
                                            )}
                                        </figure>
                                    </div>
                                </Link>
                                <div className="box">
                                    <div className="title">{el.title}</div>
                                    <div className="release">
                                        <span>예매율 : 10.0%</span>
                                        <strong>개봉일 {el.release_date}</strong>
                                    </div>
                                    <div className="buttons">
                                        <button className="heart">
                                            <i>
                                                <FaRegHeart />
                                            </i>
                                            {el.vote_count}
                                        </button>
                                        <button className="buy">예매</button>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <ul>
                    {MOVIEDATA.slice(0, 4 * showCount).map((el) => {
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
                                    <div className="buttons">
                                        <button className="heart">
                                            <i>
                                                <FaRegHeart />
                                            </i>
                                            {el.vote_count}
                                        </button>
                                        <button className="buy">예매</button>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export default Movie;
