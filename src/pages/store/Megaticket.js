import React from "react";
import Goods from "./Goods";
import "../../css/store/Goods.scss";

const STOREDATA = [
    { id: 1, imgSrc: "megaticket01", content: "[인생은 아름다워] 만원의 행복", des: "<인생은 아름다워>2D 일반관람권 1매 + 팝콘 (R) 1매", discount: "20,000원", price: "10,000원", remaining: "2,897" },
    { id: 2, imgSrc: "megaticket02", content: "일반관람권(2D)", des: "일반 관람권", discount: "13,000원", price: "12,000원" },
    { id: 3, imgSrc: "megaticket03", content: "더 부티크 전용관람권", des: "2D 더 부티크 전용 관람권", discount: "16,000원", price: "15,000원" },
    { id: 4, imgSrc: "megaticket04", content: "MX 전용관람권", des: "2D MX 전용관람권", discount: "17,000원", price: "16,000원" },
    { id: 5, imgSrc: "megaticket05", content: "Dolby Cinema 전용관람권", des: "Dolby Cinema 전용관람권(2D)", discount: "18,000원", price: "17,000원" },
    { id: 6, imgSrc: "megaticket06", content: "더 부티크 스위트 전용관람권", des: "더 부티크 스위트 전용관람권", discount: "", price: "40,000원" },
    { id: 7, imgSrc: "megaticket07", content: "워너 필름 소사이어티 3회 패키지권", des: "워너 필름 소사이어티 기획 상영작 전용권 3매", discount: "45,000원", price: "33,000원" },
    { id: 8, imgSrc: "megaticket08", content: "싱글패키지", des: "2D 일반관람권 1매 + 팝콘(R)1 + 탄산음료(R)1", discount: "21,000원", price: "18,000원" },
    { id: 9, imgSrc: "megaticket09", content: "러브콤보패키지", des: "2D 일반관람권 2매 + 팝콘(L)1 + 탄산음료(R)2", discount: "36,000원", price: "30,000원" },
    { id: 10, imgSrc: "megaticket10", content: "패밀리패키지", des: "2D 일반관람권 3매 + 팝콘(R)2 + 탄산음료(R)2", discount: "52,000원", price: "43,000원" },
];

const Megaticket = ({ num }) => {
    return (
        <div className="Megaticket">
            <Goods STOREDATA={STOREDATA} num={num} />
        </div>
    );
};

export default Megaticket;
