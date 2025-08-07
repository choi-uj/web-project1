// WebHome.jsx
import React from 'react';
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
            <Footer />
        </>
    );
}

export default WebHome;

