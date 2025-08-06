// WebHome.jsx
import React, { useEffect, useState, useRef } from 'react';
import './css/reset.css';
import './css/font.css';
import './css/main.css';
import Header from "./Header";
// import MainVisual from "./MainVisual";
import Compet from "./Compet";
import History from "./History";
import Brand from "./Brand";
// import Vision from "./Vision";
import News from "./News";
import Hiring from "./Hiring";
import Footer from "./Footer";


function WebHome() {
    const headerRef = useRef(null);
    const gnbRef = useRef(null);
    const menuRef = useRef(null);
    const langWrapRef = useRef(null);
    const langBtnRef = useRef(null);
    useEffect(() => {
        const loadScript = (src, callback) => {
            const script = document.createElement("script");
            script.src = src;
            script.async = true;
            script.onload = callback;
            document.body.appendChild(script);
        };

        loadScript("https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js", () => {
            loadScript("https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js", () => {
                loadScript("/js/wolo.js", () => {
                    if (window.ScrollTrigger) {
                        setTimeout(() => {
                            window.ScrollTrigger.refresh();
                        }, 300);
                    }
                    // Swiper 관련 초기화도 여기서 확인 가능
                    if (window.Swiper) {
                        console.log("Swiper is ready!");
                    }
                });
            });
        });
    }, []);

    const updateMenuState = () => {
        if (menuRef.current.classList.contains('open')) {
            headerRef.current.classList.add('scroll');
            headerRef.current.classList.add('scroll-a');
        } else {
            headerRef.current.classList.remove('scroll-a');
            if (window.scrollY >= headerRef.current.offsetHeight) {
                headerRef.current.classList.add('scroll');
            } else {
                headerRef.current.classList.remove('scroll');
            }
        }
    };

    const handleScroll = () => {
        if (window.scrollY >= headerRef.current.offsetHeight) {
            headerRef.current.classList.add('scroll');
        } else {
            headerRef.current.classList.remove('scroll');
        }
    };

    const handleLangToggle = () => {
        langWrapRef.current.classList.toggle('active');
    };

    const handleMenuToggle = () => {
        if (menuRef.current.classList.contains('open')) {
            menuRef.current.classList.remove('open');
            updateMenuState();
        } else {
            menuRef.current.classList.add('open');
            updateMenuState();
        }
    };

    useEffect(() => {
        // Scroll 이벤트 리스너
        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return(
        <>
            <Header />
            {/* <MainVisual /> */}
            <Compet />
            <History />
            <Brand />
            {/* <Vision /> */}
            <News />
            <Hiring />
            <Footer />
        </>
    );
}

export default WebHome;

