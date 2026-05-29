"use client";

import { useEffect } from "react";

/**
 * Adds `.in` class to any `.reveal` element when it enters the viewport.
 * Plus marks the current nav link active based on the URL path.
 * Drop once at the layout level.
 */
export function ScrollReveal() {
  useEffect(() => {
    // Reveal on scroll
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    // Active nav link based on URL
    const path = window.location.pathname;
    document.querySelectorAll<HTMLAnchorElement>(".nav-links a").forEach((a) => {
      const href = a.getAttribute("href") || "";
      if (href === path || (path === "/" && href === "/")) {
        a.classList.add("active");
      } else {
        a.classList.remove("active");
      }
    });

    return () => io.disconnect();
  }, []);

  return null;
}
