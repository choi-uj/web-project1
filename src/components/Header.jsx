// Header.jsx
import React, { useState, useEffect, useRef } from "react";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false); // 메뉴 버튼 열림 여부
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1440);
    const [isScrolled, setIsScrolled] = useState(false); // 스크롤 여부 상태
    const headerRef = useRef(null);
    const gnbRef = useRef(null);
    const langWrapRef = useRef(null);
    const hBreakpoint = 1440;

    const toggleMenu = () => {
        const header = headerRef.current;
        setMenuOpen(prev => {
            const newState = !prev;

            if (header) {
                if (newState) {
                    header.classList.add('scroll');
                    header.classList.add('scroll-a');
                } else {
                    if (window.scrollY < header.offsetHeight) {
                        header.classList.remove('scroll');
                    }
                    header.classList.remove('scroll-a');
                }
            }

            return newState;
        });
    };

    const toggleLang = () => {
        if (langWrapRef.current) {
            langWrapRef.current.classList.toggle('active');
        }
    };

    const handleScroll = () => {
        const header = headerRef.current;
        if (!header) return;

        const shouldScroll = window.scrollY >= header.offsetHeight;
        setIsScrolled(shouldScroll); // 상태 업데이트

        if (shouldScroll) {
            header.classList.add('scroll');
        } else {
            header.classList.remove('scroll');
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= hBreakpoint);
        };

        const header = headerRef.current;
        const gnb = gnbRef.current;

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        if (isDesktop && gnb) {
            const onMouseEnter = () => {
                header.classList.add('scroll', 'scroll-a');
            };
            const onMouseLeave = () => {
                header.classList.remove('scroll-a');
                if (window.scrollY >= header.offsetHeight) {
                    header.classList.add('scroll');
                } else {
                    header.classList.remove('scroll');
                }
            };
            gnb.addEventListener('mouseenter', onMouseEnter);
            gnb.addEventListener('mouseleave', onMouseLeave);

            return () => {
                gnb.removeEventListener('mouseenter', onMouseEnter);
                gnb.removeEventListener('mouseleave', onMouseLeave);
            };
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [isDesktop]);

    return (
        <header
            id="header"
            ref={headerRef}
            className={`${isScrolled ? 'scroll' : ''} ${menuOpen ? 'scroll-a' : ''}`}
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
