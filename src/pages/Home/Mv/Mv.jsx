import style from "./Mv.module.scss";

export function Mv() {
  return (
    <div className={style.Mv}>
      <h1 className={`.f-dela`}>
        <span className={style.siteTitleContainer}>
          <span className={style.titleText}>
            <span className={style.small}>
              <span className={style.titleEn}>Bursting meat juices !</span>
              <span className={style.titleJp}>弾ける</span>
            </span>
            <span className={style.large}></span>
          </span>
        </span>
      </h1>
    </div>
  );
}
