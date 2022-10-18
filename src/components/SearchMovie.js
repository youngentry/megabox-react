import React, { useEffect } from "react";
import "../css/components/SearchMovie.scss";

const SearchMovie = ({ getTMDBSearch, searchList, setSearchList, searchQuery, setSearchQuery }) => {
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

    return (
        <div className="searchMovie">
            <ul>
                {searchList.map((el, idx) => {
                    return (
                        <li className="box" key={idx}>
                            {el.poster_path ? (
                                <div>
                                    <span>{el.title}</span>
                                    <figure>
                                        <img src={"https://image.tmdb.org/t/p/w500/" + el.poster_path} alt="" />
                                    </figure>
                                </div>
                            ) : (
                                ""
                            )}
                        </li>
                    );
                })}
            </ul>
            <input onChange={(e) => querySetTimeout(e)} onSubmit placeholder="검색어를 입력해주세요." />
        </div>
    );
};

export default SearchMovie;
