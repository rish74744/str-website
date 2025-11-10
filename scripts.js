// small helpers: live year and Netlify form success handling
document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('bookingForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', (e) => {
  // Netlify handles posting; this gives immediate UI feedback
  formMessage.textContent = 'Sending…';
  setTimeout(() => { formMessage.textContent = 'Thanks — inquiry sent. I will reply within 24 hours.' }, 800);
});

// FullCalendar setup
document.getElementById('checkAvailability').addEventListener('click', function(e) {
  alert('Loading availability calendar...');
//document.addEventListener('DOMContentLoaded', function () {
  e.preventDefault();
  const calendarEl = document.getElementById('calendar');
  if (!calendarEl.innerHTML) {
    alert('Loading availability calendar...');
    calendarEl.innerHTML = `
      <iframe src="https://calendar.google.com/calendar/u/0?cid=cmlzaGkuc3JpdmFzdGF2QGdtYWlsLmNvbQ"
              style="border: 0" width="100%" height="600" frameborder="0" scrolling="no"></iframe>
    `;
  }
  else {
    alert('Availability calendar is already loaded.');
  }


  calendarEl.render();
});
