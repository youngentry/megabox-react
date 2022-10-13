import React from "react";
import { Link } from "react-router-dom";
import "../css/components/Table.scss";

const Table = () => {
    const colWidth = (px) => {
        const style = {
            width: `${px}px`,
        };

        return <col style={style}></col>;
    };

    return (
        <table className="board">
            <caption>극장, 제목, 지역, 등록일</caption>
            <colgroup>
                {colWidth(150)}
                <col></col>
                {colWidth(150)}
                {colWidth(120)}
            </colgroup>
            <thead>
                <tr>
                    <th>극장</th>
                    <th>제목</th>
                    <th>지역</th>
                    <th>등록일</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>코엑스</td>
                    <td className="title">
                        <Link>[코엑스] 부티크 프라이빗 공사에 따른 이용 안내 (10/11~12월 중순)</Link>
                    </td>
                    <td>서울</td>
                    <td>2022.10.11</td>
                </tr>
            </tbody>
        </table>
    );
};

export default Table;
