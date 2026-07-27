import style from "./Nav.module.scss";
import { useNav } from "../../hooks/useNav";

export function Nav(props) {
  const navItem = useNav();
  const { clickHandle, onClose } = props;
  const handleClose = () => {
    onClose();
  };

  return (
    <nav className={clickHandle ? `${style.nav} ${style.isActive}` : style.nav}>
      <ul>
        {navItem.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.link} onClick={handleClose}>
                <span className={style.jp}>{item.jp}</span>
                <span className={`${style.en} f-dela`}>{item.en}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
