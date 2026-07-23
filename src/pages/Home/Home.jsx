import style from "./Home.module.scss";
import { Mv } from "./Mv/Mv";
import { About } from "./About/About";
import { Commitment } from "./Commitment/Commitment";
import { BreakContent } from "./BreakContent/BreakContent";
export function Home() {
  return (
    <main className={style.home}>
      <Mv />
      <div className={style.bgWrap}>
        <About />
        <Commitment />
      </div>
      <BreakContent />
    </main>
  );
}
