"use client";

import { useEffect, useState } from "react";

function isAtPageBottom() {
  const scrollEl = document.scrollingElement ?? document.documentElement;
  const scrollTop = scrollEl.scrollTop;
  const clientHeight = scrollEl.clientHeight;
  const maxScroll = scrollEl.scrollHeight - clientHeight;

  if (maxScroll <= 0) return true;
  if (scrollTop >= maxScroll - 4) return true;

  const footer = document.querySelector("footer");
  if (footer) {
    const { bottom } = footer.getBoundingClientRect();
    if (bottom <= clientHeight + 24) return true;
  }

  const marker = document.getElementById("scroll-end-marker");
  if (marker) {
    const { top } = marker.getBoundingClientRect();
    if (top <= clientHeight + 24) return true;
  }

  return false;
}

function getScrollProgress() {
  const scrollEl = document.scrollingElement ?? document.documentElement;
  const scrollTop = scrollEl.scrollTop;
  const maxScroll = scrollEl.scrollHeight - scrollEl.clientHeight;

  if (maxScroll <= 0 || isAtPageBottom()) return 100;

  const progress = (scrollTop / maxScroll) * 100;

  if (progress >= 99) return 100;

  return Math.min(100, progress);
}

export function useScrollProgress(resetKey = "") {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let rafId = 0;

    const update = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setScrollProgress(getScrollProgress());
      });
    };

    update();

    window.addEventListener("scroll", update, { passive: true });
    document.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    window.addEventListener("load", update);

    const footer = document.querySelector("footer");
    let footerObserver = null;

    if (footer && "IntersectionObserver" in window) {
      footerObserver = new IntersectionObserver(update, {
        threshold: [0, 0.25, 0.5, 0.75, 1],
      });
      footerObserver.observe(footer);
    }

    const t1 = setTimeout(update, 100);
    const t2 = setTimeout(update, 500);
    const t3 = setTimeout(update, 1500);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", update);
      document.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.removeEventListener("load", update);
      footerObserver?.disconnect();
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [resetKey]);

  return scrollProgress;
}
