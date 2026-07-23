import style from "./About.module.scss";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

import sb from "../../../assets/img/about/sb.svg";
import aboutImg from "../../../assets/img/about/about.webp";

export function About() {
  const ref = useRef(null);
  useEffect(() => {
    const q = gsap.utils.selector(ref);
    const ctx = gsap.context(() => {
      gsap.to(q(".fadeSb"), {
        scale: 1,
        ease: "bounce",
        duration: 1,
        scrollTrigger: {
          trigger: q(".fadeSb"),
          start: "top 80%",
        },
      });
      gsap.to(q(".fadeImg"), {
        scale: 1,
        ease: "bounce",
        duration: 1,
        scrollTrigger: {
          trigger: q(".fadeSb"),
          start: "top 80%",
        },
      });
      gsap.fromTo(
        q(".fadeText p"),
        {
          clipPath: "inset(0% 100% 0% 0%)",
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: q(".fadeText"),
            start: "top 80%",
          },
        },
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className={style.about} ref={ref}>
      <h2 className={style.sectionTitle} ref={ref}>
        <span className={`f-dela`}>ジューシズムについて</span>
        <span className={`f-modak`}>ABOUT</span>
      </h2>
      <div className={style.aboutInner}>
        <div className={style.aboutImgContainer}>
          <div className={`${style.sb} fadeSb`}>
            <img src={sb} alt="" />
          </div>
          <div className={`${style.aboutImg} fadeImg`}>
            <img src={aboutImg} alt="" />
          </div>
        </div>
        <div className={`${style.aboutTextContainer} fadeText`}>
          <p>
            ジュージューと焼き上げた瞬間、
            <br />
            中から勢いよくあふれ出す肉汁。
          </p>
          <p>
            ジューシズムは、
            <br />
            そんな「たまらない瞬間」を追求する
            <br />
            ハンバーグレストランです。
          </p>
          <p>
            肉の旨みを閉じ込めた粗挽きパティ、
            <br />
            最後の一口まで満足できる食べ応え。
          </p>
          <p>
            ひと口頬張れば、
            <br />
            肉汁とともに幸福があふれ出す。
          </p>
          <p>
            私たちは本気で、
            <br />
            "うまいハンバーグ"を届けます。
          </p>
        </div>
      </div>
    </section>
  );
}
