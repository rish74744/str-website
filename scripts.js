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
//document.addEventListener('DOMContentLoaded', function () {
  e.preventDefault();
  const calendarEl = document.getElementById('calendar');
 
  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    events: {
      url: 'https://calendar.google.com/calendar/u/0?cid=cmlzaGkuc3JpdmFzdGF2QGdtYWlsLmNvbQ', // Replace with your iCal feed URL
      format: 'ics'
    },
    eventColor: '#ccc', // grey out unavailable dates
    eventDisplay: 'background', // show as blocked
    height: 'auto'
  });

  calendar.render();
});
