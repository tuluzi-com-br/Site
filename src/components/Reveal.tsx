"use client";

import { useEffect, useRef, type ElementType, type ReactNode, type CSSProperties } from "react";

/** Revela o conteúdo com suavidade quando entra na tela. */
export function Reveal({
  children,
  as: Tag = "div",
  className = "",
  atraso = 0,
  imagem = false,
  style,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  atraso?: number;
  imagem?: boolean;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("visivel");
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("visivel");
            obs.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`${imagem ? "revelar-imagem" : "revelar"} ${className}`}
      style={{ ...style, ["--atraso" as string]: `${atraso}ms` }}
    >
      {children}
    </Tag>
  );
}
