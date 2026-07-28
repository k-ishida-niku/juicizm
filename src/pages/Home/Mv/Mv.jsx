import style from "./Mv.module.scss";
import siteTitle from "../../../assets/img/mv/site-title.svg";
import siteTitleSp from "../../../assets/img/mv/site-title-sp.svg";
import mvImg01 from "../../../assets/img/mv/mv01.webp";
import mvImg02 from "../../../assets/img/mv/mv02.webp";
import starburst from "../../../assets/img/global/starburst.svg";
import drop from "../../../assets/img/global/drop.svg";

import { useSessionState } from "../../../hooks/useSessionState";

import { useRef, useEffect } from "react";
import gsap from "gsap";

export function Mv() {
  const mvRef = useRef(null);
  const { myState } = useSessionState();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(mvRef);

      const targets = q(".fade-free, .fade-LT, .fadeImg, .title-star, .title-img, .fade-drop");
      if (myState === "first-visit") {
        gsap.set(targets, { autoAlpha: 0 });
        console.log(mvRef.current);
        setTimeout(() => {
          mvAnime();
        }, 3500);
      } else {
        gsap.set(targets, { autoAlpha: 1 });
        gsap.to(q(".fade-overlay"), { opacity: 0, duration: 0 });
        return;
      }

      function mvAnime() {
        const tl = gsap.timeline();
        tl.to(q(".fade-overlay"), {
          opacity: 0,
          duration: 0.5,
        })
          .fromTo(
            q(".fade-free"),
            {
              scale: 0,
            },
            { scale: 1, duration: 0.5, ease: "bounce.out" },
          )
          .fromTo(
            q(".fade-LT"),
            {
              scale: 0,
            },
            { scale: 1, duration: 0.5, ease: "bounce.out" },
          )
          .fromTo(
            q(".fadeImg"),
            {
              scale: 0,
            },
            { scale: 1, duration: 0.5, ease: "bounce.out" },
          )
          .fromTo(
            q(".title-star"),
            {
              scale: 0,
            },
            { scale: 1, duration: 0.5, ease: "bounce.out" },
          )
          .fromTo(
            q(".title-img"),
            {
              scale: 0,
              rotate: -45,
            },
            {
              keyframes: [
                { scale: 1.5, rotate: 45, duration: 0.4 },
                { scale: 1.25, rotate: -45, duration: 0.4 },
                { scale: 1, rotate: 0, duration: 0.4 },
              ],
              duration: 1.2,
              ease: "bounce.out",
            },
          )
          .fromTo(
            q(".fade-drop"),
            {
              opacity: 0,
              yPercent: -40,
            },
            {
              opacity: 1,
              yPercent: 0,
              duration: 1,
              stagger: 0.5,
            },
          );
      }
    });
    return () => ctx.revert();
  }, [myState]);

  return (
    <div className={style.Mv} ref={mvRef}>
      <div className={`${style.loadingOverlay} fade-overlay`}></div>
      <div className={style.mvInner}>
        <h1 className={style.siteTitle}>
          <piture>
            <source srcSet={siteTitle} media="(width > 767px)" />
            <img src={siteTitleSp} alt="" className="title-img" />
          </piture>
          <div className={`${style.titleStar} title-star`}>
            <img src={starburst} alt="" />
          </div>
        </h1>
      </div>
      <div className={style.mvBg}>
        <div className={style.mvImg01}>
          <img src={mvImg01} alt="" className="fadeImg" />

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1070.79 713.88" className={`${style.mvImgText} fadeImg`}>
            <path id="my-path01" data-name="パス 894" d="M1069.79,356.44c0,226.391-239.479,356.44-534.895,356.44S0,582.831,0,356.44,239.479,0,534.895,0,1069.79,130.049,1069.79,356.44" transform="translate(0.5 0.5)" fill="none" stroke="transparent" stroke-width="1" />
            <text>
              <textPath href="#my-path01" className={style.textPath} startOffset="0%" dominant-baseline="hanging">
                JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM
                <animate attributeName="startOffset" from="0%" to="100%" dur="80s" repeatCount="indefinite" />
              </textPath>
              <textPath href="#my-path01" className={style.textPath} startOffset="-100%" dominant-baseline="hanging">
                JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM JUICIZ
                <animate attributeName="startOffset" from="-100%" to="0%" dur="80s" repeatCount="indefinite" />
              </textPath>
            </text>
          </svg>
          <div className={`${style.mvBgStarLT} fade-LT`}>
            <img src={starburst} alt="" />
          </div>
        </div>
        <div className={style.mvImg02}>
          <img src={mvImg02} alt="" className="fadeImg" />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 709.32 468.29" className={`${style.mvImgText} fadeImg`}>
            <path id="my-path02" data-name="パス 895" d="M708.32,233.645c0,148.4-158.562,233.645-354.16,233.645S0,382.044,0,233.645,158.562,0,354.16,0,708.32,85.246,708.32,233.645" transform="translate(0.5 0.5)" fill="none" stroke="transparent" stroke-width="1" />
            <text>
              <textPath href="#my-path02" className={`${style.textPath} ${style.small} ${style.sp}`} startOffset="100%" dominant-baseline="hanging">
                JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM
                <animate attributeName="startOffset" from="100%" to="0%" dur="80s" repeatCount="indefinite" />
              </textPath>
              <textPath href="#my-path02" className={`${style.textPath} ${style.small} ${style.sp}`} startOffset="0%" dominant-baseline="hanging">
                JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM
                <animate attributeName="startOffset" from="0%" to="-100%" dur="80s" repeatCount="indefinite" />
              </textPath>
              <textPath href="#my-path02" className={`${style.textPath} ${style.small} ${style.pc}`} startOffset="100%" dominant-baseline="hanging">
                JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM
                <animate attributeName="startOffset" from="100%" to="0%" dur="80s" repeatCount="indefinite" />
              </textPath>
              <textPath href="#my-path02" className={`${style.textPath} ${style.small} ${style.pc}`} startOffset="0%" dominant-baseline="hanging">
                JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM JUICI
                <animate attributeName="startOffset" from="0%" to="-100%" dur="80s" repeatCount="indefinite" />
              </textPath>
            </text>
          </svg>
        </div>
        <div className={style.mvBgStarFree}>
          <img src={starburst} alt="" className="fade-free" />
          <div className={`${style.dropPc} fade-drop`}>
            <img src={drop} alt="" />
          </div>
        </div>
        <div className={`${style.drop} fade-drop`}>
          <img src={drop} alt="" />
        </div>
      </div>
    </div>
  );
}
