const viewTimer = {
  onTimerRev: (secTimer, distant = 5) => {
    secTimer.innerHTML = `0${distant}`;

    const timerRev = setInterval(() => {
      distant -= 1;
      secTimer.innerHTML = `0${distant}`;

      if (distant <= 0) {
        clearInterval(timerRev);
        window.globalStateApp.status = 'game';
      }
    }, 1000);
  },

  onStopwatch(minTimer, secTimer) {
    let time = 0;
    const stopwatch = setInterval(() => {
      if (window.globalStateApp.status === 'end') {
        clearInterval(stopwatch);
        return;
      }

      time += 1;
      const secondVal = Math.floor(time) - Math.floor(time / 60) * 60;
      const minuteVal = Math.floor(time / 60);
      secTimer.textContent = secondVal < 10 ? `0${secondVal}` : `${secondVal}`;
      minTimer.textContent = minuteVal < 10 ? `0${minuteVal}` : `${minuteVal}`;
    }, 1000);
  },
};

export default viewTimer;
