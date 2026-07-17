import style from "./Home.module.scss";
import { Mv } from "./Mv/Mv";

export function Home() {
  return (
    <main className={style.home}>
      <Mv />
    </main>
  );
}
