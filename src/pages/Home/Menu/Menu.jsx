import style from "./Menu.module.scss";
import { MenuDesc } from "../../../components/MenuDesc/MenuDesc";
import menu01 from "../../../assets/img/menu/menu01.webp";
import menu02 from "../../../assets/img/menu/menu02.webp";
import menu01Bg from "../../../assets/img/menu/menu-bg-left.svg";
import menu02Bg from "../../../assets/img/menu/menu-bg-right.svg";

import { MenuCTA } from "../../../components/MenuCTA/MenuCTA";

import { useFadeTitle } from "../../../hooks/useFadeTitle";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Menu() {
  const titleData = ["JUICY", "MENU"];
  const titleArr = [[...titleData[0]], [...titleData[1]]];

  const fadeTitleRef = useFadeTitle(null);
  const fadeRef = useRef(null);

  const menuArr = {
    menu01: {
      sb: "定番！",
      menuName: "ジューシズムバーグ",
      desc: ["ジューシズムにきたらまずはこれ！", "アツアツの鉄板で肉汁におぼれてください！"],
      gram: ["150g", "200g", "300g"],
      price: ["¥1,480", "¥1,980", "¥2,480"],
    },
    menu02: {
      sb: "衝撃！",
      menuName: "ネオ和牛バーガー",
      desc: ["和牛100％パティ使用、大ボリュームのハンバーガー！", "一度食べたら忘れられない！"],
      gram: ["単品", "セット"],
      price: ["¥780", "¥1,280"],
    },
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(fadeRef);
      gsap.fromTo(
        q(".fadeImg01"),
        {
          xPercent: 50,
        },
        {
          xPercent: 0,
          ease: "bounce.out",
          duration: 0.8,
          scrollTrigger: {
            trigger: q(".fadeImg01"),
            start: "top 80%",
          },
        },
      );
      gsap.fromTo(
        q(".fadeImg02"),
        {
          xPercent: -50,
        },
        {
          xPercent: 0,
          ease: "bounce.out",
          duration: 0.8,
          scrollTrigger: {
            trigger: q(".fadeImg02"),
            start: "top 80%",
          },
        },
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className={style.menu} id="menu">
      <h2 className={style.sectionTitle} ref={fadeTitleRef}>
        <span className={`f-dela ${style.sub} subText`}>メニュー</span>
        <span className={style.sTitleContainer}>
          <span className={`f-modak ${style.sTitle} titleText`}>
            {titleArr[0].map((item, index) => {
              return (
                <span key={index} className={`${style.char} char`}>
                  {item}
                </span>
              );
            })}
          </span>
          <span className={`f-modak ${style.sTitle} titleText`}>
            {titleArr[1].map((item, index) => {
              return (
                <span key={index} className={`${style.char} char`}>
                  {item}
                </span>
              );
            })}
          </span>
        </span>
      </h2>
      <div className={style.wrap} ref={fadeRef}>
        <div className={`${style.menuContent} ${style.mc01}`}>
          <div className={style.menuContentImg}>
            <div className={style.img}>
              <img src={menu01} alt="" className="fadeImg01" />
            </div>
            <div className={style.bg}>
              <img src={menu01Bg} alt="" />
            </div>
          </div>
          <div className={style.menuDescContainer}>
            <MenuDesc menuArr={menuArr.menu01}>
              <p className={`${style.addService} `}>おかわり無料のライスつき！</p>
            </MenuDesc>
          </div>
        </div>
        <div className={`${style.menuContent} ${style.mc02}`}>
          <div className={style.menuContentImg}>
            <div className={style.img}>
              <img src={menu02} alt="" className="fadeImg02" />
            </div>
            <div className={style.bg}>
              <img src={menu02Bg} alt="" />
            </div>
          </div>
          <div className={style.menuDescContainer}>
            <MenuDesc menuArr={menuArr.menu02}>
              <p className={`${style.note} `}>※セットにはポテトとドリンクがつきます。</p>
            </MenuDesc>
          </div>
        </div>
        <MenuCTA hLevel="h3" />
      </div>
    </section>
  );
}
