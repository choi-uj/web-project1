// Header.jsx
import React, {useState} from "react";

function Header() {
    // 상태 관리
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);

    // 메뉴 토글 함수
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // 언어 선택 토글 함수
    const toggleLang = () => {
        setIsLangOpen(!isLangOpen);
    };
    return(
        <header id="header">
            <div className="container">
                <h1><a href="/"><span className="blind">워로브라더스</span></a></h1>
                <nav id="gnb">
                    <ul className="dep1">
                        <li><a href="#go-history">Company</a>
                            <ul className="dep2">
                                <li><a href="#" tabindex="-1">핵심 가치</a></li>
                                <li><a href="#" tabindex="-1">연혁</a></li>
                                <li><a href="#" tabindex="-1">사업장 안내</a></li>
                            </ul>
                        </li>
                        <li><a href="#go-brand">Brand</a>
                            <ul className="dep2">
                                <li><a href="#" tabindex="-1">벤딕트</a></li>
                                <li><a href="#" tabindex="-1">왈로우</a></li>
                            </ul>
                        </li>
                        <li><a href="#go-vision">Vision</a>
                            <ul className="dep2">
                                <li><a href="#" tabindex="-1">일하는 방식</a></li>
                                <li><a href="#" tabindex="-1">회사 블로그</a></li>
                            </ul>
                        </li>
                        <li><a href="#go-news">PR center</a>
                            <ul className="dep2">
                                <li><a href="#" tabindex="-1">뉴스</a></li>
                                <li><a href="#" tabindex="-1">직원 인터뷰</a></li>
                            </ul>
                        </li>
                        <li><a href="#go-hiring">HR</a>
                            <ul className="dep2">
                                <li><a href="./sub1-hr-office.html" tabindex="-1">오피스 투어</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div className="header-util">
                    <div className="lang-wrap">
                        <button>
                            <i className="ri-global-line"></i>
                            <span className="blind">KOR</span>
                        </button>
                        <ul>
                            <li><a href="#">ENGLISH</a></li>
                            <li><a href="#">CHINESE</a></li>
                        </ul>
                    </div>
                    <div className="allmenu-wrap">
                        <div className="menu-wrap">
                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;