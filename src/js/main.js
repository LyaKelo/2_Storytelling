import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".l-zoom-container", // élément qui déclenche l'animation
    start: "top top", // quand le haut de .zoom-container touche le haut du viewport
    end: "bottom+=3500% top", // durée du scroll (ici très longue, 35x la hauteur de l'écran)
    scrub: true, // synchronise le scroll avec l'avancement de l'animation
    pin: true, // "bloque" la section pendant toute la durée de l’animation
    markers: false, // si true → affiche des repères visuels pour le debug
  },
});

tl.to(".zoom-01-start-button", {
  y: "100%",
  opacity: 0,
  duration: 0.3,
  ease: "none",
})
  .to(
    ".zoom-01-element-1",
    { scale: 3, y: "100%", duration: 5, ease: "none" },
    "=10"
  )
  .to(".zoom-01-element-2", { scale: 3, y: "100%", duration: 4, ease: "none" })
  .to(".zoom-01-background", {
    scale: 3,
    opacity: 0,
    duration: 1,
    ease: "none",
  });
