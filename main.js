
const timeValue = document.getElementById("time-value");

function updateTime() {
  const now = Date.now();
  timeValue.textContent = now;
}

updateTime();
setInterval(updateTime, 1000);
