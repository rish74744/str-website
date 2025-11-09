// small helpers: live year and Netlify form success handling
document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('bookingForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', (e) => {
  // Netlify handles posting; this gives immediate UI feedback
  formMessage.textContent = 'Sending…';
  setTimeout(() => { formMessage.textContent = 'Thanks — inquiry sent. I will reply within 24 hours.' }, 800);
});
