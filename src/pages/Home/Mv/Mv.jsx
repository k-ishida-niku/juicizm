import style from "./Mv.module.scss";
import siteTitle from "../../../assets/img/mv/site-title.svg";
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
      if (myState === "first-visit") {
        gsap.set(q(".fade-free, .fade-LT, .fadeImg, .title-star, .title-img, .fade-drop"), {
          autoAlpha: 0,
        });
        setTimeout(() => {
          mvAnime();
        }, 3500);
      } else {
        return;
      }

      function mvAnime() {
        const tl = gsap.timeline();
        tl.fromTo(
          q(".fade-free"),
          {
            opacity: 1,
            scale: 0,
          },
          { scale: 1, duration: 0.5, ease: "bounce.out" },
        )
          .fromTo(
            q(".fade-LT"),
            {
              opacity: 1,
              scale: 0,
            },
            { scale: 1, duration: 0.5, ease: "bounce.out" },
          )
          .fromTo(
            q(".fadeImg"),
            {
              opacity: 1,
              scale: 0,
            },
            { scale: 1, duration: 0.5, ease: "bounce.out" },
          )
          .fromTo(
            q(".title-star"),
            {
              opacity: 1,
              scale: 0,
            },
            { scale: 1, duration: 0.5, ease: "bounce.out" },
          )
          .fromTo(
            q(".title-img"),
            {
              opacity: 1,
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
      <div className={style.mvInner}>
        <h1 className={style.siteTitle}>
          <img src={siteTitle} alt="" className="title-img" />
          <div className={`${style.titleStar} title-star`}>
            <img src={starburst} alt="" />
          </div>
        </h1>
      </div>
      <div className={style.mvBg}>
        <div className={style.mvImg01}>
          <img src={mvImg01} alt="" className="fadeImg" />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 941.314 661.825" className={`${style.mvImgText} fadeImg`}>
            <path id="my-path01" data-name="パス 891" d="M940.315,330.412c0,209.86-210.5,330.412-470.157,330.412S0,540.273,0,330.412,210.5,0,470.157,0,940.315,120.552,940.315,330.412" transform="translate(0.5 0.5)" fill="none" stroke="transarent" stroke-width="1" />
            <text>
              <textPath href="#my-path01" className={style.textPath} startOffset="0%" dominant-baseline="hanging">
                JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM
                <animate attributeName="startOffset" from="0%" to="100%" dur="80s" repeatCount="indefinite" />
              </textPath>
              <textPath href="#my-path01" className={style.textPath} startOffset="-100%" dominant-baseline="hanging">
                JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM
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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 596.822 419.43" className={`${style.mvImgText} fadeImg`}>
            <path id="my-path02" data-name="パス 892" d="M596.822,209.715c0,133.2-133.6,209.715-298.411,209.715S0,342.915,0,209.715,133.6,0,298.411,0,596.822,76.515,596.822,209.715" fill="none" stroke="transparent" />
            <text>
              <textPath href="#my-path02" className={`${style.textPath} ${style.small} ${style.sp}`} startOffset="100%" dominant-baseline="hanging">
                JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM
                <animate attributeName="startOffset" from="100%" to="0%" dur="80s" repeatCount="indefinite" />
              </textPath>
              <textPath href="#my-path02" className={`${style.textPath} ${style.small} ${style.sp}`} startOffset="0%" dominant-baseline="hanging">
                JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM
                <animate attributeName="startOffset" from="0%" to="-100%" dur="80s" repeatCount="indefinite" />
              </textPath>
              <textPath href="#my-path02" className={`${style.textPath} ${style.small} ${style.pc}`} startOffset="100%" dominant-baseline="hanging">
                JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM
                <animate attributeName="startOffset" from="100%" to="0%" dur="80s" repeatCount="indefinite" />
              </textPath>
              <textPath href="#my-path02" className={`${style.textPath} ${style.small} ${style.pc}`} startOffset="0%" dominant-baseline="hanging">
                JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM JUICIZM
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
