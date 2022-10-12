import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Megapick from "./Megapick";
import Recommendation from "./Recommendation";

const AllEvent = ({ MEGAPICKDATA }) => {
    return (
        <div>
            <Recommendation />
            <div className="container">
                <ul>
                    <li>
                        <div className="title megapick">
                            <h3>메가Pick</h3>
                            <Link className="more" to="/store/giftcard">
                                <span>더보기</span> <FaAngleRight />
                            </Link>
                        </div>
                        <Megapick MEGAPICKDATA={MEGAPICKDATA} num={4} />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AllEvent;
