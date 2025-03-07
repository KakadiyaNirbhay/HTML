document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const fullPageNav = document.getElementById('fullPageNav');
  const closeNav = document.getElementById('closeNav');

  // Show full-page navigation menu
  if (navToggle && fullPageNav) {
    navToggle.addEventListener('click', () => {
      fullPageNav.classList.add('active');
    });
  }

  // Hide full-page navigation menu
  if (closeNav && fullPageNav) {
    closeNav.addEventListener('click', () => {
      fullPageNav.classList.remove('active');
    });
  }

  // Update Clock
  function updateClock() {
    const clockElement = document.getElementById('clock');
    if (!clockElement) return;

    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    clockElement.textContent = `LOCAL/${hours}:${minutes}:${seconds}`;
  }

  setInterval(updateClock, 1000);
  updateClock();
});


document.addEventListener('DOMContentLoaded', () => {
  const serviceCards = document.querySelectorAll('.service-card');

  serviceCards.forEach(card => {
      const icon = card.querySelector('.icon');
      const fullPageService = card.querySelector('.full-page-service');
      const closeBtn = fullPageService.querySelector('.services-close-btn');

      icon.addEventListener('click', () => {
          fullPageService.classList.add('show');
      });

      closeBtn.addEventListener('click', () => {
          fullPageService.classList.remove('show');
      });
  });
});
