import "../../src/css/progressBar.css";
let lineProgressBar = document.querySelector(".progress-line");

function progressBar() {
  document.onscroll = function () {
    let progressLine =
      (window.scrollY / (document.body.clientHeight - window.innerHeight)) *
      100;

    lineProgressBar.style.width = `${progressLine}%`;
  };
}

export default progressBar;
