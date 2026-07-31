import style from "./News.module.scss";
import { useFadeTitle } from "../../../hooks/useFadeTitle";
import { NewsItem } from "../../../components/NewsItem/NewsItem";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function News() {
  const fadeTitleRef = useFadeTitle(null);
  const titleData = "NEWS";
  const titleArr = [...titleData];
  const fadeRef = useRef(null);
  const newsContent = [
    {
      year: "2026",
      month: "06",
      day: "08",
      cat: "お知らせ",
      text: "ハンバーグレストラン「ジューシズム」が新規オープンしました！",
    },
    {
      year: "2026",
      month: "07",
      day: "15",
      cat: "新メニュー",
      text: "夏限定！ガーリックバーグ販売開始！",
    },
    {
      year: "2026",
      month: "08",
      day: "12",
      cat: "イベント",
      text: "肉汁チャレンジ開催！20分完食で無料！",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(fadeRef);
      gsap.fromTo(
        q(".fadeItem"),
        {
          opacity: 0,
          yPercent: 30,
        },
        {
          opacity: 1,
          yPercent: 0,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: fadeRef.current,
            start: "top 80%",
          },
        },
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className={style.news} id="news">
      <div className={style.newsInner}>
        <div className={style.newsIntroContents}>
          <h2 className={style.sectionTitle} ref={fadeTitleRef}>
            <span className={`f-dela ${style.sub} subText`}>ニュース</span>
            <span className={`f-modak ${style.sTitle} titleText`}>
              {titleArr.map((item, index) => {
                return (
                  <span key={index} className={`${style.char} char`}>
                    {item}
                  </span>
                );
              })}
            </span>
          </h2>
          <a href="" className={`${style.moreBtn} f-dela`}>
            <span className={style.btnText}>
              <span className={style.jp}>
                もっと見る
                <span className={style.arrow}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.657 35.313">
                    <g id="グループ_318" data-name="グループ 318" transform="translate(-83.5 -6428.843)">
                      <line id="線_8" data-name="線 8" y2="22" transform="translate(109.5 6446.5) rotate(90)" fill="none" stroke="#ff5206" stroke-linecap="round" stroke-width="8" />
                      <line id="線_9" data-name="線 9" x1="12" y2="12" transform="translate(109.5 6434.5) rotate(90)" fill="none" stroke="#ff5206" stroke-linecap="round" stroke-width="8" />
                      <line id="線_10" data-name="線 10" x2="12" y2="12" transform="translate(109.5 6446.5) rotate(90)" fill="none" stroke="#ff5206" stroke-linecap="round" stroke-width="8" />
                    </g>
                  </svg>
                </span>
              </span>
              <span className={style.en}>MORE</span>
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112.239 72.43" className={style.moreBtnBg}>
              <path id="パス_43" data-name="パス 43" d="M110.238,35.215c0,22.367-24.678,35.215-55.119,35.215S0,57.581,0,35.215,24.678,0,55.119,0s55.119,12.848,55.119,35.215" transform="translate(1 1)" stroke-width="2" />
            </svg>
          </a>
        </div>
        <ul className={style.newsList} ref={fadeRef}>
          {newsContent.map((item, index) => {
            return (
              <li key={index} className="fadeItem">
                <NewsItem year={item.year} month={item.month} day={item.day} cat={item.cat} text={item.text} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
