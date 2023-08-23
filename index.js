const clock = document.querySelector(".clock");

let sec = 0,
  min = 0,
  hr = 0,
  intervalId;

const startStopwatch = () => {
  if (!intervalId) {
    intervalId = setInterval(() => {
      if (sec < 59) sec++;
      else if (min >= 59) {
        hr++;
        min = 0;
      } else {
        sec = 0;
        min++;
      }

      const seconds = sec.toString().padStart(2, "0");
      const minutes = min.toString().padStart(2, "0");
      const hours = hr.toString().padStart(2, "0");

      clock.innerText = `${hours}:${minutes}:${seconds}`;
    }, 1000);
  }
};

const stopStopwatch = () => {
  clearInterval(intervalId);
  intervalId = null; // Reset intervalId so the stopwatch can be started again
};

// Attach the event listeners to the buttons
document.querySelector(".start-animation").addEventListener("click", startStopwatch);
document.querySelector(".stop-animation").addEventListener("click", stopStopwatch);
