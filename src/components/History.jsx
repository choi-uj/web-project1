// History.jsx
import React from "react";

function History() {
    return(
        <>
            <section className="history" id="go-history">
                <div className="container">
                    <div className="history-page">
                        <hgroup>
                            <h2>What we do</h2>
                            <strong>독보적인 <br/>브랜드 가치</strong>
                            <p>워로브라더스는 지금까지 이렇게 성장해왔고, 지금도 여전히 성장중입니다.</p>
                        </hgroup>
                        <div className="go-btn">
                            <button><a href="https://www.wolobrothers.com/8a97a47a-83a1-4b57-bad8-37d85070babc" alt="WOLO가 걸어온 길" target="_blank">전체보기</a></button>
                        </div>
                    </div>
                    <ul>
                        <li>
                            <div className="date">
                                <mark>03</mark>
                                <span>2025</span>
                            </div>
                            <div className="h-txt">2025년 대한민국 브랜드 파워 1위 수상</div>
                        </li>
                        <li>
                            <div className="date">
                                <mark>12</mark>
                                <span>2024</span>
                            </div>
                            <div className="h-txt">하남시 일자리창출 우수기업 인증</div>
                        </li>
                        <li>
                            <div className="date">
                                <mark>08</mark>
                                <span>2024</span>
                            </div>
                            <div className="h-txt">2024년 경기도 일자리우수기업 선정</div>
                        </li>
                        <li>
                            <div className="date">
                                <mark>03</mark>
                                <span>2024</span>
                            </div>
                            <div className="h-txt">2024년 대한민국 브랜드 파워 1위 수상</div>
                        </li>
                        <li>
                            <div className="date">
                                <mark>11</mark>
                                <span>2023</span>
                            </div>
                            <div className="h-txt">고용노동부 근무혁신 우수기업 선정</div>
                        </li>
                        {/* <li>
                            <div className="date">
                                <mark>09</mark>
                                <span>2023</span>
                            </div>
                            <div className="h-txt">벤딕트 자사몰 리뉴얼</div>
                        </li> */}
                    </ul>
                </div>
            </section>
        </>
    );
}

export default History;