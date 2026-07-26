import style from "./Info.module.scss";

import { CtaBtn } from "../../../components/CtaBtn/CtaBtn";
import logo from "../../../assets/img/global/logo-nobordr.svg";

import { useFadeTitle } from "../../../hooks/useFadeTitle";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import S from "../../../assets/img/info/s.svg";
import T from "../../../assets/img/info/t.svg";
import O from "../../../assets/img/info/o.svg";
import R from "../../../assets/img/info/r.svg";
import E from "../../../assets/img/info/e.svg";
import I from "../../../assets/img/info/i.svg";
import N from "../../../assets/img/info/n.svg";
import F from "../../../assets/img/info/f.svg";

const storeArr = [S, T, O, R, E];
const infoArr = [I, N, F, O];

const infoContents = [
  {
    key: "店名",
    value: "HAMBURG RESTAURANT JUICIZM",
  },
  {
    key: "住所",
    value: "〒063-0051\n北海道札幌市西区宮の沢1条2丁目3-1",
  },
  {
    key: "電話",
    value: "011-1234-5678",
  },
  {
    key: "営業時間",
    value: "11:00～22:00",
  },
  {
    key: "駐車場",
    value: "なし（近隣コインパーキングをご利用ください）",
  },
  {
    key: "支払い",
    value: "現金 / 各種クレジットカード  / QR決済対応",
  },
];
export function Info() {
  const fadeTitleRef = useFadeTitle(null);
  const fadeRef = useRef(null);
  const starRef01 = useRef(null);
  const starRef02 = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(fadeRef);
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: fadeRef.current,
          start: "top 80%",
        },
      });

      tl.fromTo(
        starRef01.current,
        {
          scale: 0,
        },
        {
          scale: 1,
          duration: 0.5,
          ease: "bounce.out",
          ScrollTrigger: {
            trigger: starRef01.current,
            start: "top 50%",
          },
        },
      )
        .fromTo(
          fadeRef.current,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
          },
        )
        .fromTo(
          q(".fadeItem"),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
          },
        )
        .fromTo(
          starRef02.current,
          {
            scale: 0,
          },
          {
            scale: 1,
            duration: 0.5,
            ease: "bounce.out",
            ScrollTrigger: {
              trigger: starRef01.current,
              start: "bottom bottom",
            },
          },
        );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className={style.info} id="info">
      <div className={style.infoInner}>
        <h2 className={style.sectionTitle} ref={fadeTitleRef}>
          <span className={`f-dela ${style.sub} subText`}>
            <span>店</span>
            <span>舗</span>
            <span>情</span>
            <span>報</span>
          </span>
          <span className={style.sTitleContainer}>
            <span className={`f-modak ${style.sTitle} titleText`}>
              {storeArr.map((item, index) => {
                return <img src={item} alt="" key={index} className={`${style.char} char`} />;
              })}
            </span>
            <span className={`f-modak ${style.sTitle} titleText`}>
              {infoArr.map((item, index) => {
                return <img src={item} alt="" key={index} className={`${style.char} char`} />;
              })}
            </span>
          </span>
        </h2>
        <div className={style.infoContents} ref={fadeRef}>
          <div className={style.map}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2915.6178715404935!2d141.35569139999998!3d43.04947095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b2987e6f692bd%3A0xb51ee6a088eeabb4!2z44CSMDY0LTA4MDkg5YyX5rW36YGT5pyt5bmM5biC5Lit5aSu5Yy65Y2X77yZ5p2h6KW_77yT5LiB55uu!5e0!3m2!1sja!2sjp!4v1784899896016!5m2!1sja!2sjp" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
          </div>
          <div className={style.infoContainer}>
            <h3 className={`${style.infoTitle} fadeItem`}>
              <span className={style.logo}>
                <img src={logo} alt="" />
              </span>
              <span className={style.sub}>店舗情報</span>
            </h3>
            <ul className={style.infoList}>
              {infoContents.map((item, index) => {
                return (
                  <li key={index} className={`${style.infoItem} fadeItem`}>
                    <span className={style.key}>{item.key}</span>
                    <span className={style.value}>{item.value}</span>
                  </li>
                );
              })}
            </ul>
            <div className="fadeItem">
              <CtaBtn btnText="ご予約はこちら" mw="419.07" />
            </div>
          </div>
        </div>
      </div>
      <div className={style.bgStar01} ref={starRef01}></div>
      <div className={style.bgStar02} ref={starRef02}></div>
    </section>
  );
}
