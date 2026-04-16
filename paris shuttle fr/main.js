// ===== MOBILE MENU =====
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

// Close menu on outside click
document.addEventListener('click', function(e) {
  const menu = document.getElementById('mobileMenu');
  const ham = document.getElementById('hamburger');
  if (menu && ham && !menu.contains(e.target) && !ham.contains(e.target)) {
    menu.classList.remove('open');
  }
});

// ===== TOAST =====
function showToast(msg, icon) {
  icon = icon || '✅';
  const t = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = msg;
  document.getElementById('toastIcon').textContent = icon;
  t.classList.add('show');
  setTimeout(function() { t.classList.remove('show'); }, 4000);
}

// ===== SET MIN DATE =====
document.addEventListener('DOMContentLoaded', function() {
  const today = new Date().toISOString().split('T')[0];
  document.querySelectorAll('input[type="date"]').forEach(function(d) {
    d.min = today;
    if (!d.value) d.value = today;
  });
});

// ===== NAVBAR SCROLL SHADOW =====
window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  if (!nav) return;
  if (window.scrollY > 40) {
    nav.style.boxShadow = '0 4px 24px rgba(26,26,46,0.12)';
  } else {
    nav.style.boxShadow = '0 2px 12px rgba(26,26,46,0.06)';
  }
});

// ===== FAQ TOGGLE =====
function toggleFAQ(el) {
  const item = el.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(function(i) {
    i.classList.remove('open');
  });
  if (!isOpen) item.classList.add('open');
}

// ===== FAQ FILTER =====
function filterFAQ(cat, btn) {
  document.querySelectorAll('.faq-cat-btn').forEach(function(b) {
    b.classList.remove('active');
  });
  btn.classList.add('active');
  document.querySelectorAll('.faq-item').forEach(function(item) {
    item.style.display = (cat === 'all' || item.dataset.cat === cat) ? '' : 'none';
  });
}

// ===== CONTACT FORM SUBMIT =====
function submitContact() {
  var fname = document.getElementById('cf-fname');
  var email = document.getElementById('cf-email');
  var from  = document.getElementById('cf-from');
  var to    = document.getElementById('cf-to');
  if (!fname || !email || !from || !to) return;
  if (!fname.value.trim() || !email.value.trim() || !from.value || !to.value) {
    showToast('Please fill in all required fields.', '⚠️');
    return;
  }
  if (!email.value.includes('@')) {
    showToast('Please enter a valid email address.', '⚠️');
    return;
  }
  showToast('Booking request sent! We\'ll confirm within 30 minutes.', '✅');
  ['cf-fname','cf-lname','cf-email','cf-phone','cf-flight','cf-notes'].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.value = '';
  });
}

// ===== QUICK BOOK =====
function handleBooking() {
  showToast('Redirecting to booking form...', '🚖');
  setTimeout(function() {
    window.location.href = 'contact.html';
  }, 1200);
}