import "../../src/css/preloader.css";

document.body.style.overflow = "hidden";

function preloader() {
  document.body.onload = function () {
    setTimeout(() => {
      let preloader = document.querySelector(".preloader-backdrop");

      if (!preloader.classList.contains("done")) {
        preloader.classList.add("done");
      }

      document.body.style.overflow = "scroll";
    }, 3000);
  };
}

export default preloader;
