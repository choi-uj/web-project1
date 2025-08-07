// Header.jsx
import React, { useState, useEffect, useRef } from "react";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1440);

    const headerRef = useRef(null);      // 여기에 추가
    const gnbRef = useRef(null);        // 여기 선언 필수
    const langWrapRef = useRef(null);
    const hBreakpoint = 1440;

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    useEffect(() => {
        const onResize = () => {
            setIsDesktop(window.innerWidth >= hBreakpoint);
        };
        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    const handleMenuClick = (e) => {
        e.preventDefault();
        toggleMenu();
    };

    const toggleLang = () => {
        if (langWrapRef.current) {
            langWrapRef.current.classList.toggle("active");
        }
    };

    const handleGnbMouseEnter = () => {
        if (isDesktop) {
            setScrolled(true);
            setMenuOpen(true);
        }
    };

    const handleGnbMouseLeave = () => {
        if (isDesktop) {
            setMenuOpen(false);
            setScrolled(window.scrollY > 0);
        }
    };

    return (
        <header
            id="header"
            ref={headerRef}
            className={`${scrolled ? 'scroll' : ''} ${menuOpen ? 'scroll-a' : ''}`}
        >
            <div className="container">
                <h1><a href="/"><span className="blind">워로브라더스</span></a></h1>
                <nav id="gnb"
                    ref={gnbRef}
                    onMouseEnter={handleGnbMouseEnter}
                    onMouseLeave={handleGnbMouseLeave}>
                    <ul className="dep1">
                        <li><a href="#go-history">Company</a>
                            <ul className="dep2">
                                <li><a href="#">핵심 가치</a></li>
                                <li><a href="#">연혁</a></li>
                                <li><a href="#">사업장 안내</a></li>
                            </ul>
                        </li>
                        <li><a href="#go-brand">Brand</a>
                            <ul className="dep2">
                                <li><a href="#">벤딕트</a></li>
                                <li><a href="#">왈로우</a></li>
                            </ul>
                        </li>
                        <li><a href="#go-vision">Vision</a>
                            <ul className="dep2">
                                <li><a href="#">일하는 방식</a></li>
                                <li><a href="#">회사 블로그</a></li>
                            </ul>
                        </li>
                        <li><a href="#go-news">PR center</a>
                            <ul className="dep2">
                                <li><a href="#">뉴스</a></li>
                                <li><a href="#">직원 인터뷰</a></li>
                            </ul>
                        </li>
                        <li><a href="#go-hiring">HR</a>
                            <ul className="dep2">
                                <li><a href="./sub1-hr-office.html">오피스 투어</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div className="header-util">
                    <div className="lang-wrap" ref={langWrapRef}>
                        <button className="lang-button" onClick={toggleLang}>
                            <i className="ri-global-line"></i>
                            <span className="blind">KOR</span>
                        </button>
                        <ul>
                            <li><a href="#">ENGLISH</a></li>
                            <li><a href="#">CHINESE</a></li>
                        </ul>
                    </div>
                    <div className="allmenu-wrap">
                        <div className={`menu-wrap ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
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
