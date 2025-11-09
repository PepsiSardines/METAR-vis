function updateClocks() {
  const now = new Date();

  const dateFormatter = new Intl.DateTimeFormat(undefined, {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const timeFormatter = new Intl.DateTimeFormat(undefined, {
    hour: 'numeric',
    minute: '2-digit',
  });

  const zuluFormatter = new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'UTC',
  });

  document.getElementById('current-date').textContent = dateFormatter.format(now);
  document.getElementById('local-time').textContent = `Local ${timeFormatter.format(now)}`;
  document.getElementById('zulu-time').textContent = `Zulu ${zuluFormatter.format(now)}Z`;
}

function initTicker() {
  const ticker = document.querySelector('.ticker');
  if (!ticker) return;
  const content = ticker.innerHTML;
  ticker.innerHTML = `${content}${content}`;
}

updateClocks();
setInterval(updateClocks, 1000);
window.addEventListener('DOMContentLoaded', initTicker);
