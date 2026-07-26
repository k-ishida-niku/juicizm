import style from "./Loading.module.scss";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

import { useSessionState } from "../../hooks/useSessionState";

export function Loading() {
  const [count, setCount] = useState(100);
  const numRef = useRef({ val: 100 });
  const loadingRef = useRef(null);
  const { myState, setMyState } = useSessionState();
  useEffect(() => {
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(loadingRef);
      window.addEventListener("load", () => {
        if (myState === "first-visit") {
          const tl = gsap.timeline();
          tl.fromTo(
            q(".loadBar"),
            {
              width: "100%",
            },
            {
              width: "0%",
              duration: 3,
            },
          )
            .fromTo(
              q(".loadMessage"),
              {
                scale: 0,
              },
              {
                scale: 1,
                duration: 0.5,
                ease: "bounce.out",
              },
            )
            .fromTo(
              loadingRef.current,
              { opacity: 1, visibility: "visible" },
              {
                opacity: 0,
                duration: 0.5,
                onComplete: () => {
                  gsap.set(loadingRef.current, { visibility: "hidden" });
                },
              },
            );
          gsap.to(numRef.current, {
            val: 0,
            duration: 3,
            ease: "power1.out",
            onUpdate: () => {
              // 小数点を切り捨ててステートに反映
              setCount(Math.floor(numRef.current.val));
            },
          });
          setMyState("visited");
        } else {
          gsap.to(loadingRef.current, {
            opacity: 0,
            visibility: "hidden",
            duration: 0,
          });
        }
      });
    });
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={style.loading} ref={loadingRef}>
      <div className={style.contentBox}>
        <div className={`${style.text} f-dela`}>満腹度、低下中・・・。</div>
        <div className={style.progressBar}>
          <div className={`${style.progressBarBg} loadBar`}></div>
        </div>
        <div className={`${style.count} f-dela`}>
          <span className={style.countNum}>{count}</span>
          <span>%</span>
        </div>
      </div>
      <div className={`${style.message} f-dela loadMessage`}>腹ペコだ!!</div>
    </div>
  );
}
