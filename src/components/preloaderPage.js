import "../../src/css/preloader.css";

document.body.style.overflowY = "hidden";
document.documentElement.style.overflowY = 'hidden';

function preloader() {
  document.body.onload = function () {
    setTimeout(() => {
      let preloader = document.querySelector(".preloader-backdrop");

      if (!preloader.classList.contains("done")) {
        preloader.classList.add("done");
      }

      document.body.style.overflowY = "scroll";
      document.documentElement.style.overflowY = 'scroll';
    }, 3000);
  };
}

export default preloader;
