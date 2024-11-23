'use client';
import { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';
import { AnimeInstance } from 'animejs';

type AnimatedCounterProps = {
  count: number;
  delay: number;
};

export function AnimatedCounter(props: Readonly<AnimatedCounterProps>) {
  const ref = useRef(null);
  const counter = useRef({
    value: 0,
  });
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (prefersReducedMotion) {
      return;
    }
    let animation: AnimeInstance | null = anime({
      autoplay: false,
      targets: counter.current,
      value: props.count,
      round: 1,
      easing: 'cubicBezier(0.190, 1.000, 0.000, 1.000)',
      duration: props.delay,
      update: () => {
        if (ref.current) {
          (ref.current as HTMLElement).innerText =
            counter.current.value.toFixed(0);
        }
      },
    });
    animation?.play();
    return () => {
      animation?.pause();
      animation = null;
    };
  }, [props.count, props.delay]);
  return <p ref={ref}>{props.count}</p>;
}
