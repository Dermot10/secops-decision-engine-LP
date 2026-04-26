import { useEffect } from "react";

export function useReveal(selector: string) {
  useEffect(() => {
    const els = document.querySelectorAll(selector);

    const observer = new IntersectionObserver(entries => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          const el = e.target as HTMLElement;
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }
      });
    });

    els.forEach(el => observer.observe(el));
  }, [selector]);
}