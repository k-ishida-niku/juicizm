import style from "./Header.module.scss";
import logo from "../../assets/img/global/logo.svg";
import headerBar from "../../assets/img/global/header-bar.svg";
import { Nav } from "../Nav/Nav";
import { useState } from "react";

export function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <header className={style.header}>
      <div className={style.headerBar}>
        <ul className={style.hBarImg}>
          {Array.from({ length: 10 }, (_, i) => {
            return (
              <li key={i}>
                <img src={headerBar} alt="" />
              </li>
            );
          })}
        </ul>
        <ul className={style.hBarImg}>
          {Array.from({ length: 10 }, (_, i) => {
            return (
              <li key={i}>
                <img src={headerBar} alt="" />
              </li>
            );
          })}
        </ul>
      </div>
      <div className={style.headerInner}>
        <div className={style.logo}>
          <a href="">
            <img src={logo} alt="" />
          </a>
        </div>
        <Nav clickHandle={click} onClose={() => setClick(false)} />
        <button type="button" className={`${style.bBtn} f-dela`} onClick={handleClick}>
          {click ? "CLOSE" : "MENU"}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112.239 72.43" className={style.bBtnBg}>
            <path id="パス_43" data-name="パス 43" d="M110.238,35.215c0,22.367-24.678,35.215-55.119,35.215S0,57.581,0,35.215,24.678,0,55.119,0s55.119,12.848,55.119,35.215" transform="translate(1 1)" fill="#ff5206" stroke="#fff" stroke-width="2" />
          </svg>
        </button>
      </div>
    </header>
  );
}
