import React from "react";
import { Link } from "react-router-dom";
import "../../css/main/Footer.scss";
import { FaFacebook, FaInstagramSquare, FaSearch, FaTwitterSquare, FaYoutube } from "react-icons/fa";

const COMPANY = [
    { id: 1, content: "회사소개", link: "#" },
    { id: 2, content: "인재채용", link: "#" },
    { id: 3, content: "사회공헌", link: "#" },
    { id: 4, content: "제휴/광고/부대사업문의", link: "#" },
    { id: 5, content: "이용약관", link: "#" },
    { id: 6, content: "위치기반서비스 이용약관", link: "#" },
    { id: 7, content: "개인정보처리방침", link: "#" },
    { id: 8, content: "윤리경영", link: "#" },
];

const Footer = () => {
    return (
        <section className="Footer">
            <div className="container">
                <div className="top">
                    <ul className="left">
                        {COMPANY.map((el) => (
                            <Link to={el.link} key={el.id}>
                                <li>{el.content}</li>
                            </Link>
                        ))}
                    </ul>
                    <div className="right">
                        <FaSearch />
                        <span>극장찾기</span>
                    </div>
                </div>
                <div className="bottom">
                    <h2>
                        <img src={process.env.PUBLIC_URL + "/assets/img/megabox-logo_2.png"} alt="" />
                    </h2>
                    <div className="company">
                        <address>
                            서울특별시 마포구 월드컵로 240, 지상2층(성산동, 월드컵주경기장) ARS 1544-0070 <br />
                            대표자명 홍정인 · 개인정보보호책임자 공성진 · 사업자등록번호 211-86-59478 · 통신판매업신고번호 제 2020-서울마포-4545 호
                        </address>
                        <div className="copyright">COPYRIGHT © MegaboxJoongAng, Inc. All rights reserved</div>
                    </div>
                    <div className="sns">
                        <FaYoutube />
                        <FaInstagramSquare />
                        <FaFacebook />
                        <FaTwitterSquare />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
