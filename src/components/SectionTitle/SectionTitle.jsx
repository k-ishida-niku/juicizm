import style from "./SectionTitle.module.scss";

import gsap from "gsap";
import { useEffect, useRef } from "react";

import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export function SectionTitle(props) {
  const { text, sub, mb } = props;
  const textArr = [...text];
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(ref);
      gsap.to(q(".fadeTitle"), {
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "bounce.out",
        keyframes: [
          { scale: 1.8, duration: 0.5 }, // アニメーション前半で1.2倍に
          { scale: 1, duration: 0.5 }, // 後半で1倍に戻る
        ],
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
      });
      gsap.to(q(".fadeSubTitle"), {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <h2 className={style.sectionTitle} style={{ marginBottom: mb }} ref={ref}>
      <span className={`${style.sub} ${style.white} f-dela fadeSubTitle`}>{sub}</span>
      <span className={`${style.titleText} ${style.white} `}>
        {textArr.map((char, index) => {
          return (
            <span key={index} className={`${style.char} f-modak fadeTitle`}>
              {char}
            </span>
          );
        })}
      </span>
    </h2>
  );
}
