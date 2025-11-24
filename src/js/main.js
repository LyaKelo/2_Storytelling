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
  ease: "power4.in",
  filter: "blur(10px)",
  pointerEvents: "none",
})
  .to(".zoom-01-element-1", {
    scale: 7,
    y: "100%",
    duration: 3,
    ease: "power4.in",
    filter: "blur(10px)",
    pointerEvents: "none",
  })
  .to(
    ".zoom-01-element-2",
    {
      scale: 6,
      y: "100%",
      duration: 4,
      ease: "power4.in",
      filter: "blur(10px)",
      pointerEvents: "none",
    },
    "-=1"
  )
  .to(
    ".zoom-01-title",
    {
      scale: 2,
      opacity: 0,
      y: "-200%",
      duration: 4,
      ease: "power4.in",
      filter: "blur(10px)",
      pointerEvents: "none",
    },
    "-=3"
  )
  .to(
    ".zoom-01-background",
    {
      scale: 3,
      opacity: 0,
      duration: 1,
      ease: "power4.in",
      filter: "blur(10px)",
      pointerEvents: "none",
    },
    "-=1"
  )
  // zoom 2
  .to(".zoom-02-element-1", {
    scale: 3,
    opacity: 0,
    y: "100%",
    duration: 4,
    ease: "power4.in",
    filter: "blur(10px)",
    pointerEvents: "none",
  })
  .to(
    ".zoom-02-element-2",
    {
      scale: 3,
      opacity: 0,
      y: "100%",
      duration: 4,
      ease: "power4.in",
      filter: "blur(10px)",
      pointerEvents: "none",
    },
    "-=5"
  )
  .to(
    ".zoom-02-moon",
    {
      scale: 5,
      opacity: 0,
      y: "-100%",
      duration: 4,
      ease: "power4.in",
      pointerEvents: "none",
    },
    "-=3"
  )
  .to(
    ".zoom-02-text",
    {
      opacity: 0,
      x: "100%",
      duration: 4,
      ease: "power4.in",
      pointerEvents: "none",
    },
    "-=3"
  )
  .to(
    ".zoom-02-background",
    {
      scale: 3,
      opacity: 0,
      duration: 1,
      ease: "power4.in",
      pointerEvents: "none",
    },
    "-=1"
  )
  // zoom 3
  .to(
    ".zoom-03-element-1",
    {
      scale: 10,
      opacity: 0,
      y: "100%",
      duration: 4,
      ease: "power4.in",
      filter: "blur(20px)",
      pointerEvents: "none",
    },
    "-=1"
  )
  .to(
    ".zoom-03-element-2",
    {
      scale: 3,
      opacity: 0,
      y: "100%",
      duration: 4,
      ease: "power4.in",
      filter: "blur(20px)",
      pointerEvents: "none",
    },
    "-=3.5"
  )
  .to(
    ".zoom-03-front-seagulls",
    {
      scale: 3,
      opacity: 0,
      x: "-50%",
      y: "100%",
      duration: 4,
      ease: "power4.in",
      filter: "blur(5px)",
      pointerEvents: "none",
    },
    "-=6"
  )
  .to(
    ".zoom-03-element-3",
    {
      scale: 3,
      opacity: 0,
      y: "100%",
      duration: 4,
      x: "-30%",
      ease: "power4.in",
      filter: "blur(20px)",
      pointerEvents: "none",
    },
    "-=2,5"
  )
  .to(
    ".zoom-03-middle-seagulls",
    {
      scale: 3,
      opacity: 0,
      y: "100%",
      x: "50%",
      duration: 4,
      ease: "power4.in",
      filter: "blur(20px)",
      pointerEvents: "none",
    },
    "-=2,5"
  )
  .to(
    ".zoom-03-element-4",
    {
      scale: 3,
      opacity: 0,
      y: "100%",
      duration: 4,
      ease: "power4.in",
      filter: "blur(20px)",
      pointerEvents: "none",
    },
    "-=3"
  )
  .to(
    ".zoom-03-element-5",
    {
      scale: 3,
      opacity: 0,
      y: "100%",
      duration: 4,
      ease: "power4.in",
      filter: "blur(20px)",
      pointerEvents: "none",
    },
    "-=3"
  )
  .to(
    ".zoom-03-back-seagulls",
    {
      scale: 3,
      opacity: 0,
      x: "50%",
      y: "-100%",
      duration: 6,
      ease: "power4.in",
      filter: "blur(20px)",
      pointerEvents: "none",
    },
    "-=6"
  )
  .to(
    ".zoom-03-text",
    {
      opacity: 0,
      y: "30%",
      duration: 4,
      ease: "power4.in",
      x: "-100%",
      pointerEvents: "none",
    },
    "-=5"
  )
  .to(
    ".zoom-03-text-2",
    {
      opacity: 0,
      y: "30%",
      duration: 4,
      ease: "power4.in",
      x: "100%",
      pointerEvents: "none",
    },
    "-=3"
  )
  .to(
    ".zoom-03-background",
    {
      scale: 3,
      opacity: 0,
      y: "100%",
      duration: 4,
      ease: "power4.in",
      pointerEvents: "none",
    },
    "-=4"
  )
  // zoom 4
  .to(".zoom-04-element-1", {
    scale: 3,
    opacity: 0,
    y: "100%",
    duration: 4,
    ease: "power4.in",
    pointerEvents: "none",
  })
  .to(
    ".zoom-04-element-2",
    {
      scale: 3,
      opacity: 0,
      y: "100%",
      duration: 4,
      ease: "power4.in",
      pointerEvents: "none",
    },
    "-=3"
  )
  .to(
    ".zoom-04-text-2",
    {
      opacity: 0,
      y: "30%",
      duration: 4,
      ease: "power4.in",
      x: "-100%",
      pointerEvents: "none",
    },
    "-=4"
  )
  .to(
    ".zoom-04-text",
    {
      opacity: 0,
      y: "30%",
      duration: 4,
      ease: "power4.in",
      x: "100%",
      pointerEvents: "none",
    },
    "-=4"
  )
  .to(
    ".zoom-04-background",
    {
      scale: 3,
      opacity: 0,
      y: "100%",
      duration: 4,
      ease: "power4.in",
      pointerEvents: "none",
    },
    "-=2"
  )
  // zoom 5
  .to(".zoom-05-element-1", {
    scale: 3,
    opacity: 0,
    x: "-70%",
    y: "100%",
    duration: 4,
    ease: "power4.in",
    pointerEvents: "none",
  })
  .to(
    ".zoom-05-element-2",
    {
      scale: 3,
      opacity: 0,
      y: "100%",
      duration: 4,
      ease: "power4.in",
      x: "50%",
      pointerEvents: "none",
    },
    "-=3.5"
  )
  .to(
    ".zoom-05-text",
    {
      opacity: 0,
      y: "30%",
      duration: 4,
      ease: "power4.in",
      x: "100%",
      pointerEvents: "none",
    },
    "-=3"
  )
  .to(
    ".zoom-05-text-2",
    {
      opacity: 0,
      y: "30%",
      duration: 4,
      ease: "power4.in",
      x: "100%",
      pointerEvents: "none",
    },
    "-=3"
  )
  .to(".zoom-05-background", {
    opacity: 0,
    y: "-100%",
    duration: 4,
    ease: "power4.in",
    pointerEvents: "none",
  })
  .to(
    ".zoom-06-background",
    { y: "-50%", duration: 4, ease: "power4.in", pointerEvents: "none" },
    "-=4"
  )
  .to(
    ".zoom-06-element-1",
    { y: "-5%", duration: 4, ease: "power4.in", pointerEvents: "none" },
    "-=3"
  )
  .to(
    ".zoom-06-element-2",
    { y: "-5%", duration: 4, ease: "power4.in", pointerEvents: "none" },
    "-=3"
  )
  .to(
    ".zoom-06-element-3",
    { y: "-5%", duration: 4, ease: "power4.in", pointerEvents: "none" },
    "-=3"
  )
  .to(".zoom-06-text", {
    x: "-5%",
    duration: 3,
    ease: "power4.in",
    opacity: 0,
    pointerEvents: "none",
  })
  .to(".zoom-06-text-2", {
    x: "-5%",
    duration: 3,
    ease: "power4.in",
    opacity: 0,
    pointerEvents: "none",
  })
  .to(
    ".l-horinzontal-scroll",
    { x: "-100%", duration: 40, ease: "power4.in power7.out" },
    "=1"
  );
