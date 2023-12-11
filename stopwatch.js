document.addEventListener("DOMContentLoaded", function () {
  let stopwatchInterval;
  let isRunning = false;
  let seconds = 0;
  let minutes = 0;
  let hours = 0;

  function updateDisplay() {
      document.getElementById("stopwatchDisplay").textContent = formatTime();
  }

  function formatTime() {
      const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
      const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
      const formattedHours = hours < 10 ? "0" + hours : hours;

      return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }

  function startStopwatch() {
      stopwatchInterval = setInterval(function () {
          seconds++;
          if (seconds === 60) {
              seconds = 0;
              minutes++;
          }
          if (minutes === 60) {
              minutes = 0;
              hours++;
          }
          updateDisplay();
      }, 1000);
  }

  function stopStopwatch() {
      clearInterval(stopwatchInterval);
  }

  function resetFunction() {
      stopStopwatch();
      seconds = 0;
      minutes = 0;
      hours = 0;
      updateDisplay();
      isRunning = false;

      const startStopButton = document.getElementById("startStopButton");
      startStopButton.textContent = "Start";
      startStopButton.classList.remove("btn-danger");
      startStopButton.classList.add("btn-primary");

      console.log('Timer reset!');
  }

  function toggleStopwatch() {
      const startStopButton = document.getElementById("startStopButton");
      var resetButton = document.getElementById('rstBtn');

      resetButton.addEventListener('click', function () {
          resetFunction();
      });

      if (isRunning) {
          stopStopwatch();
          startStopButton.textContent = "Start";
          startStopButton.classList.remove("btn-danger");
          startStopButton.classList.add("btn-primary");

      } else {
          startStopwatch();
          startStopButton.textContent = "Stop";
          startStopButton.classList.remove("btn-primary");
          startStopButton.classList.add("btn-danger");
      }

      isRunning = !isRunning;
  }

  document.getElementById("startStopButton").addEventListener("click", toggleStopwatch);
});
