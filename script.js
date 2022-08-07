function loadVideo() {
  document
    .getElementById("videoSource")
    .setAttribute("src", localStorage.getItem("url"));
  document.getElementById("videoPlayer").load();
  document.getElementById("videoPlayer").volume = 0.5;
}

document.getElementById("urlButton").addEventListener("click", function (e) {
  if (document.getElementById("urlInput").value != "") {
    localStorage.setItem("url", document.getElementById("urlInput").value);
    document.getElementById("urlInput").value = "";
  }
  loadVideo();
  document.getElementById("videoPlayer").play();
});

document.getElementById("urlClear").addEventListener("click", function (e) {
  localStorage.setItem("url", "");
  document.getElementById("urlInput").value = "";
  loadVideo();
});

loadVideo();
