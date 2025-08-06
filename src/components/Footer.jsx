// Footer.jsx
import React, { useState } from "react";

function Footer() {
    const [isFamilySiteOpen, setFamilySiteOpen] = useState(false);

    const toggleFamilySite = () => {
        setFamilySiteOpen(!isFamilySiteOpen);
    };

    return(
        <>
            <footer id="footer">
                <div className="container">
                    <address>
                        경기도 하남시 하남대로 947, <br className="enter"/> 하남테크노밸리 U1 CENTER B동 1115호 ~ 1118호
                        <div className="contact">
                            <span>Mail</span> wolopeople@wolobrothers.com <br/>
                            <span>tel</span> 1588-3819
                        </div>
                    </address>
                    <div className="family-link">
                        <div className="family-site">
                        <button onClick={toggleFamilySite}>FAMILY SITE</button>
                            <ul className={isFamilySiteOpen ? "active" : ""}>
                                <li><a href="https://brand.naver.com/vendict?" target="_blank">VENDICT</a></li>
                                <li><a href="https://smartstore.naver.com/wallowshop?" target="_blank">WALLOW</a></li>
                            </ul>
                        </div>
                        <div className="footer-sns">
                            <a href="https://www.youtube.com/@vendict_official" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                <span className="blind">YouTube</span>
                            </a>
                            <a href="https://www.instagram.com/vendict_official/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <span className="blind">Instagram</span>
                            </a>
                            <a href="https://blog.naver.com/carbelief" target="_blank" rel="noopener noreferrer" aria-label="Blog">
                                <span className="blind">Blog</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-under">
                        <p className="copyright">
                            &copy; <span>WOLO Brothers Ltd. </span> All rights reserved.
                        </p>
                        <div className="footer-menu">
                            <a href="#">이메일 무단수집거부</a>
                            <a href="#">개인정보처리방침</a>
                        </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;