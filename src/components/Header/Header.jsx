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
        </button>
      </div>
    </header>
  );
}
