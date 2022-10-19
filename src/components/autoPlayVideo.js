function autoplay() {
  // <!-- 1. The <iframe> (video player) will replace this <div> tag. -->
  // <div class="iframe-container">
  //   <div id="player"></div>
  // </div>

  // 2. This code loads the IFrame Player API code asynchronously.
  // var tag = document.createElement("script");

  // tag.async = true;
  // tag.src = "https://www.youtube.com/iframe_api";

  // var firstScriptTag = document.getElementsByTagName("script")[0];

  // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  function loadPlayer() {
    if (typeof YT == "undefined" || typeof YT.Player == "undefined") {
      var tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      window.onYouTubePlayerAPIReady = function () {
        onYouTubeIframeAPIReady();
      };
    }
  }

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
      width: "100%",
      videoId: "9GnhXP0JOKM",
      playerVars: { autoplay: 1, playsinline: 1 },
      events: {
        onReady: onPlayerReady,
      },
    });

    console.log("player jkasdnbjkabskjcbaksbckascbaskjc");
  }

  // 4. The API will call this function when the video player is ready.
  function onPlayerReady(event) {
    event.target.mute();
    event.target.playVideo();
  }

  loadPlayer();
}

export default autoplay;
