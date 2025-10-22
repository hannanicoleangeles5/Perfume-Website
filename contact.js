// Burger menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Contact form submission
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Your message has been sent successfully!");
  e.target.reset();
});