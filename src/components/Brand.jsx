// Brand.jsx
import React from "react";

function Brand() {
    return(
        <>
            <section className="brand" id="go-brand">
                <div className="container">
                    <hgroup>
                        <h2>Brand</h2>
                        <strong> 독창적인 팬층을 구축하는 <br/> <b>Life Style Community Commerce</b></strong>
                    </hgroup>
                    <div className="brand-box">
                        <div className="brand-list">
                            <a href="https://brand.naver.com/vendict" alt="VENDICT">
                                <img src="/img/logo1-.PNG" className="brand-idf" alt="VENDICT"/>
                                <div className="brand-p">
                                    <h3>Vendict</h3>
                                    <p>일상 속에서 불편함을 해소하고 더 나은 드라이빙 경험을 제공하기 위해 탄생했습니다.</p>
                                </div>
                                <span className="go-btn">바로가기</span>
                            </a>
                        </div>
                        <div className="brand-list">
                            <a href="https://smartstore.naver.com/wallowshop" alt="WALLOW">
                                <img src="/img/logo2-.PNG" className="brand-idf" alt="WALLOW"/>
                                <div className="brand-p">
                                <h3>Wallow</h3>
                                <p>캠핑을 단순한 활동이 아닌, 라이프 스타일의 중요한 부분으로 여기며, 캠핑을 통해 더 많은 이들이 자연과 교감하고, 휴식을 취할  수 있도록 지원합니다.</p>
                                </div>
                                <span className="go-btn">바로가기</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Brand;