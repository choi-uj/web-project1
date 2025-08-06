// Compet.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Compet() {
    const n1Ref = useRef(null);
    const n2Ref = useRef(null);
    const n3Ref = useRef(null);
    const n4Ref = useRef(null);

    // countUp 함수 - requestAnimationFrame을 사용해 성능 최적화
    const countUp = (el, target, duration = 1500) => {
        if (!el) return;
        let start = 0;
        const end = parseInt(target, 10);
        const frameRate = 60;
        const totalFrames = Math.round(duration / (1000 / frameRate));
        const increment = end / totalFrames;

        const update = () => {
            start += increment;
            if (start >= end) {
                el.textContent = end.toLocaleString();
            } else {
                el.textContent = Math.floor(start).toLocaleString();
                requestAnimationFrame(update);
            }
        };

        requestAnimationFrame(update);
    };

    useEffect(() => {
        ScrollTrigger.create({
            trigger: '.compet-wrap',
            start: 'top 70%',
            once: true, // 한 번만 실행
            onEnter: () => {
                countUp(n1Ref.current, 1, 500);
                countUp(n2Ref.current, 100);
                countUp(n3Ref.current, 40);
                countUp(n4Ref.current, 1600);
            }
        });
    }, []);

    return(
        <>
            <section className="compet">
                <div className="container">
                    <hgroup>
                        <h2>community competitive</h2>
                        <strong>누적 판매량과 후기수 최다 라인업</strong>
                        <p>소비자의 니즈를 반영한 시그니처 제품 개발을 통하여 <br/> 합리적인 가격, 높은 퀄리티의 제품으로 판매하고 있어요.</p>
                    </hgroup>
                    <div className="compet-wrap">
                        <div className="b1">
                            <span>차량용품 카테고리 라이브</span>
                            <strong>최다 횟수 <b className="number n1" ref={n1Ref}>1</b>위</strong>
                        </div>
                        <div className="b2">
                            <span>라이브 방송 시청자</span>
                            <strong>누적 <b className="number n2" ref={n2Ref}>100</b>만+</strong>
                        </div>
                        <div className="b3">
                            <span>제품 구매 고객 리뷰 수</span>
                            <strong><b className="number n3" ref={n3Ref}>40</b>만+</strong>
                        </div>
                        <div className="b4">
                            <span>프리미엄 브랜드 스토어</span>
                            <strong>제품 <b className="number n4" ref={n4Ref}>1600</b>개+</strong>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Compet;