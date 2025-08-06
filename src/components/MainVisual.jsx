// MainVisual.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

function MainVisual() {
    const videos = ['./img/v04.mp4', './img/v02.mp4', './img/v03.mp4'];

    return(
        <>
            <section className="main-visual">
                <hgroup>
                    <h2 className="blind">main visual</h2>
                    <strong>Find Your Story in WOLO WAY!</strong>
                    <p>언제나 새로운 가치를 찾는 당신이 경험해보지 못한 새로운 기회가 되길 바랍니다.</p>
                </hgroup>

                <Swiper
                    className="main-swiper"
                    modules={[Autoplay, Pagination]}
                    loop={true}
                    autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                >
                    {videos.map((src, idx) => (
                    <SwiperSlide key={idx}>
                        <video src={src} loop muted playsInline autoPlay />
                    </SwiperSlide>
                    ))}
                </Swiper>

                <div className="swiper-controls">
                    <div className="progress-bar">
                        <div className="progress-inner"></div>
                    </div>
                    <div className="inner-controls">
                        <div className="swiper-pagination"></div>
                        {/* 아래 버튼은 스타일링 및 이벤트만 추가하면 됩니다 */}
                        <button className="btn-play"></button>
                        <button className="btn-stop"></button>
                    </div>
                </div>
                </section>
        </>
    );
}

export default MainVisual;
