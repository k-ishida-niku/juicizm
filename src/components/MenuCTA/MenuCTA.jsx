import style from "./MenuCTA.module.scss";
import { CtaBtn } from "../CtaBtn/CtaBtn";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function MenuCTA(props) {
  const { hLevel } = props;
  const Headingtag = hLevel;

  const fadeRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        fadeRef.current,
        {
          yPercent: 10,
          opacity: 0,
          rotate: -30,
        },
        {
          keyframes: [
            {
              opacity: 1,
              yPercent: 0,
              duration: 0.2,
            },
            {
              rotate: 0,
              duration: 0.5,
              ease: "bounce.out",
            },
          ],
          // opacity: 1,
          scrollTrigger: {
            trigger: fadeRef.current,
            start: "top 50%",
          },
        },
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className={style.menuCta} ref={fadeRef}>
      <div className={style.ctaTextContainer}>
        <Headingtag className={style.ctaTitle}>
          <span className={`f-dela ${style.sub}`}>もっとメニューを見る</span>
          <span className={`f-modak ${style.title}`}>MORE MENU</span>
        </Headingtag>
        <p className={style.ctaText}>ジューシズムには他にも魅力のメニューがたくさん！</p>
      </div>
      <div className={`${style.CtaBtnContainer}`}>
        <CtaBtn btnText="フードメニュー" mw="455" />
        <CtaBtn btnText="ドリンクメニュー" mw="455" />
      </div>
    </div>
  );
}
