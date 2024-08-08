let time = 0;
let initialLoading = false;
let timerDiv = document.getElementById("time");
document.getElementById("pause").setAttribute("disabled", true);
document.getElementById("pause").style.background = "grey";
document.getElementById("stop").setAttribute("disabled", true);
document.getElementById("stop").style.background = "grey";
let timerId;
setTime();

function setTime() {
  timerDiv.innerText =
    (parseInt(time / 3600) < 10 ? "0" : "") +
    parseInt(time / 3600) +
    " : " +
    (parseInt((time / 60) % 60) < 10 ? "0" : "") +
    parseInt((time / 60) % 60) +
    " : " +
    (parseInt(time % 60) < 10 ? "0" : "") +
    parseInt(time % 60);
}

function start() {
  if (!initialLoading) {
    timerId = setInterval(() => {
      time = time + 0.1;
      setTime();
    }, 100);
    document.getElementById("start").setAttribute("disabled", true);
    document.getElementById("start").style.background = "grey";
    document.getElementById("stop").removeAttribute("disabled");
    document.getElementById("stop").style.background = "black";
    document.getElementById("pause").removeAttribute("disabled");
    document.getElementById("pause").style.background = "black";
    initialLoading = true;
  }
}

function pause() {
  if (initialLoading) {
    clearInterval(timerId);
    initialLoading = false;
    document.getElementById("pause").innerText = "Continue";
    document.getElementById("start").style.background = "grey";
  } else {
    document.getElementById("pause").innerText = "pause";
    start();
  }
}

function stop() {
  document.getElementById("start").removeAttribute("disabled");
  document.getElementById("start").style.background = "black";
  document.getElementById("pause").setAttribute("disabled", true);
  document.getElementById("pause").innerText = "pause";
  document.getElementById("pause").style.background = "grey";
  document.getElementById("stop").setAttribute("disabled", true);
  document.getElementById("stop").style.background = "grey";
  clearInterval(timerId);
  time = 0;
  setTime();
  initialLoading = false;
}
