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
