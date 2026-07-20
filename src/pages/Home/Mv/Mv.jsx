import style from "./Mv.module.scss";
import siteTitle from "../../../assets/img/mv/site-title.svg";
import mvImg01 from "../../../assets/img/mv/mv01.webp";
import mvImg02 from "../../../assets/img/mv/mv02.webp";
import mvImgText01 from "../../../assets/img/mv/circle-l.svg";
import mvImgText02 from "../../../assets/img/mv/circle-s.svg";
import starburst from "../../../assets/img/global/starburst.svg";
import drop from "../../../assets/img/global/drop.svg";

export function Mv() {
  return (
    <div className={style.Mv}>
      <div className={style.mvInner}>
        <h1 className={style.siteTitle}>
          <img src={siteTitle} alt="" />
          <div className={style.titleStar}>
            <img src={starburst} alt="" />
          </div>
        </h1>
      </div>
      <div className={style.mvBg}>
        <div className={style.mvImg01}>
          <img src={mvImg01} alt="" />
          <div className={style.mvImgText}>
            <img src={mvImgText01} alt="" />
          </div>
        </div>
        <div className={style.mvImg02}>
          <img src={mvImg02} alt="" />
          <div className={style.mvImgText}>
            <img src={mvImgText02} alt="" />
          </div>
        </div>
        <div className={style.mvBgStarLT}>
          <img src={starburst} alt="" />
        </div>
        <div className={style.mvBgStarFree}>
          <img src={starburst} alt="" />
          <div className={style.dropPc}>
            <img src={drop} alt="" />
          </div>
        </div>
        <div className={style.drop}>
          <img src={drop} alt="" />
        </div>
      </div>
    </div>
  );
}
