import style from "./NewsItem.module.scss";

import logo from "../../assets/img/global/logo.svg";
import arrow from "../../assets/img/global/arrow.svg";

export function NewsItem(props) {
  const { year, month, day, cat, text } = props;
  return (
    <article className={style.newsArticle}>
      <a href="" className={style.newsLink}>
        <div className={style.thumbnail}>
          <div className={style.logo}>
            <img src={logo} alt="" />
          </div>
          <div className={style.arrow}>
            <img src={arrow} alt="" />
          </div>
        </div>
        <div className={style.articleInfo}>
          <time datetime={`${year}-${month}-${day}`} className={`${style.time} f-dela`}>
            <span className={style.year}>{year}</span>
            <span className={style.monthDay}>
              {month}/{day}
            </span>
          </time>
          <p className={style.cat}>{cat}</p>
        </div>
        <p className={style.newsText}>{text}</p>
      </a>
    </article>
  );
}
