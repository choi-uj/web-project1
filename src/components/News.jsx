// News.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


function News() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(".news-list li",
            {
            y: 100,
            opacity: 0,
            },
            {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".news-list",
                start: "top 80%",
                toggleActions: "play none none none",
                // markers: true, // 시각적 디버깅용
                onEnter: () => console.log("✅ ScrollTrigger 발동됨"),
            }
            }
        );

        // 새로고침 후에도 적용되도록 강제 초기화
        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 300);

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return(
        <section className="news" id="go-news">
            <div className="container">
                <div className="news-page">
                    <hgroup>
                        <h2>NEWS</h2>
                        <strong>미디어에 소개된 <br/> WOLO Brothers를 만나보세요.</strong>
                    </hgroup>
                    <div className="go-btn">
                        <button>
                            <a href="https://www.wolobrothers.com/c2278c22-0eda-4ed4-8ad5-d812299e921c" target="_blank" rel="noopener noreferrer">
                                뉴스 더보기
                            </a>
                        </button>
                    </div>
                </div>

                <div className="news-list">
                    <ul>
                        <li>
                            <a href="https://www.dailysecu.com/news/articleView.html?idxno=166468" target="_blank" rel="noopener noreferrer">
                                <div className="date">
                                    <mark>28</mark>
                                    <span>2025.05</span>
                                </div>
                                <div className="news-txt">
                                    <strong>벤딕트, 캠핑 아이스 소프트 쿨러 아크틱 출시</strong>
                                    <p>차량용품 전문 브랜드 벤딕트에서 전개하고 있는 아웃도어 캠핑 라인 언템드에서 아이스 소프트 쿨러 아크틱을 출시했다.</p>
                                </div>
                                <img src="https://www.dailysecu.com/news/photo/202505/166468_195095_3518.jpg" alt="캠핑 아이스 소프트 쿨러 아크틱" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.wikitree.co.kr/articles/1050245" target="_blank" rel="noopener noreferrer">
                                <div className="date">
                                    <mark>15</mark>
                                    <span>2025.05</span>
                                </div>
                                <div className="news-txt">
                                    <strong>아웃도어 캠핑 라인 ‘벤딕트’, 캠핑 써큘레이터 선풍기 더 블로우 출시</strong>
                                    <p>해당 제품은 120도 좌우 자동 회전과 단 한번의 충전으로 48시간 유지가 가능하다.</p>
                                </div>
                                <img src="https://cdnweb01.wikitree.co.kr/webdata/editor/202505/15/img_20250515173231_df1124c8.webp" alt="캠핑 써큘레이터 선풍기 더 블로우" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.wikitree.co.kr/articles/1050245" target="_blank" rel="noopener noreferrer">
                                <div className="date">
                                    <mark>28</mark>
                                    <span>2025.05</span>
                                </div>
                                <div className="news-txt">
                                    <strong>벤딕트, 차량용 규조토 디퓨저 ‘애트모어 아워스’ 출시</strong>
                                    <p>전자 디퓨저 ‘애트모어’의 후속작으로 규조토 소재 차량용 방향제를 출시했다.</p>
                                </div>
                                <img src="https://cdn.nbntv.co.kr/news/photo/202504/3038052_259336_1215.jpg" alt="차량용 규조토 디퓨저 애트모어 아워스" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default News;