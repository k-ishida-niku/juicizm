import style from "./Home.module.scss";
import { Mv } from "./Mv/Mv";
import { About } from "./About/About";

export function Home() {
  return (
    <main className={style.home}>
      <Mv />
      <About />
    </main>
  );
}
