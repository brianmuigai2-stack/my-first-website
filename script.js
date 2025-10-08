/* ===========================
   THEME (toggle + persistence)
   =========================== */
   const themeToggle = document.getElementById("theme-toggle");
   function applyThemeFromStorage(){
     const saved = localStorage.getItem("theme");
     if(saved === "dark"){
       document.body.classList.add("dark");
       themeToggle.textContent = "☀️";
       themeToggle.setAttribute("aria-pressed", "true");
     } else {
       document.body.classList.remove("dark");
       themeToggle.textContent = "🌙";
       themeToggle.setAttribute("aria-pressed", "false");
     }
   }
   applyThemeFromStorage();
   
   themeToggle.addEventListener("click", () => {
     const darkOn = document.body.classList.toggle("dark");
     themeToggle.textContent = darkOn ? "☀️" : "🌙";
     themeToggle.setAttribute("aria-pressed", darkOn ? "true" : "false");
     localStorage.setItem("theme", darkOn ? "dark" : "light");
   });
   
   /* ===========================
      TYPED HERO TEXT
      =========================== */
   const roles = ["Software Engineering student.", "Web developer.", "Problem solver.", "Open-source contributor."];
   const typedEl = document.getElementById("typed");
   let ti = 0, ci = 0, deleting = false;
   function typeLoop(){
     if(!typedEl) return;
     const current = roles[ti];
     typedEl.textContent = current.slice(0, ci);
     if(!deleting){
       ci++;
       if(ci > current.length){ deleting = true; setTimeout(typeLoop, 1200); return; }
     } else {
       ci--;
       if(ci < 0){ deleting = false; ti = (ti + 1) % roles.length; setTimeout(typeLoop, 300); return; }
     }
     setTimeout(typeLoop, deleting ? 40 : 80);
   }
   typeLoop();
   
   /* ===========================
      SKILL BARS (animate on scroll)
      =========================== */
   const skillBars = document.querySelectorAll(".bar");
   if("IntersectionObserver" in window){
     const obs = new IntersectionObserver((entries, o) => {
       entries.forEach(entry => {
         if(entry.isIntersecting){
           const width = entry.target.dataset.width;
           entry.target.style.width = width + "%";
           o.unobserve(entry.target);
         }
       });
     }, {threshold: 0.4});
     skillBars.forEach(b => obs.observe(b));
   } else {
     skillBars.forEach(b => b.style.width = b.dataset.width + "%");
   }
   
   /* ===========================
      PROJECT FILTER
      =========================== */
   document.querySelectorAll(".filter-btn").forEach(btn => {
     btn.addEventListener("click", () => {
       document.querySelector(".filter-btn.active")?.classList.remove("active");
       btn.classList.add("active");
       const f = btn.dataset.filter;
       document.querySelectorAll(".project-card").forEach(card => {
         if(f === "all") { card.style.display = ""; return; }
         const tags = (card.dataset.tags || "").split(" ").map(t => t.trim());
         card.style.display = tags.includes(f) ? "" : "none";
       });
     });
   });
   
   /* ===========================
      CONTACT FORM (EmailJS)
      ===========================
      To enable:
      1) Sign up at emailjs.com
      2) Create an email service and template
      3) Replace "YOUR_USER_ID", "YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID"
   */
   (function(){
     if(window.emailjs) {
       try { emailjs.init("YOUR_USER_ID"); } catch(e) { console.warn("EmailJS init failed", e); }
     }
   })();
   const contactForm = document.getElementById("contact-form");
   if(contactForm){
     contactForm.addEventListener("submit", (e) => {
       e.preventDefault();
       const btn = contactForm.querySelector("button[type='submit']");
       btn.disabled = true;
       btn.textContent = "Sending…";
   
       // send via EmailJS (form selector)
       if(window.emailjs){
         emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", "#contact-form")
           .then(() => {
             alert("✅ Message sent — thanks! I'll reply soon.");
             contactForm.reset();
             btn.disabled = false;
             btn.textContent = "Send";
           }, (err) => {
             console.error(err);
             alert("❌ Oops — something went wrong. Try again later.");
             btn.disabled = false;
             btn.textContent = "Send";
           });
       } else {
         // fallback: show success and reset (or you may disable)
         alert("⚠️ EmailJS not configured. Replace IDs in script.js to enable sending.");
         contactForm.reset();
         btn.disabled = false;
         btn.textContent = "Send";
       }
     });
   }
   
   /* ===========================
      GitHub: fetch recent public repos
      =========================== */
   (function loadRecentRepos(){
     const username = "brianmuigai2-stack"; // change if needed
     fetch(`https://api.github.com/users/${username}/repos?per_page=6&sort=updated`)
       .then(r => r.ok ? r.json() : Promise.reject(r.status))
       .then(list => {
         const parent = document.getElementById("recent-repos");
         if(!parent) return;
         list.forEach(repo => {
           const a = document.createElement("a");
           a.href = repo.html_url;
           a.target = "_blank";
           a.rel = "noopener noreferrer";
           a.className = "repo";
           a.innerHTML = `<strong>${repo.name}</strong><span>★ ${repo.stargazers_count}</span>`;
           parent.appendChild(a);
         });
       }).catch(err => {
         // silent fail (rate limits possible)
         console.warn("GitHub repos load failed:", err);
       });
   })();
   
   /* ===========================
      Smooth scroll for nav links
      =========================== */
   document.querySelectorAll(".nav a").forEach((link) => {
     link.addEventListener("click", (e) => {
       if (link.hash) {
         e.preventDefault();
         document.querySelector(link.hash).scrollIntoView({ behavior: "smooth" });
       }
     });
   });
   
   /* Small friendly console message for curious devs */
   console.log("%cHey dev 👋 — view sources at github.com/brianmuigai2-stack", "color:#008cff;font-weight:700;");
   