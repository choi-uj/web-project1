// MainVisual.jsx
import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

function MainVisual() {
    const videos = ['./img/v04.mp4', './img/v02.mp4', './img/v03.mp4'];
    const swiperRef = useRef(null);
    const videoRefs = useRef([]);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const swiper = swiperRef.current;
        if (!swiper) return;

        const onAutoplayTimeLeft = (s, time, prog) => {
            setProgress((1 - prog) * 100);
        };

        swiper.on('autoplayTimeLeft', onAutoplayTimeLeft);
        return () => swiper.off('autoplayTimeLeft', onAutoplayTimeLeft);
    }, []);

    // const handleStop = () => {
    //     console.log('stop clicked');
    //     swiperRef.current?.autoplay?.stop();
    //     videoRefs.current.forEach((video) => video?.pause());
    // };

    // const handlePlay = () => {
    //     console.log('play clicked');
    //     swiperRef.current?.autoplay?.start();

    //     // 현재 활성 슬라이드의 비디오만 play
    //     const swiper = swiperRef.current;
    //     const currentIndex = swiper.realIndex;
    //     const currentVideo = videoRefs.current[currentIndex];
    //     currentVideo?.play();
    // };
  

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
                    pagination={{ el: '.main-swiper .swiper-pagination', clickable: true }}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >
                    {videos.map((src, idx) => (
                        <SwiperSlide key={idx}>
                           <video 
                            ref={(el) => (videoRefs.current[idx] = el)}
                            src={src}
                            loop
                            muted
                            playsInline
                            autoPlay />
                        </SwiperSlide>
                    ))}
               
                    <div className="swiper-controls">
                        <div className="progress-bar">
                            <div className="progress-inner" style={{ width: `${progress}%` }}></div>
                        </div>
                        <div className="inner-controls">
                            <div className="swiper-pagination"></div>
                            {/* <button
                                className="btn-play"
                                onClick={() => {
                                    console.log('play clicked');
                                    swiperRef.current?.autoplay?.start();
                                }}
                            ></button>
                            <button
                                className="btn-stop"
                                onClick={() => {
                                    console.log('stop clicked');
                                    swiperRef.current?.autoplay?.stop();
                                }}
                            ></button> */}
                        </div>
                    </div>
                </Swiper>
                </section>
        </>
    );
}

export default MainVisual;
