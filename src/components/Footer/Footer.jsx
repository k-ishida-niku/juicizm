import style from "./Footer.module.scss";
import logo from "../../assets/img/global/logo-nobordr.svg";

import footerCatchSp from "../../assets/img/global/footer-catch-sp.svg";
import footerCatchPc from "../../assets/img/global/footer-catch-pc.svg";
import { useNav } from "../../hooks/useNav";

import bar from "../../assets/img/global/bar.svg";

export function Footer() {
  const navItem = useNav();

  return (
    <>
      <div className={style.bar}>
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
      <footer className={style.footer}>
        <div className={style.footerInner}>
          <div className={style.footerInfo}>
            <div className={style.footerLogo}>
              <img src={logo} alt="" />
            </div>
            <address className={style.shopInfo}>
              <p>HAMBURG RESTAURANT JUICIZM</p>
              <p>〒063-0051 北海道札幌市西区宮の沢1条2丁目3-1</p>
              <a href="tel:01112345678">011-1234-5678</a>
            </address>
          </div>
          <nav className={`${style.footerNav} f-dela`}>
            <ul>
              {navItem.map((item, index) => {
                return (
                  <li key={index}>
                    <a href="">{item.en}</a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <p className={`${style.catch} f-dela`}>
          <picture>
            <source srcSet={footerCatchPc} media="(width > 767px)" />
            <img src={footerCatchSp} alt="" />
          </picture>
        </p>
        <p className={`${style.copy} f-dela`}>
          <small>©JUICIZM</small>
        </p>
      </footer>
    </>
  );
}
