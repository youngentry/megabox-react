import React, { useEffect, useState } from "react";
import "../css/components/SearchMovie.scss";

const SearchMovie = ({ searchVisual, TRENDINGDATA, getTMDBSearch, searchList, setSearchList, searchQuery, setSearchQuery }) => {
    useEffect(() => {
        // input이벤트는 onChange로 검색어가 변할 때마다 검색결과를 출력하도록 합니다.
        if (searchQuery !== "") {
            getTMDBSearch();
            // 검색창이 비어있다면 검색결과를 삭제합니다.
        } else if (searchQuery === "") {
            setSearchList([]);
        }
    }, [searchQuery]);

    // 검색어를 입력할 때마다 바꾸지 않고 입력하고 잠깐 기다렸다가 출력되도록 하려면 이벤트에 setTimeout을 합니다.
    const querySetTimeout = (e) => {
        setTimeout(() => {
            setSearchQuery(e.target.value);
        }, 500);
    };

    const [num, setNum] = useState(0);
    const [sNum, setSNum] = useState(0);

    return (
        <div className={`searchMovie ${searchVisual ? "on" : ""}`}>
            <div className="container">
                <h3>예매율 순위</h3>
                <div className="content">
                    <ul className="left">
                        {TRENDINGDATA.slice(0, 5).map((el, idx) => {
                            return (
                                <li key={idx} className={`${idx === num ? "on" : ""}`}>
                                    <div className="img">
                                        <figure>
                                            <img src={"https://image.tmdb.org/t/p/w500/" + el.poster_path} alt="" />
                                        </figure>
                                    </div>
                                    <div className="txt">
                                        <p>
                                            <span>{idx + 1}</span>
                                            <strong
                                                onMouseEnter={() => {
                                                    setNum(idx);
                                                }}
                                            >
                                                {el.title}
                                            </strong>
                                        </p>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                    <ul className="right">
                        <input onChange={(e) => querySetTimeout(e)} placeholder="영화이름으로 검색하세요.     ex) 토르" />
                        {searchList.slice(0, 7).map((el, idx) => {
                            return (
                                <li key={idx} className={`${idx === sNum ? "on" : ""}`}>
                                    {el.poster_path ? (
                                        <div className="autoComp">
                                            <div className="txt">
                                                <span
                                                    onMouseEnter={() => {
                                                        setSNum(idx);
                                                    }}
                                                >
                                                    {el.title}
                                                </span>
                                            </div>
                                            <div className="img">
                                                <img src={"https://image.tmdb.org/t/p/w500/" + el.poster_path} alt="" />
                                            </div>
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SearchMovie;
