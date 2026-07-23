import style from "./BreakContent.module.scss";

import bar from "../../../assets/img/global/bar.svg";
import breakImg from "../../../assets/img/global/break-img.webp";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function BreakContent() {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
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
    });
    return () => ctx.revert();
  }, []);
  return (
    <div className={style.breakContent}>
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
      <div className={style.breakImg} ref={ref}>
        {/* <img src={breakImg} alt="" /> */}
      </div>
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
    </div>
  );
}
