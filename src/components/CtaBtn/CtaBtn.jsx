import style from "./CtaBtn.module.scss";

export function CtaBtn(props) {
  const { btnText, mw } = props;
  return (
    <a href="" className={`${style.ctaBtn} f-dela`} style={{ width: `min(100%, ${mw}px)` }}>
      {btnText}
    </a>
  );
}
