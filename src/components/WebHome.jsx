// WebHome.jsx
import React, { useEffect } from 'react';
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
// import Footer from "./Footer";



function WebHome() {
//     useEffect(() => {
//         const loadScript = (src, callback) => {
//             const script = document.createElement("script");
//             script.src = src;
//             script.async = true;
//             script.onload = callback;  // 로드 완료 후 콜백 실행
//             document.body.appendChild(script);
//         };

//         loadScript("https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js", () => {
//             loadScript("https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js", () => {
//                 loadScript("https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js");
//     });
// });
//     }, []);
    

    return(
        <>
            <Header/>
            {/* <MainVisual /> */}
            <Compet />
            <History />
            <Brand />
            {/* <Vision /> */}
            <News />
            <Hiring />
            {/* <Footer /> */}
        </>
    );
}

export default WebHome;

