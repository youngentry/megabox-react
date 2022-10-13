import React from "react";
import { Link } from "react-router-dom";
import "../css/components/Table.scss";

const Table = ({ theaterTable }) => {
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
                {colWidth(70)}
                {colWidth(170)}
                <col></col>
                {colWidth(150)}
                {colWidth(120)}
            </colgroup>

            <thead>
                <tr>
                    <th className="numHead">번호</th>
                    <th>극장</th>
                    <th>제목</th>
                    <th>지역</th>
                    <th>등록일</th>
                </tr>
            </thead>
            <tbody>
                {theaterTable.map((el) => {
                    return (
                        <tr>
                            <td className="numBody">{el.number}</td>
                            <td>{el.place}</td>
                            <td className="title">
                                <Link to={el.link}>{el.title}</Link>
                            </td>
                            <td>{el.region}</td>
                            <td>{el.date}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Table;
