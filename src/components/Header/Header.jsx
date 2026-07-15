import style from "./Header.module.scss";
import logo from "../../assets/img/global/logo.svg";
export function Header() {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <a href="">
          <img src={logo} alt="" />
        </a>
      </div>
      <nav className={style.globalNav}></nav>
      <button type="button" className={`${style.bBtn} f-dela`}>
        MENU
      </button>
    </header>
  );
}
