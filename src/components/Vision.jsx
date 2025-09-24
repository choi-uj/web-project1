// Vision.jsx
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import "swiper/css";

gsap.registerPlugin(ScrollTrigger);


function Vision() {
//     const images = [
//     "/img/image01.webp","/img/image13.webp","/img/image02.webp","/img/image11.webp","/img/image03.webp","/img/image10.webp","/img/image04.webp","/img/image09.webp","/img/image06.webp","/img/image08.webp","/img/image07.webp",
//     // 필요한 만큼 추가
// ];
    useEffect(() => {
        const way1p = gsap.timeline({
            scrollTrigger: {
                trigger: '.way-1p',
                start: 'top 80%',
                // markers: true,
            }
        });
        way1p.fromTo('.way-1p img',
            { scale: 0.95, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.6 }
        ).fromTo('.way-1p .txt',
            { opacity: 0, x: 100 },
            { opacity: 1, x: 0, duration: 0.6 }
        );

        const way2p = gsap.timeline({
            scrollTrigger: {
                trigger: '.way-2p',
                start: 'top 80%',
                // markers: true,
            }
        });
        way2p.fromTo('.way-2p img',
            { scale: 0.95, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.6 }
        ).fromTo('.way-2p .txt',
            { opacity: 0, x: -100 },
            { opacity: 1, x: 0, duration: 0.6 }
        );

        requestAnimationFrame(() => {
            ScrollTrigger.refresh(); // 렌더 직후
        });

        const refreshTimeout = setTimeout(() => {
            ScrollTrigger.refresh(); // 스크롤 위치 재계산 (지연)
        }, 1000);

        return () => {
            clearTimeout(refreshTimeout);
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section className="way" id="go-vision">
            <div className="container">
                <div className="way-main">
                    <hgroup>
                        <h2>WOLO Way</h2>
                        <strong>
                            WOLO Brothers는 고객의 품격을 <br /> 영원히 빛나게 하는 가치를 찾고 있습니다.
                        </strong>
                    </hgroup>

                    {/* <Swiper
                        className="way-swiper"
                        modules={[Autoplay]}
                        loop={true}
                        autoplay={{ delay: 0, disableOnInteraction: false }}
                        slidesPerView={3} // ✅ auto → 고정값
                        speed={3000}
                        spaceBetween={40}
                    >
                        {images.map((src, idx) => (
                            <SwiperSlide key={idx} tabIndex={-1}>
                                <img src={src} alt={`vision-${idx}`} />
                            </SwiperSlide>
                        ))}
                    </Swiper> */}
                </div>

                <div className="way-1p">
                    <img src="./img/image05.webp" alt="mission" />
                    <div>
                        <div className="txt">
                            <h3>Mission</h3>
                            <strong>
                                ”Beyond Authentic” <br /> 진짜라 믿던 가치, 그 너머를 향해
                            </strong>
                            <span>
                                고객 만족의 핵심이자 출발점은 고객이 느끼는 가치라고 믿고 있습니다.
                                고객의 결핍을 해소하고자 고민하는 우리의 절실한 마음은,
                                새로운 가치를 찾고 있는 고객들이 기존에 경험해볼 수 없었던 새로운 기회가 될 것입니다.
                            </span>
                        </div>
                    </div>
                </div>

                <div className="way-2p">
                    <div>
                        <div className="txt">
                            <h3>Vision</h3>
                            <strong>
                                ”Dignity Ever Glow” <br /> 영원히 빛나는 품격
                            </strong>
                            <span>
                                품격은 만족도와 퀄리티를 말합니다. 그것이 우리 워로브라더스의 자존심이니까요.
                                우리는 항상 퀄리티 높은 제품과 서비스를 제공하기 위해 노력합니다.
                                그래서 우리는 끊임없이 부족한 것과 새로운 것들에 대한 고민을 멈추지 않습니다.
                            </span>
                        </div>
                    </div>
                    <img src="./img/image12.webp" alt="vision" />
                </div>
            </div>
        </section>
    );
}

export default Vision;