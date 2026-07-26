import style from "./MenuDesc.module.scss";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function MenuDesc(props) {
  const { menuArr, children } = props;

  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(textRef);
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
      });
      tl.fromTo(
        q(".sb"),
        {
          scale: 0,
        },
        {
          scale: 1,
          duration: 0.5,
          ease: "bounce.out",
        },
      )
        .to(q(".overlay"), {
          width: 0,
          duration: 0.3,
        })
        .fromTo(
          q(".fadeText"),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            stagger: 0.1,
          },
        )
        .fromTo(
          q(".fadeNote"),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
          },
        );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className={style.menuText} ref={textRef}>
      <h3 className={`${style.menuName} f-dela`}>
        <span className={`${style.sb} sb`}>
          <span className={style.sbText}>{menuArr.sb}</span>
        </span>
        <span className={`${style.mName} mName`}>
          {menuArr.menuName}
          <span className={`${style.overlay} overlay`}></span>
        </span>
      </h3>
      <div className={style.menuDesc}>
        {menuArr.desc.map((item, index) => {
          return (
            <p key={index} className={`${style.menuDescText} fadeText`}>
              {item}
            </p>
          );
        })}
      </div>
      <ul className={style.menuPriceList}>
        {menuArr.gram.map((item, index) => {
          return (
            <li key={index} className={`${style.menuPriceContainer} f-dela fadeText`}>
              <span className={style.gram}>{item}</span>
              <span className={style.price}>{menuArr.price[index]}</span>
            </li>
          );
        })}
      </ul>
      <div className="fadeNote">{children}</div>
    </div>
  );
}
