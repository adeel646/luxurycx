function toggleFaq(el){
  const item = el.parentElement;
  document.querySelectorAll('.faq-item').forEach(i => { if(i !== item) i.classList.remove('open'); });
  item.classList.toggle('open');
}

function demoStep(n){
  const body = document.getElementById('demoBody');
  const actions = document.getElementById('demoActions');

  if(n === 1){
    body.innerHTML += `<div class="msg user">I'm looking at a Daytona</div>`;
    body.innerHTML += `<div class="msg bot">Excellent choice. We currently have two references available: steel and two-tone. Are you looking for a specific dial color, or would you like to see both at a private viewing this week?</div>`;
    actions.innerHTML = `
      <button class="chip" onclick="demoStep(3)">Show me both</button>
      <button class="chip" onclick="demoStep(4)">I'd like to book a viewing</button>`;
  }
  if(n === 2){
    body.innerHTML += `<div class="msg user">Just browsing for now</div>`;
    body.innerHTML += `<div class="msg bot">Of course, no pressure at all. I'll share a short overview of this month's new arrivals, and I'm here whenever you're ready to go deeper.</div>`;
    actions.innerHTML = `<button class="chip" onclick="demoStep(5)">See new arrivals</button>`;
  }
  if(n === 3){
    body.innerHTML += `<div class="msg user">Show me both</div>`;
    body.innerHTML += `<div class="msg bot">Sending both references now. If either fits what you're picturing, I can hold it for 48 hours while you decide on a viewing.</div>`;
    actions.innerHTML = `<button class="chip" onclick="demoStep(4)">Book a viewing</button>`;
  }
  if(n === 4){
    body.innerHTML += `<div class="msg user">I'd like to book a viewing</div>`;
    body.innerHTML += `<div class="msg bot">Booked for Thursday, 4:00 PM, with our senior advisor. You'll receive a confirmation by WhatsApp, and the piece will be ready for you to try on arrival.</div>`;
    actions.innerHTML = `<div class="demo-note">// Appointment logged. Advisor notified. Lead marked as qualified.</div>`;
  }
  if(n === 5){
    body.innerHTML += `<div class="msg bot">Here are three pieces added this month, chosen for buyers with similar taste to what you've viewed so far. Let me know if anything catches your eye.</div>`;
    actions.innerHTML = `<div class="demo-note">// Buyer added to warm follow-up sequence. No advisor time spent.</div>`;
  }
  body.scrollTop = body.scrollHeight;
}