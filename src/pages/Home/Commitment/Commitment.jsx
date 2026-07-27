import style from "./Commitment.module.scss";
import titleDrop from "../../../assets/img/commitment/title-drop.svg";
import titleStar from "../../../assets/img/global/starburst.svg";

import commitmentBg01 from "../../../assets/img/commitment/commitment-bg01.svg";
import commitmentBg02 from "../../../assets/img/commitment/commitment-bg02.svg";
import commitmentBg03 from "../../../assets/img/commitment/commitment-bg03.svg";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const commitmentContents = [
  {
    num: "01",
    title: "ガツンと粗挽き",
    text01: "肉粒感たっぷりの粗挽き肉を使用。",
    text02: "噛むほどに旨みが広がる、肉好きのためのハンバーグです。",
    bg: commitmentBg01,
  },
  {
    num: "02",
    title: "溢れる肉汁",
    text01: "ナイフを入れた瞬間、勢いよくあふれ出す肉汁。",
    text02: "高温で一気に焼き上げることで、旨味を閉じ込めています。",
    bg: commitmentBg02,
  },
  {
    num: "03",
    title: "腹ペコ歓迎",
    text01: "今日は思い切り肉を食べたい！",
    text02: "そんな日に応える、満足感たっぷりのボリュームでお待ちしています。",
    bg: commitmentBg03,
  },
];

export function Commitment() {
  const titleRef = useRef(null);
  const itemRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(titleRef);
      const w = gsap.utils.selector(itemRef);
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 70%",
        },
      });

      tl.fromTo(
        q(".fadeStar"),
        {
          scale: 0,
        },
        {
          scale: 1,
          duration: 0.5,
          ease: "bounce.out",
        },
      )
        .fromTo(
          q(".fadeTitleText"),
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
          },
        )
        .fromTo(
          q(".fadeDrop"),
          {
            yPercent: -50,
            scale: 0,
          },
          {
            yPercent: 0,
            scale: 1,
            duration: 0.8,
          },
        );
      gsap.fromTo(
        w(".fadeItem"),
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
          stagger: 0.25,
          scrollTrigger: {
            trigger: itemRef.current,
            start: "top 80%",
          },
        },
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className={style.commitment}>
      <div className={style.sectionInner}>
        <h2 className={style.commitmentTitle} ref={titleRef}>
          <span className={`${style.titleJp} f-dela `}>
            <span className={`${style.star} fadeStar`}>
              <img src={titleStar} alt="" />
            </span>
            <span className={`${style.titleTextContent} fadeTitleText`}>肉汁への</span>
            <span className={`${style.titleTextContent} fadeTitleText`}>
              こだわり
              <span className={`${style.titleDrop} fadeDrop`}>
                <img src={titleDrop} alt="" />
              </span>
            </span>
          </span>
          <span className={`${style.titleEn} f-modak fadeTitleText`}>
            <span className={`${style.titleTextContent} fadeTitleText`}>Commitment to</span>
            <span className={`${style.titleTextContent} fadeTitleText`}>meat juices</span>
          </span>
        </h2>
        <ul className={style.commitmentContentList} ref={itemRef}>
          {commitmentContents.map((item, index) => {
            return (
              <li key={index} className={`${style.commitmentItem} fadeItem`}>
                <h3 className={style.commitmentItemTitle}>
                  <span className={`${style.commitmentItemTitleNum} f-modak`}>{item.num}</span>
                  <span className={`${style.commitmentItemTitleText} f-dela`}>{item.title}</span>
                  <span className={style.commitmentItemTitleStar}>
                    <img src={titleStar} alt="" />
                  </span>
                </h3>
                <div className={style.commitmentItemText}>
                  <p>{item.text01}</p>
                  <p>{item.text02}</p>
                  <div className={style.textBg}>
                    <img src={item.bg} alt="" />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
