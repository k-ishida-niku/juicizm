import style from "./SectionTitle.module.scss";

export function SectionTitle(props) {
  const { text, sub } = props;
  const textArr = [...text];

  return (
    <h2 className={style.sectionTitle}>
      <span className={`${style.sub} ${style.white} f-dela`}>{sub}</span>
      <span className={style.titleText}>
        {textArr.map((char, index) => {
          return (
            <span key={index} className={`${style.char} f-modak`}>
              {char}
            </span>
          );
        })}
      </span>
    </h2>
  );
}
