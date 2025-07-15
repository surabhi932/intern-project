function updateClock() {
  const now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  const ampm = h >= 12 ? 'PM' : 'AM';

  h = h % 12 || 12; // Convert to 12-hour format
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  document.getElementById('hours').textContent = h;
  document.getElementById('minutes').textContent = m;
  document.getElementById('seconds').textContent = s;
  document.getElementById('ampm').textContent = ampm;
}

setInterval(updateClock, 1000);
updateClock();
