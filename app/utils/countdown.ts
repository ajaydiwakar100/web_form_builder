// utils/countdown.ts
export function startCountdown(el: HTMLElement, endDate: string, endText: string = 'Time is up!') {
  const dayEl = el.querySelector('[data-js="day"]') as HTMLElement;
  const hourEl = el.querySelector('[data-js="hour"]') as HTMLElement;
  const minEl = el.querySelector('[data-js="minute"]') as HTMLElement;
  const secEl = el.querySelector('[data-js="second"]') as HTMLElement;

  const end = new Date(endDate).getTime();

  const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = end - now;

    if (distance < 0) {
      clearInterval(timer);
      el.innerHTML = `<div class="countdown-end">${endText}</div>`;
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (dayEl) dayEl.innerText = days.toString().padStart(2, '0');
    if (hourEl) hourEl.innerText = hours.toString().padStart(2, '0');
    if (minEl) minEl.innerText = minutes.toString().padStart(2, '0');
    if (secEl) secEl.innerText = seconds.toString().padStart(2, '0');
  }, 1000);
}