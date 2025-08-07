// Header.jsx
import React, { useState, useEffect, useRef } from "react";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1440);
    const headerRef = useRef(null);
    const gnbRef = useRef(null);
    const langWrapRef = useRef(null);
    const hBreakpoint = 1440;

    const updateScrollClass = () => {
        const header = headerRef.current;
        if (!header) return;

        const scrolled = window.scrollY > 0;

        if (scrolled || menuOpen) {
            header.classList.add("scroll");
        } else {
            header.classList.remove("scroll");
        }
    };

    const toggleMenu = () => {
        setMenuOpen(prev => {
            const next = !prev;
            const header = headerRef.current;
            if (!header) return next;

            if (next) {
                // 메뉴 열림
                header.classList.add("scroll", "scroll-a");
            } else {
                // 메뉴 닫힘
                header.classList.remove("scroll-a");
                // scroll 상태 재확인
                updateScrollClass();
            }

            return next;
        });
    };

    const toggleLang = () => {
        if (langWrapRef.current) {
            langWrapRef.current.classList.toggle("active");
        }
    };

    const handleScroll = () => {
        updateScrollClass();
    };

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= hBreakpoint);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // ⬇️ gnb hover 처리
    useEffect(() => {
        const gnb = gnbRef.current;
        const header = headerRef.current;
        if (!gnb || !header || !isDesktop) return;

        const onMouseEnter = () => {
            header.classList.add("scroll", "scroll-a");
        };

        const onMouseLeave = () => {
            if (!menuOpen) {
                header.classList.remove("scroll-a");
                updateScrollClass();
            }
        };

        gnb.addEventListener("mouseenter", onMouseEnter);
        gnb.addEventListener("mouseleave", onMouseLeave);

        return () => {
            gnb.removeEventListener("mouseenter", onMouseEnter);
            gnb.removeEventListener("mouseleave", onMouseLeave);
        };
    }, [isDesktop, menuOpen]);

    // ⬇️ 메뉴 상태가 바뀔 때 scroll 상태 다시 적용
    useEffect(() => {
        updateScrollClass();
    }, [menuOpen]);

    return (
        <header
            id="header"
            ref={headerRef}
            className={`${menuOpen ? 'scroll-a scroll' : ''}`}
        >
            <div className="container">
                <h1><a href="/"><span className="blind">워로브라더스</span></a></h1>
                <nav id="gnb" ref={gnbRef}>
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
                        <button onClick={toggleLang}>
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
