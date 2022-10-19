import AOS from "aos";

function aosAnimation() {
  AOS.init({
    // disable: "mobile",
    offset: 100,
    duration: 400,
    anchorPlacement: "top-bottom",
    easing: "ease-in-sine",
    delay: 0,
    once: true,
  });
  window.addEventListener("load", AOS.refresh());
}

export default aosAnimation;
