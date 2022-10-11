import React from "react";
import Goods from "./Goods";
import "../../css/store/GiftCard.scss";

const STOREDATA = [
    { id: 1, imgSrc: "giftcard01", content: "메가박스 기프트카드 2만원권", des: "메가박스 기프트카드 2만원권", price: "20,000원" },
    { id: 2, imgSrc: "giftcard02", content: "메가박스 기프트카드 3만원권", des: "메가박스 기프트카드 3만원권", price: "30,000원" },
    { id: 3, imgSrc: "giftcard03", content: "메가박스 기프트카드 5만원권", des: "메가박스 기프트카드 5만원권", price: "50,000원" },
];

const Giftcard = () => {
    return (
        <div className="GiftCard">
            <ul>
                <Goods STOREDATA={STOREDATA} />
            </ul>
        </div>
    );
};

export default Giftcard;
