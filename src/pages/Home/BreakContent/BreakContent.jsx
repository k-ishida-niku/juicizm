import style from "./BreakContent.module.scss";

import bar from "../../../assets/img/global/bar.svg";
import breakStar from "../../../assets/img/global/break-catch.svg";
import drop from "../../../assets/img/global/drop.svg";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function BreakContent() {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(ref);

      gsap.fromTo(
        q(".fadeImg"),
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
          },
        },
      );
      gsap.fromTo(
        q(".fadeStar"),
        {
          scale: 0,
        },
        {
          scale: 1,
          duration: 0.5,
          ease: "bounce.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
          },
        },
      );
      gsap.fromTo(
        q(".fadeDrop"),
        {
          yPercent: -30,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ref.current,
            start: "bottom bottom",
          },
        },
      );
    });
    return () => ctx.revert();
  }, []);
  return (
    <div className={style.breakContent} ref={ref}>
      <div className={`${style.bar} ${style.bar01}`}>
        <ul>
          {Array.from({ length: 10 }, (_, i) => {
            return (
              <li key={i}>
                <img src={bar} alt="" />
              </li>
            );
          })}
        </ul>
        <ul>
          {Array.from({ length: 10 }, (_, i) => {
            return (
              <li key={i}>
                <img src={bar} alt="" />
              </li>
            );
          })}
        </ul>
      </div>
      <div className={`${style.breakImg} fadeImg`}></div>
      <div className={`${style.bar} ${style.barReturn}`}>
        <ul>
          {Array.from({ length: 10 }, (_, i) => {
            return (
              <li key={i}>
                <img src={bar} alt="" />
              </li>
            );
          })}
        </ul>
        <ul>
          {Array.from({ length: 10 }, (_, i) => {
            return (
              <li key={i}>
                <img src={bar} alt="" />
              </li>
            );
          })}
        </ul>
      </div>
      <div className={`${style.breakStar} fadeStar`}>
        <img src={breakStar} alt="" />
      </div>
      <div className={`${style.drop} fadeDrop`}>
        <img src={drop} alt="" />
      </div>
    </div>
  );
}
