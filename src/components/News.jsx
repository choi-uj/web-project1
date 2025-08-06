// News.jsx
import React from "react";

function News() {
    return(
        <>
            <section className="news" id="go-news">
                <div className="container">
                    <div className="news-page">
                        <hgroup>
                            <h2>NEWS</h2>
                            <strong>미디어에 소개된 <br/> WOLO Brothers를 만나보세요.</strong>
                        </hgroup>
                        <div className="go-btn">
                            <button><a href="https://www.wolobrothers.com/c2278c22-0eda-4ed4-8ad5-d812299e921c" alt="미디어 속 워로브라더스" target="_blank">뉴스 더보기</a></button>
                        </div>
                    </div>
                    <div className="news-list">
                        <ul>
                            <li><a href="https://www.dailysecu.com/news/articleView.html?idxno=166468" alt="#" target="_blank">
                                    <div className="date">
                                        <mark>28</mark>
                                        <span>2025.05</span>
                                    </div>
                                    <div className="news-txt">
                                        <strong>벤딕트, 캠핑 아이스 소프트 쿨러 아크틱 출시</strong> 
                                        <p>차량용품 전문 브랜드 벤딕트에서 전개하고 있는 아웃도어 캠핑 라인 언템드에서 아이스 소프트 쿨러 아크틱을 출시했다.</p>
                                    </div>
                                    <img src="https://www.dailysecu.com/news/photo/202505/166468_195095_3518.jpg" alt="캠핑 아이스 소프트 쿨러 아크틱"/>
                                </a>
                            </li>
                            <li><a href="https://www.wikitree.co.kr/articles/1050245" alt="#" target="_blank">
                                    <div className="date">
                                        <mark>15</mark>
                                        <span>2025.05</span>
                                    </div>
                                    <div className="news-txt">
                                        <strong>아웃도어 캠핑 라인 ‘벤딕트’, 캠핑 써큘레이터 선풍기 더 블로우 출시</strong> 
                                        <p>아웃도어 캠핑 라인인 언템드에서 캠핑 써큘레이터 더 블로우를 출시했다. 해당 제품은 120도 좌우 자동 회전과 단 한번의 충전으로 48시간 유지가 가능하다. 또한, 바람의 파워, 소음, 휴대성을 생각해 최적의 균형을 갖춘 7.9인치 블레이드를 7개 적용했다. 8W의 고출력 모터와 결합하여 캠핑은 물론 일상에서도 사용하기 편하도록 제작되었다.</p>
                                    </div>
                                    <img src="https://cdnweb01.wikitree.co.kr/webdata/editor/202505/15/img_20250515173231_df1124c8.webp" alt="캠핑 써큘레이터 선풍기 더 블로우"/>
                                </a>
                            </li>
                            <li><a href="https://www.wikitree.co.kr/articles/1050245" alt="#" target="_blank">
                                    <div className="date">
                                        <mark>28</mark>
                                        <span>2025.05</span>
                                    </div>
                                    <div className="news-txt">
                                        <strong>벤딕트, 차량용 규조토 디퓨저 ‘애트모어 아워스’ 출시</strong> 
                                        <p>차량용품 전문 브랜드 벤딕트가 기존 전자 디퓨저 ‘애트모어’의 후속작으로, 규조토 소재를 활용한 차량용 방향제 ‘애트모어 아워스(Atmore Hours)’를 새롭게 선보였다.</p>
                                    </div>
                                    <img src="https://cdn.nbntv.co.kr/news/photo/202504/3038052_259336_1215.jpg" alt="차량용 규조토 디퓨저 애트모어 아워스"/>
                                </a>
                            </li>
                        </ul> 
                    </div>   
                </div>
            </section>
        </>
    );
}

export default News;