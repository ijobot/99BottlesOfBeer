const button = document.getElementById("playButton");
const firstLyric = document.getElementById("first-lyric");
const secondLyric = document.getElementById("second-lyric");
const thirdLyric = document.getElementById("third-lyric");
const fourthLyric = document.getElementById("fourth-lyric");
const fifthLyric = document.getElementById("fifth-lyric");
const lyricsArray = [
  firstLyric,
  secondLyric,
  thirdLyric,
  fourthLyric,
  fifthLyric,
];

button.addEventListener("click", startTheSong);

function startTheSong() {
  button.setAttribute("disabled", "true");
  revealLyrics();
  countDown();
}

function countDown() {
  let count = 98;
  const timer = setInterval(() => {
    firstLyric.innerText = `${count} bottles of beer on the wall...`;
    secondLyric.innerText = `${count} bottles of beer!`;
    fifthLyric.innerText = `${count - 1} bottles of beer on the wall!`;

    revealLyrics();

    if (count === 2) {
      firstLyric.innerText = `${count} bottles of beer on the wall...`;
      secondLyric.innerText = `${count} bottles of beer!`;
      fifthLyric.innerText = `${count - 1} bottle of beer on the wall!`;
    }

    if (count === 1) {
      firstLyric.innerText = `${count} bottle of beer on the wall...`;
      secondLyric.innerText = `${count} bottle of beer!`;
      fifthLyric.innerText = `${count - 1} bottles of beer on the wall!`;
      clearInterval(timer);
    }

    count--;
  }, 6050);
}

function revealLyrics() {
  setTimeout(() => {
    revealSingleLyric(firstLyric);
  }, 1000);
  setTimeout(() => {
    revealSingleLyric(secondLyric);
  }, 2000);
  setTimeout(() => {
    revealSingleLyric(thirdLyric);
  }, 3000);
  setTimeout(() => {
    revealSingleLyric(fourthLyric);
  }, 4000);
  setTimeout(() => {
    revealSingleLyric(fifthLyric);
  }, 5000);
  setTimeout(() => {
    hideAllLyrics();
  }, 6000);
}

function revealSingleLyric(lyric) {
  lyric.classList.toggle("hidden");
}

function hideAllLyrics() {
  lyricsArray.forEach((lyric) => lyric.classList.toggle("hidden"));
}
