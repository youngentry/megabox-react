import React from "react";
import Goods from "./Goods";
import "../../css/store/Goods.scss";

const STOREDATA = [
    { id: 1, imgSrc: "popcorn01", content: "러브콤보", des: "팝콘(L) 1 + 탄산음료(R)2", price: "10,000원" },
    { id: 2, imgSrc: "popcorn02", content: "더블콤보", des: "팝콘(R) 2 + 탄산음료(R)2", price: "13,000원" },
];

const Food = () => {
    return (
        <div className="Food">
            <Goods STOREDATA={STOREDATA} />
        </div>
    );
};

export default Food;
