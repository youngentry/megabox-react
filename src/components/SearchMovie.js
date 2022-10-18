import React, { useEffect } from "react";
import "../css/components/SearchMovie.scss";

const SearchMovie = ({ getTMDBSearch, searchList, setSearchList, searchQuery, setSearchQuery }) => {
    useEffect(() => {
        // input이벤트는 onChange로 검색어가 변할 때마다 검색결과를 출력하도록 합니다.
        // 검색어를 입력하면 1초 뒤 결과를 출력합니다.
        if (searchQuery !== "") {
            setTimeout(() => {
                getTMDBSearch();
            }, 1000);
            // 검색창이 비어있다면 검색결과를 삭제합니다.
        }
        // else if (searchQuery === "") {
        //     setTimeout(() => {
        //         setSearchList([]);
        //     }, 1000);
        // }
    }, [searchQuery]);
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
            <input onChange={(e) => setSearchQuery(e.target.value)} placeholder="검색어를 입력해주세요." />
        </div>
    );
};

export default SearchMovie;
