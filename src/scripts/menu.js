import { gsap } from "gsap";

export function initMenu() {
  const btn = document.querySelector("#menu-toggle");
  const menu = document.querySelector("#mobile-menu");

  if (!btn || !menu) return;

  let isOpen = false;

  const openMenu = () => {
    gsap.to(menu, {
      duration: 0.4,
      opacity: 1,
      y: 0,
      display: "flex",
      ease: "power2.out",
    });
    isOpen = true;
  };

  const closeMenu = () => {
    gsap.to(menu, {
      duration: 0.3,
      opacity: 0,
      y: -20,
      display: "none",
      ease: "power2.in",
    });
    isOpen = false;
  };

  btn.addEventListener("click", () => {
    isOpen ? closeMenu() : openMenu();
  });

  // Optional: Close menu on link click
  document.querySelectorAll("#mobile-menu a").forEach((link) =>
    link.addEventListener("click", () => {
      if (isOpen) closeMenu();
    }),
  );
}
