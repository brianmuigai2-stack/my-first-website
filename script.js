// 🌗 Theme toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const darkMode = document.body.classList.contains("dark");
  themeToggle.textContent = darkMode ? "☀️" : "🌙";
  themeToggle.setAttribute("aria-pressed", darkMode ? "true" : "false");
});

// 📬 Contact form feedback
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  if (email && message) {
    alert("✅ Thank you for your message! I'll get back to you soon.");
    contactForm.reset();
  } else {
    alert("⚠️ Please fill in both fields.");
  }
});

// 🧭 Smooth scrolling
document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    if (link.hash) {
      e.preventDefault();
      document.querySelector(link.hash).scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
