import style from "./Commitment.module.scss";

export function Commitment() {
  return (
    <section className={style.commitment}>
      <div className={style.sectionInner}>
        <h2 className={style.commitmentTitle}>
          <span className={`${style.titleJp} f-dela`}>
            <span>肉汁への</span>
            <span>こだわり</span>
          </span>
          <span className={`${style.titleEn} f-modak`}>
            <span>Commitment to</span>
            <span>meat juices</span>
          </span>
        </h2>
      </div>
    </section>
  );
}
