import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".l-zoom-container", // élément qui déclenche l'animation
    start: "top top", // quand le haut de .zoom-container touche le haut du viewport
    end: "bottom+=600% top", // durée du scroll (ici très longue, 35x la hauteur de l'écran)
    scrub: true, // synchronise le scroll avec l'avancement de l'animation
    pin: true, // "bloque" la section pendant toute la durée de l’animation
    markers: false, // si true → affiche des repères visuels pour le debug
  },
});

// zoom 1
tl.to(".zoom-01-start-button", {
  y: "100%",
  opacity: 0,
  duration: 1,
  ease: "none",
})
  .to(".zoom-01-element-1", { scale: 3, y: "100%", duration: 3, ease: "none" })
  .to(".zoom-01-element-2", { scale: 3, y: "100%", duration: 4, ease: "none" })
  .to(".zoom-01-title", {
    scale: 2,
    opacity: 0,
    y: "-200%",
    duration: 4,
    ease: "none",
  })
  .to(".zoom-01-background", {
    scale: 3,
    opacity: 0,
    duration: 1,
    ease: "none",
  })
  // zoom 2
  .to(".zoom-02-element-1", {
    scale: 3,
    opacity: 0,
    y: "100%",
    duration: 4,
    ease: "none",
  })
  .to(".zoom-02-element-2", {
    scale: 3,
    opacity: 0,
    y: "100%",
    duration: 4,
    ease: "none",
  })
  .to(".zoom-02-moon", {
    scale: 3,
    opacity: 0,
    y: "100%",
    duration: 4,
    ease: "none",
  })
  .to(".zoom-02-text", {
    scale: 3,
    opacity: 0,
    y: "100%",
    duration: 4,
    ease: "none",
  })
  .to(".zoom-02-background", {
    scale: 3,
    opacity: 0,
    duration: 1,
    ease: "none",
  })
  // zoom 3
  .to(".zoom-03-element-1", {
    scale: 3,
    opacity: 0,
    y: "100%",
    duration: 4,
    ease: "none",
  })
  .to(".zoom-03-element-2", {
    scale: 3,
    opacity: 0,
    y: "100%",
    duration: 4,
    ease: "none",
  })
  .to(".zoom-03-element-3", {
    scale: 3,
    opacity: 0,
    y: "100%",
    duration: 4,
    ease: "none",
  })
  .to(".zoom-03-element-4", {
    scale: 3,
    opacity: 0,
    y: "100%",
    duration: 4,
    ease: "none",
  })
  .to(".zoom-03-element-5", {
    scale: 3,
    opacity: 0,
    y: "100%",
    duration: 4,
    ease: "none",
  })
  .to(".zoom-03-element-6", {
    scale: 3,
    opacity: 0,
    y: "100%",
    duration: 4,
    ease: "none",
  })
  .to(".zoom-03-element-7", {
    scale: 3,
    opacity: 0,
    y: "100%",
    duration: 4,
    ease: "none",
  })
  .to(".zoom-03-element-8", {
    scale: 3,
    opacity: 0,
    y: "100%",
    duration: 4,
    ease: "none",
  })
  .to(".zoom-03-text", {
    scale: 3,
    opacity: 0,
    y: "100%",
    duration: 4,
    ease: "none",
  })
  .to(".zoom-03-text-2", {
    scale: 3,
    opacity: 0,
    y: "100%",
    duration: 4,
    ease: "none",
  })
  .to(".zoom-03-background", {
    scale: 3,
    opacity: 0,
    y: "100%",
    duration: 4,
    ease: "none",
  })
  // zoom 4
  .to(".zoom-04-element-1", {
    scale: 3,
    opacity: 0,
    y: "100%",
    duration: 4,
    ease: "none",
  })
  .to(".zoom-04-element-2", {
    scale: 3,
    opacity: 0,
    y: "100%",
    duration: 4,
    ease: "none",
  })
  .to(".zoom-04-text", {
    scale: 3,
    opacity: 0,
    y: "100%",
    duration: 4,
    ease: "none",
  })
  .to(".zoom-04-text-2", {
    scale: 3,
    opacity: 0,
    y: "100%",
    duration: 4,
    ease: "none",
  })
  .to(".zoom-04-background", {
    scale: 3,
    opacity: 0,
    y: "100%",
    duration: 4,
    ease: "none",
  })
  // zoom 5
  .to(".zoom-05-element-1", {
    scale: 3,
    opacity: 0,
    y: "100%",
    duration: 4,
    ease: "none",
  })
  .to(".zoom-05-element-2", {
    scale: 3,
    opacity: 0,
    y: "100%",
    duration: 4,
    ease: "none",
  })
  .to(".zoom-05-text", {
    scale: 3,
    opacity: 0,
    y: "100%",
    duration: 4,
    ease: "none",
  })
  .to(".zoom-05-text-2", {
    scale: 3,
    opacity: 0,
    y: "100%",
    duration: 4,
    ease: "none",
  })
  .to(".zoom-05-background", {
    scale: 3,
    opacity: 0,
    y: "100%",
    duration: 4,
    ease: "none",
  });
