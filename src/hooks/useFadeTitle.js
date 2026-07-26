import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function useFadeTitle() {
  const titleRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(titleRef);
      // メインの方のタイトルテキスト
      gsap.to(q(".char"), {
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        keyframes: [
          { scale: 1.5, duration: 0.5 },
          { scale: 1, duration: 0.5 },
        ],
        ease: "bounce.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      });

      // サブの方のタイトルテキスト
      gsap.fromTo(
        q(".subText"),
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "bounce.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          },
        },
      );
    });
    return () => ctx.revert();
  }, []);
  return titleRef;
}
