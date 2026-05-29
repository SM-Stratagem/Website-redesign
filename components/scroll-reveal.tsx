"use client";

import { useEffect } from "react";

/**
 * Layout-level client hooks:
 *  - Marks .reveal elements .in on viewport entry
 *  - Marks the current nav link .active based on URL
 *  - Wires the mobile menu toggle to open/close .nav-links
 *  - Closes the mobile menu on nav-link click or Escape
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

    // Mobile menu toggle
    const toggle = document.querySelector<HTMLButtonElement>(".menu-toggle");
    const navLinks = document.querySelector<HTMLDivElement>(".nav-links");
    const body = document.body;

    const closeMenu = () => {
      navLinks?.classList.remove("open");
      toggle?.classList.remove("open");
      body.classList.remove("menu-open");
    };

    const handleToggle = () => {
      const isOpen = navLinks?.classList.toggle("open");
      toggle?.classList.toggle("open");
      if (isOpen) {
        body.classList.add("menu-open");
      } else {
        body.classList.remove("menu-open");
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };

    const linkClicks: Array<{
      el: HTMLAnchorElement;
      listener: () => void;
    }> = [];

    toggle?.addEventListener("click", handleToggle);
    document.addEventListener("keydown", handleEscape);

    navLinks?.querySelectorAll<HTMLAnchorElement>("a").forEach((a) => {
      const listener = () => closeMenu();
      a.addEventListener("click", listener);
      linkClicks.push({ el: a, listener });
    });

    return () => {
      io.disconnect();
      toggle?.removeEventListener("click", handleToggle);
      document.removeEventListener("keydown", handleEscape);
      linkClicks.forEach(({ el, listener }) =>
        el.removeEventListener("click", listener)
      );
    };
  }, []);

  return null;
}
