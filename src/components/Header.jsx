// Header.jsx
import React, { useState, useEffect, useRef } from "react";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1440);
    const headerRef = useRef(null);
    const gnbRef = useRef(null);
    const langWrapRef = useRef(null);
    const hBreakpoint = 1440;

    // 메뉴 토글
    // const toggleMenu = () => {
    //     setIsOpen(prev => !prev);
    // };
    const toggleMenu = () => {
            console.log('menu clicked');
            setIsOpen(prev => {
                console.log('isOpen 상태:', !prev);
                return !prev;
            });
        };

    // 언어 선택 토글
    const toggleLang = () => {
        if (langWrapRef.current) {
            langWrapRef.current.classList.toggle('active');
        }
    };

    // 스크롤 처리
    const handleScroll = () => {
        const header = headerRef.current;
        if (!header) return;
        if (window.scrollY >= header.offsetHeight) {
            header.classList.add('scroll');
        } else {
            header.classList.remove('scroll');
        }
    };

    // 반응형 처리 및 마우스 이벤트
    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= hBreakpoint);
        };

        const header = headerRef.current;
        const gnb = gnbRef.current;
        
        // 스크롤 이벤트
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

    return(
        <header id="header" ref={headerRef}>
            <div className="container">
                <h1><a href="/"><span className="blind">워로브라더스</span></a></h1>
                <nav id="gnb" ref={gnbRef}>
                    <ul className="dep1">
                        <li><a href="#go-history">Company</a>
                            <ul className="dep2">
                                <li><a href="#" tabIndex="-1">핵심 가치</a></li>
                                <li><a href="#" tabIndex="-1">연혁</a></li>
                                <li><a href="#" tabIndex="-1">사업장 안내</a></li>
                            </ul>
                        </li>
                        <li><a href="#go-brand">Brand</a>
                            <ul className="dep2">
                                <li><a href="#" tabIndex="-1">벤딕트</a></li>
                                <li><a href="#" tabIndex="-1">왈로우</a></li>
                            </ul>
                        </li>
                        <li><a href="#go-vision">Vision</a>
                            <ul className="dep2">
                                <li><a href="#" tabIndex="-1">일하는 방식</a></li>
                                <li><a href="#" tabIndex="-1">회사 블로그</a></li>
                            </ul>
                        </li>
                        <li><a href="#go-news">PR center</a>
                            <ul className="dep2">
                                <li><a href="#" tabIndex="-1">뉴스</a></li>
                                <li><a href="#" tabIndex="-1">직원 인터뷰</a></li>
                            </ul>
                        </li>
                        <li><a href="#go-hiring">HR</a>
                            <ul className="dep2">
                                <li><a href="./sub1-hr-office.html" tabIndex="-1">오피스 투어</a></li>
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
                        <div className={`menu-wrap ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
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