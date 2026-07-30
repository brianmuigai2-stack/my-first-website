/* ===========================
   PAGE TRANSITIONS
   =========================== */
  const pageTransitionOverlay = document.querySelector('.page-transition-overlay');
  
  function showPageTransition() {
    pageTransitionOverlay.classList.add('active');
    setTimeout(() => {
      pageTransitionOverlay.classList.remove('active');
    }, 1500);
  }
  
  // Show transition on page load
  window.addEventListener('load', () => {
    setTimeout(() => {
      showPageTransition();
    }, 500);
  });
  
  // Handle navigation with transitions
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      if (link.hash) {
        e.preventDefault();
        const targetSection = document.querySelector(link.hash);
        if (targetSection) {
          showPageTransition();
          setTimeout(() => {
            targetSection.scrollIntoView({ behavior: 'smooth' });
          }, 800);
        }
      }
    });
  });
  
  /* ===========================
     FONT SIZE ADJUSTER
     =========================== */
  const fontButtons = document.querySelectorAll('.font-btn');
  const fontSizeLabel = document.querySelector('.font-size-label');
  let currentFontSize = 1;
  
  function updateFontSize(multiplier) {
    currentFontSize = Math.max(0.8, Math.min(1.4, currentFontSize + multiplier));
    document.documentElement.style.setProperty('--font-size-multiplier', currentFontSize);
    
    // Update label size
    const labelSize = 14 + (currentFontSize - 1) * 4;
    fontSizeLabel.style.fontSize = `${labelSize}px`;
    
    // Save to localStorage
    localStorage.setItem('fontSize', currentFontSize);
  }
  
  fontButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const size = btn.dataset.size;
      if (size === 'increase') {
        updateFontSize(0.1);
      } else {
        updateFontSize(-0.1);
      }
    });
  });
  
  // Load saved font size
  const savedFontSize = localStorage.getItem('fontSize');
  if (savedFontSize) {
    currentFontSize = parseFloat(savedFontSize);
    document.documentElement.style.setProperty('--font-size-multiplier', currentFontSize);
    const labelSize = 14 + (currentFontSize - 1) * 4;
    fontSizeLabel.style.fontSize = `${labelSize}px`;
  }
  
  /* ===========================
     THEME MANAGEMENT
     =========================== */
  const themeOptions = document.querySelectorAll('.theme-option');
  const themeToggleBtn = document.querySelector('.theme-toggle-btn');
  
  function applyTheme(themeName) {
    // Remove all theme classes
    document.body.classList.remove('light', 'dark', 'ocean', 'forest', 'sunset', 'galaxy');
    
    // Add the new theme class
    if (themeName !== 'light') {
      document.body.classList.add(themeName);
    }
    
    // Update active state
    themeOptions.forEach(option => {
      option.classList.remove('active');
      if (option.dataset.theme === themeName) {
        option.classList.add('active');
      }
    });
    
    // Save to localStorage
    localStorage.setItem('theme', themeName);
    
    // Update button icon
    updateThemeButton(themeName);
    
    // Fix hero text visibility
    setTimeout(fixHeroTextVisibility, 100);
  }
  
  function updateThemeButton(themeName) {
    const icons = {
      light: 'fa-sun',
      dark: 'fa-moon',
      ocean: 'fa-water',
      forest: 'fa-tree',
      sunset: 'fa-cloud-sun',
      galaxy: 'fa-star'
    };
    
    const icon = themeToggleBtn.querySelector('i');
    icon.className = `fas ${icons[themeName]}`;
  }
  
  function loadThemeFromStorage() {
    const saved = localStorage.getItem('theme') || 'light';
    applyTheme(saved);
  }
  
  // Theme option click handlers
  themeOptions.forEach(option => {
    option.addEventListener('click', () => {
      applyTheme(option.dataset.theme);
    });
  });
  
  // Initialize theme on load
  loadThemeFromStorage();
  
  /* ===========================
     HERO TEXT VISIBILITY FIX
     =========================== */
  function fixHeroTextVisibility() {
    const heroText = document.querySelector('.hero-text');
    const heroTitle = document.querySelector('.hero-text h1');
    const typedText = document.getElementById('typed');
    const btnPrimary = document.querySelector('.btn-primary');
    const btnOutline = document.querySelector('.btn-outline');
    
    const currentTheme = document.body.className;
    
    const themeColors = {
      'ocean': {
        text: '#ffffff',
        btnBg: '#4dd0e1',
        btnText: '#004d40',
        outlineBorder: '#4dd0e1',
        outlineText: '#4dd0e1'
      },
      'forest': {
        text: '#ffffff',
        btnBg: '#66bb6a',
        btnText: '#1b5e20',
        outlineBorder: '#66bb6a',
        outlineText: '#66bb6a'
      },
      'sunset': {
        text: '#ffffff',
        btnBg: '#ffb74d',
        btnText: '#e65100',
        outlineBorder: '#ffb74d',
        outlineText: '#ffb74d'
      },
      'galaxy': {
        text: '#ffffff',
        btnBg: '#ba68c8',
        btnText: '#4a148c',
        outlineBorder: '#ba68c8',
        outlineText: '#ba68c8'
      },
      'dark': {
        text: '#ffffff',
        btnBg: '#ffffff',
        btnText: '#007bff',
        outlineBorder: '#ffffff',
        outlineText: '#ffffff'
      },
      'light': {
        text: '#212529',
        btnBg: '#007bff',
        btnText: '#ffffff',
        outlineBorder: '#007bff',
        outlineText: '#007bff'
      }
    };
    
    const colors = themeColors[currentTheme] || themeColors['light'];
    
    // Apply colors with inline styles for maximum specificity
    if (heroText) heroText.style.color = colors.text;
    if (heroTitle) heroTitle.style.color = colors.text;
    if (typedText) typedText.style.color = colors.text;
    
    if (btnPrimary) {
      btnPrimary.style.backgroundColor = colors.btnBg;
      btnPrimary.style.color = colors.btnText;
    }
    
    if (btnOutline) {
      btnOutline.style.backgroundColor = 'transparent';
      btnOutline.style.color = colors.outlineText;
      btnOutline.style.border = `2px solid ${colors.outlineBorder}`;
    }
  }
  
  /* ===========================
     CUSTOM CURSOR
     =========================== */
  const cursor = document.querySelector('.cursor');
  const cursorFollower = document.querySelector('.cursor-follower');
  
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
      cursorFollower.style.left = e.clientX + 'px';
      cursorFollower.style.top = e.clientY + 'px';
    }, 100);
  });
  
  document.addEventListener('mousedown', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
    cursorFollower.style.transform = 'translate(-50%, -50%) scale(0.8)';
  });
  
  document.addEventListener('mouseup', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
  });
  
/* ===========================
      MOBILE MENU
      =========================== */
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('active') && 
        !navLinks.contains(e.target) && 
        !menuToggle.contains(e.target)) {
      navLinks.classList.remove('active');
      menuToggle.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  });

  // Close menu when clicking a link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuToggle.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
  });

  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      menuToggle.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  });
  
  /* ===========================
     TYPED HERO TEXT
     =========================== */
  const roles = [
    "Software Engineering student.",
    "Web developer.",
    "Problem solver.",
    "Open-source contributor."
  ];
  const typedEl = document.getElementById("typed");
  let ti = 0, ci = 0, deleting = false;
  
  function typeLoop() {
    if (!typedEl) return;
    const current = roles[ti];
    
    typedEl.textContent = current.slice(0, ci);
    if (!deleting) {
      ci++;
      if (ci > current.length) {
        deleting = true;
        setTimeout(typeLoop, 1200);
        return;
      }
    } else {
      ci--;
      if (ci < 0) {
        deleting = false;
        ti = (ti + 1) % roles.length;
        setTimeout(typeLoop, 300);
        return;
      }
    }
    setTimeout(typeLoop, deleting ? 40 : 80);
  }
  typeLoop();
  
  /* ===========================
     PARTICLES ANIMATION
     =========================== */
  function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    if (!particlesContainer) return;
    
    const particlesCount = 50;
    
    for (let i = 0; i < particlesCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      const size = Math.random() * 5 + 1;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const delay = Math.random() * 20;
      const duration = Math.random() * 20 + 10;
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.animationDelay = `${delay}s`;
      particle.style.animationDuration = `${duration}s`;
      
      particlesContainer.appendChild(particle);
    }
  }
  
  createParticles();
  
  /* ===========================
     ENHANCED SCROLL ANIMATIONS
     =========================== */
  const observerOptions = {
    threshold: 0.15, // Trigger earlier for better swipe effect
    rootMargin: '0px 0px -30px 0px' // Adjusted for earlier triggering
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        // Enhanced stagger animation for multiple elements
        const staggerElements = entry.target.querySelectorAll('.skill-item, .practice-item, .tech-group, .achievement, .service-card, .project-item, .building-card, .featured-card, .certificate-card');
        staggerElements.forEach((el, index) => {
          setTimeout(() => {
            el.classList.add('visible');
          }, index * 150); // Increased delay for more dramatic swipe effect
        });
        
        // Special handling for about section
        if (entry.target.querySelector('.about-text, .about-image')) {
          setTimeout(() => {
            entry.target.querySelector('.about-text')?.classList.add('visible');
          }, 200);
          
          setTimeout(() => {
            entry.target.querySelector('.about-image')?.classList.add('visible');
          }, 400);
        }
      }
    });
  }, observerOptions);
  
  // Observe all sections with enhanced timing
  document.querySelectorAll('.page-section').forEach((section, index) => {
    // Add initial delay for each section
    setTimeout(() => {
      observer.observe(section);
    }, index * 100);
  });
  
  // Enhanced smooth scroll behavior with offset
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offsetTop = target.offsetTop - 100; // Increased offset for better spacing
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
        
        // Add active state to navigation
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
        });
        this.classList.add('active');
      }
    });
});
  
  // Enhanced reveal animations for specific elements
  const revealElements = document.querySelectorAll('.resume-achievements .achievement, .featured-card, .building-card');
  revealElements.forEach((el, index) => {
    setTimeout(() => {
      observer.observe(el);
    }, index * 50);
  });
 
  /* ===========================
     SCROLL PROGRESS INDICATOR
     =========================== */
  const scrollProgressBar = document.querySelector('.scroll-progress-bar');
  const scrollProgressContainer = document.querySelector('.scroll-progress');
  
  function updateScrollProgress() {
    const scrollTop = window.pageYOffset;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollProgress = (scrollTop / scrollHeight) * 100;
    
    if (scrollProgressBar) {
      scrollProgressBar.style.width = scrollProgress + '%';
    }
    
    if (scrollProgressContainer) {
      scrollProgressContainer.style.opacity = scrollTop > 100 ? '1' : '0';
    }
  }
  
  window.addEventListener('scroll', updateScrollProgress, { passive: true });

  /* ===========================
     IMAGE LOADING ANIMATIONS
     =========================== */
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    if (img.complete) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', () => {
        img.classList.add('loaded');
      });
    }
  });

  /* ===========================
     MOUSE TILT EFFECT FOR CARDS
     =========================== */
  const cards = document.querySelectorAll('.service-card, .project-item, .featured-card, .building-card');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
  });
  
  /* ===========================
     COUNTER ANIMATION
     =========================== */
  const counters = document.querySelectorAll('.stat-number');
  const speed = 200;
  
  const countUp = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = target / speed;
      
      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(countUp, 10);
      } else {
        counter.innerText = target;
      }
    });
  };
  
  // Trigger counter animation when about section is visible
  const aboutSection = document.getElementById('about');
  const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        countUp();
        aboutObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  aboutObserver.observe(aboutSection);
  
  /* ===========================
     SKILL BARS
     =========================== */
  const skillBars = document.querySelectorAll(".bar");
  if ("IntersectionObserver" in window) {
    const skillObserver = new IntersectionObserver((entries, o) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const width = entry.target.dataset.width;
          entry.target.style.width = width + "%";
          o.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    skillBars.forEach(b => skillObserver.observe(b));
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
      document.querySelectorAll(".project-card-3d").forEach(card => {
        if (f === "all") {
          card.style.display = "";
          return;
        }
        const tags = (card.dataset.tags || "").split(" ").map(t => t.trim());
        card.style.display = tags.includes(f) ? "" : "none";
      });
    });
  });
  
  /* ===========================
     EMAILJS INITIALIZATION
     =========================== */
  document.addEventListener('DOMContentLoaded', function() {
    // Wait for EmailJS to load
    setTimeout(() => {
      if (window.emailjs) {
        try {
          // EmailJS v3 format with exact public key
          emailjs.init("Q-z5wzQPltV7tnUty");
          console.log("EmailJS v3 initialized successfully");
        } catch (e) {
          console.warn("EmailJS v3 init failed:", e);
          // Fallback to object format
          try {
            emailjs.init({
              publicKey: "Q-z5wzQPltV7tnUty"
            });
            console.log("EmailJS v3 object format initialized");
          } catch (e2) {
            console.warn("EmailJS object format failed:", e2);
          }
        }
      } else {
        console.warn("EmailJS not loaded - CDN may be blocked");
      }
    }, 2000); // Increased delay to ensure EmailJS loads
  });
  
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector("button[type='submit']");
      btn.disabled = true;
      btn.textContent = "Sending…";
  
      if (window.emailjs) {
        const templateParams = {
          from_name: contactForm.querySelector("input[name='user_name']").value,
          from_email: contactForm.querySelector("input[name='user_email']").value,
          message: contactForm.querySelector("textarea[name='message']").value,
          sent_date: new Date().toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          }),
          portfolio_url: "https://brianmuigai2-stack.github.io/my-first-website/"
        };
        emailjs.send("service_3qcsmah", "template_d2ydngr", templateParams)
          .then(() => {
            showNotification("✅ Message sent! I'll get back to you soon.", 'success');
            contactForm.reset();
          })
          .catch((error) => {
            console.error("EmailJS error:", error);
            showNotification("❌ Failed to send message. Please try again.", 'error');
          })
          .finally(() => {
            btn.disabled = false;
            btn.textContent = "Send Message";
          });
      } else {
        showNotification("❌ Email service not available. Please try again later.", 'error');
        btn.disabled = false;
        btn.textContent = "Send Message";
      }
    });
  }
  
  /* ===========================
     NEWSLETTER FORM
     =========================== */
  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterSuccess = document.getElementById('newsletter-success');
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('newsletter-email').value;
      
      // Simulate API call
      setTimeout(() => {
        newsletterSuccess.classList.add('show');
        newsletterForm.reset();
        
        setTimeout(() => {
          newsletterSuccess.classList.remove('show');
        }, 3000);
      }, 1000);
    });
  }
  
  /* ===========================
     LAZY LOADING IMAGES
     =========================== */
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });
  
  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
  
  /* ===========================
     Smooth Scroll
     =========================== */
  document.querySelectorAll(".hero-buttons a, .back-to-top a").forEach(link => {
    link.addEventListener("click", (e) => {
      if (link.hash) {
        e.preventDefault();
        document.querySelector(link.hash)?.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
  
  /* ===========================
     SCROLL TO TOP BUTTON
     =========================== */
  const backToTopButton = document.querySelector('.back-to-top a');
  
  function updateBackToTop() {
    if (backToTopButton) {
      const isVisible = window.scrollY > 300;
      backToTopButton.style.opacity = isVisible ? '1' : '0';
      backToTopButton.style.visibility = isVisible ? 'visible' : 'hidden';
    }
  }
  
  window.addEventListener('scroll', updateBackToTop, { passive: true });
  
  /* ===========================
     SEO CANONICAL URL FIX
     =========================== */
  function ensureCanonicalURL() {
    const currentURL = 'https://brianmuigai2-stack.github.io/my-first-website/';
    let canonical = document.querySelector('link[rel="canonical"]');
    
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    
    canonical.href = currentURL;
    
    // Also update Open Graph URL
    const ogURL = document.querySelector('meta[property="og:url"]');
    if (ogURL) {
      ogURL.content = currentURL;
    }
    
    // Update Twitter URL
    const twitterURL = document.querySelector('meta[property="twitter:url"]');
    if (twitterURL) {
      twitterURL.content = currentURL;
    }
  }
  
  /* ===========================
     GITHUB INTEGRATION
     =========================== */
  const githubUsername = 'brianmuigai2-stack';
  
  async function fetchGitHubData() {
    try {
      // Fetch user data
      const userResponse = await fetch(`https://api.github.com/users/${githubUsername}`);
      if (!userResponse.ok) throw new Error('User API blocked');
      const userData = await userResponse.json();
      
      // Fetch repositories
      const reposResponse = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=10`);
      if (!reposResponse.ok) throw new Error('Repos API blocked');
      const reposData = await reposResponse.json();
      
      // Update stats
      updateGitHubStats(userData, reposData);
      
      // Update projects with real data
      updateProjectsWithGitHubData(reposData);
      
    } catch (error) {
      // Silently fail - use default stats from HTML
      console.log('GitHub data using defaults:', error.message);
    }
  }
  
  function updateGitHubStats(userData, reposData) {
    // Update project count
    const projectCount = document.querySelector('[data-target="15"]');
    if (projectCount && userData.public_repos) {
      projectCount.setAttribute('data-target', userData.public_repos);
    }
    
    // Update commit count (approximate)
    const commitCount = document.querySelector('[data-target="500"]');
    if (commitCount) {
      const totalCommits = reposData.reduce((sum, repo) => sum + (repo.pushed_at ? 1 : 0), 0) * 10;
      commitCount.setAttribute('data-target', Math.min(totalCommits, 2000));
    }
    
    // Update technologies based on languages from repos
    const languages = new Set();
    reposData.forEach(repo => {
      if (repo.language) {
        languages.add(repo.language);
      }
    });
    
    const techCount = document.querySelector('[data-target="8"]');
    if (techCount) {
      techCount.setAttribute('data-target', languages.size);
    }
  }
  
  function updateProjectsWithGitHubData(reposData) {
    // Add real GitHub data to project cards
    const projectCards = document.querySelectorAll('.project-card-3d');
    
    reposData.slice(0, 5).forEach((repo, index) => {
      if (projectCards[index]) {
        const card = projectCards[index];
        
        // Update project links to use real GitHub URLs
        const links = card.querySelectorAll('.project-links a');
        if (links[1]) { // GitHub link
          links[1].href = repo.html_url;
        }
        
        // Add last updated info
        const lastUpdated = new Date(repo.updated_at).toLocaleDateString();
        const projectInfo = card.querySelector('.project-info p');
        if (projectInfo) {
          projectInfo.innerHTML += `<br><small>Last updated: ${lastUpdated}</small>`;
        }
        
        // Add stars count
        if (repo.stargazers_count > 0) {
          const projectInfo = card.querySelector('.project-info');
          const starsBadge = document.createElement('div');
          starsBadge.className = 'github-stars';
          starsBadge.innerHTML = `<i class="fas fa-star"></i> ${repo.stargazers_count}`;
          projectInfo.appendChild(starsBadge);
        }
      }
    });
  }
  
  // Add GitHub stars CSS
  const githubStyle = document.createElement('style');
  githubStyle.textContent = `
    .github-stars {
      position: absolute;
      top: 10px;
      right: 10px;
      background: var(--accent);
      color: white;
      padding: 4px 8px;
      border-radius: 12px;
      font-size: 0.8rem;
      font-weight: 600;
      z-index: 10;
    }
  `;
  document.head.appendChild(githubStyle);

/* ===========================
      NAVBAR SHRINK + ACTIVE LINK - COMBINED
      =========================== */
  const nav = document.querySelector('.nav');
  const sections = document.querySelectorAll('section[id]');
  const navLinkItems = document.querySelectorAll('.nav-link');

  function handleScroll() {
    const currentScroll = window.pageYOffset;
    
    // Navbar shrink
    if (currentScroll > 100) {
      nav.classList.add('shrunk');
    } else {
      nav.classList.remove('shrunk');
    }
    
    // Active link highlight
    const scrollPos = currentScroll + 150;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      
      if (scrollPos >= top && scrollPos < top + height) {
        navLinkItems.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // Native scroll handler with passive for better performance
  window.addEventListener('scroll', handleScroll, { passive: true });

  /* ===========================
      INITIALIZATION
      =========================== */
document.addEventListener('DOMContentLoaded', () => {
    // Remove existing service workers and cached assets so the site always loads fresh files.
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations()
        .then((registrations) => Promise.all(registrations.map((registration) => registration.unregister())))
        .catch((err) => {
          console.log('Service Worker cleanup failed:', err);
        });
    }

    if ('caches' in window) {
      caches.keys()
        .then((cacheNames) => Promise.all(cacheNames.map((cacheName) => caches.delete(cacheName))))
        .catch((err) => {
          console.log('Cache cleanup failed:', err);
        });
    }
    
    // Ensure canonical URL is correct
    ensureCanonicalURL();
    
    // Apply hero text fix on load
    fixHeroTextVisibility();
    
    // Update language on load
    const savedLanguage = localStorage.getItem('language') || 'en';
    updateLanguage(savedLanguage);
    
    // Initialize animations
    createParticles();
    
    // Load GitHub repos
    fetchGitHubData();
    
    // Add smooth scrolling behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
    
    // Add scroll animations
    const scrollObserverOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // Animate stat numbers when they come into view
          const statNumbers = entry.target.querySelectorAll('.stat-number');
          statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            if (!stat.classList.contains('animated')) {
              animateNumber(stat, 0, target, 2000);
              stat.classList.add('animated');
            }
          });
        }
      });
    }, scrollObserverOptions);
    
    // Observe all sections
    document.querySelectorAll('.page-section').forEach(section => {
      scrollObserver.observe(section);
    });
    
    function animateNumber(element, start, end, duration) {
      const startTime = performance.now();
      
      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = Math.floor(start + (end - start) * progress);
        element.textContent = current;
        
        if (progress < 1) {
          requestAnimationFrame(update);
        }
      }
      
      requestAnimationFrame(update);
    }
  });
  
/* ===========================
   CERTIFICATE FUNCTIONS
   =========================== */
function toggleCertificate() {
    const certificatePreview = document.getElementById('certificate-preview');
    if (certificatePreview.style.display === 'none' || certificatePreview.style.display === '') {
        certificatePreview.style.display = 'block';
    } else {
        certificatePreview.style.display = 'none';
    }
}

/* ===========================
   RESUME MODAL FUNCTIONS
   =========================== */
function openResumeModal() {
    const modal = document.getElementById('resume-modal');
    if (modal) {
        modal.style.display = 'block';
        // Prevent scrolling behind modal
        document.body.style.overflow = 'hidden';
    }
}

function closeResumeModal() {
    const modal = document.getElementById('resume-modal');
    if (modal) {
        modal.style.display = 'none';
        // Re-enable scrolling
        document.body.style.overflow = '';
    }
}

/* ===========================
   PERFORMANCE MONITORING
   =========================== */
function monitorPerformance() {
    // Track Core Web Vitals silently (no console output)
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          // Performance metrics tracked internally, not logged to console
          if (entry.entryType === 'layout-shift' && entry.value > 0.1) {
            // Could trigger alert for poor CLS if needed
          }
        });
      });
      
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
    }
  }
  
  // Initialize performance monitoring
  monitorPerformance();
  
  /* ===========================
     ANALYTICS
     =========================== */
  function initAnalytics() {
    // Google Analytics 4 (replace with your actual GA4 ID)
    if (typeof gtag !== 'undefined') {
      gtag('config', 'GA_MEASUREMENT_ID');
      
      // Track page views
      gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href
      });
      
      // Track theme changes
      document.querySelectorAll('.theme-option').forEach(btn => {
        btn.addEventListener('click', () => {
          gtag('event', 'theme_change', {
            theme_name: btn.dataset.theme
          });
        });
      });
      
      // Track language changes
      document.querySelectorAll('.lang-option').forEach(btn => {
        btn.addEventListener('click', () => {
          gtag('event', 'language_change', {
            language: btn.dataset.lang
          });
        });
      });
      
      // Track contact form submissions
      const contactForm = document.getElementById('contact-form');
      if (contactForm) {
        contactForm.addEventListener('submit', () => {
          gtag('event', 'form_submit', {
            event_category: 'engagement',
            event_label: 'contact_form'
          });
        });
      }
      
      // Track newsletter subscriptions
      const newsletterForm = document.getElementById('newsletter-form');
      if (newsletterForm) {
        newsletterForm.addEventListener('submit', () => {
          gtag('event', 'newsletter_subscribe', {
            event_category: 'engagement',
            event_label: 'newsletter_form'
          });
        });
      }
      
      // Track project clicks
      document.querySelectorAll('.project-links a').forEach(link => {
        link.addEventListener('click', () => {
          gtag('event', 'project_click', {
            event_category: 'engagement',
            event_label: link.getAttribute('aria-label') || 'project_link'
          });
        });
      });
    }
  }
  
  // Handle offline mode
  function handleOfflineMode() {
    // Handle external images that won't load offline
    const externalImages = document.querySelectorAll('img[src^="https://"]');
    externalImages.forEach(img => {
      img.addEventListener('error', function() {
        // Mark as offline - CSS will handle the styling
        this.dataset.offline = 'true';
      });
    });
    
    // Show offline notification
    function showOfflineNotification() {
      if (!navigator.onLine) {
        const notification = document.createElement('div');
        notification.id = 'offline-notification';
        notification.style.cssText = 'position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%); background: #ff9800; color: white; padding: 12px 24px; border-radius: 8px; z-index: 10000; font-size: 14px; box-shadow: 0 4px 12px rgba(0,0,0,0.3);';
        notification.innerHTML = '<i class="fas fa-wifi"></i> You are offline. Some features may be limited.';
        document.body.appendChild(notification);
        
        setTimeout(() => {
          notification.remove();
        }, 5000);
      }
    }
    
    window.addEventListener('online', () => {
      const notification = document.getElementById('offline-notification');
      if (notification) notification.remove();
      
      // Show online notification
      const onlineNotification = document.createElement('div');
      onlineNotification.id = 'online-notification';
      onlineNotification.style.cssText = 'position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%); background: #4caf50; color: white; padding: 12px 24px; border-radius: 8px; z-index: 10000; font-size: 14px; box-shadow: 0 4px 12px rgba(0,0,0,0.3);';
      onlineNotification.innerHTML = '<i class="fas fa-wifi"></i> You are back online!';
      document.body.appendChild(onlineNotification);
      
      setTimeout(() => {
        onlineNotification.remove();
      }, 3000);
    });
    
    window.addEventListener('offline', showOfflineNotification);
    
    // Check initial status
    if (!navigator.onLine) {
      showOfflineNotification();
    }
  }
  
  // Initialize offline handling
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', handleOfflineMode);
  } else {
    handleOfflineMode();
  }
  
  // Initialize analytics if available
  if (typeof gtag !== 'undefined') {
    initAnalytics();
  }

  /* ===========================
     CUSTOM NOTIFICATION SYSTEM
     =========================== */

  function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `custom-notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 15px 20px;
      background: ${type === 'success' ? '#4caf50' : type === 'error' ? '#f44336' : '#ff9800'};
      color: white;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      z-index: 10001;
      animation: slideInRight 0.3s ease;
      max-width: 300px;
      font-size: 14px;
    `;
    document.body.appendChild(notification);
    setTimeout(() => {
      notification.style.animation = 'slideOutRight 0.3s ease';
      setTimeout(() => document.body.removeChild(notification), 300);
    }, 3000);
  }

  const notificationStyle = document.createElement('style');
  notificationStyle.textContent = `
    @keyframes slideInRight {
      from { transform: translateX(400px); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOutRight {
      from { transform: translateX(0); opacity: 1; }
      to { transform: translateX(400px); opacity: 0; }
    }
  `;
  document.head.appendChild(notificationStyle);
  
  /* ===========================
     MUSIC PLAYER - IMPROVED VERSION
     =========================== */
  document.addEventListener('DOMContentLoaded', function() {
    const musicPlayer = document.getElementById('music-player');
    const musicToggle = document.getElementById('music-toggle');
    const playBtn = document.getElementById('play-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const volumeSlider = document.getElementById('volume-slider');
    const progressBar = document.querySelector('.progress');
    const backgroundMusic = document.getElementById('background-music');
    
    // Check if all elements exist
    if (!musicPlayer || !musicToggle || !playBtn || !backgroundMusic) {
      console.warn('Music player elements not found');
      return;
    }
    
    // Playlist with multiple reliable sources
    const playlist = [
      {
        title: "Ambient Vibes",
        artist: "Portfolio Experience",
        src: "./audio/music.mp3"
      // },
      // {
      //   title: "Creative Flow",
      //   artist: "Background Music",
      //   src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
      // },
      // {
      //   title: "Digital Dreams",
      //   artist: "Ambient Sounds",
      //   src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
       }
    ];
    
    let currentTrackIndex = 0;
    let isPlaying = false;
    let hasInteracted = false;
    
    // Initialize audio element
    backgroundMusic.preload = 'auto';
    backgroundMusic.volume = 0.3;
    
    // Load first track
    loadTrack(0);
    
    // Toggle music player visibility
    musicToggle.addEventListener('click', function() {
      musicPlayer.classList.toggle('active');
      hasInteracted = true;
      localStorage.setItem('musicPlayerInteracted', 'true');
      
      // Try to play music on first interaction
      if (!isPlaying && hasInteracted) {
        attemptPlay();
      }
    });
    
    // Play/Pause functionality
    playBtn.addEventListener('click', function(e) {
      e.stopPropagation(); // Prevent toggling the player
      hasInteracted = true;
      
      if (isPlaying) {
        backgroundMusic.pause();
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
        isPlaying = false;
      } else {
        attemptPlay();
      }
    });
    
    // Attempt to play with user interaction
    function attemptPlay() {
      const playPromise = backgroundMusic.play();
      
      if (playPromise !== undefined) {
        playPromise.then(() => {
          // Audio started playing successfully
          isPlaying = true;
          playBtn.innerHTML = '<i class="fas fa-pause"></i>';
          console.log('Music started playing');
        }).catch(error => {
          // Autoplay was prevented
          console.log('Autoplay prevented:', error);
          isPlaying = false;
          playBtn.innerHTML = '<i class="fas fa-play"></i>';
          
          // Show a message to the user
          showMusicHint();
        });
      }
    }
    
    // Show hint to user
    function showMusicHint() {
      const hint = document.createElement('div');
      hint.style.cssText = `                          
        position: fixed;
        bottom: 100px;
        right: 20px;
        background: rgba(0,0,0,0.8);
        color: white;
        padding: 10px 15px;
        border-radius: 5px;
        font-size: 14px;
        z-index: 10000;
        animation: fadeInOut 3s ease-in-out;
      `;
      hint.textContent = 'Click the play button to start music';
      document.body.appendChild(hint);
      
      setTimeout(() => {
        document.body.removeChild(hint);
      }, 3000);
    }
    
    // Previous track
    prevBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
      loadTrack(currentTrackIndex);
      if (isPlaying) {
        setTimeout(() => attemptPlay(), 100);
      }
    });
    
    // Next track
    nextBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
      loadTrack(currentTrackIndex);
      if (isPlaying) {
        setTimeout(() => attemptPlay(), 100);
      }
    });
    
    // Volume control
    volumeSlider.addEventListener('input', function(e) {
      e.stopPropagation();
      const volume = this.value / 100;
      backgroundMusic.volume = volume;
      localStorage.setItem('musicVolume', volume);
    });
    
    // Load saved volume
    const savedVolume = localStorage.getItem('musicVolume');
    if (savedVolume) {
      backgroundMusic.volume = parseFloat(savedVolume);
      volumeSlider.value = savedVolume * 100;
    }
    
    // Update progress bar
    backgroundMusic.addEventListener('timeupdate', function() {
      if (backgroundMusic.duration) {
        const progress = (backgroundMusic.currentTime / backgroundMusic.duration) * 100;
        progressBar.style.width = progress + '%';
      }
    });
    
    // Handle track end
    backgroundMusic.addEventListener('ended', function() {
      currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
      loadTrack(currentTrackIndex);
      if (isPlaying) {
        setTimeout(() => attemptPlay(), 100);
      }
    });
    
    // Handle audio errors
    backgroundMusic.addEventListener('error', function(e) {
      console.error('Audio error:', e);
      // Try next track
      currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
      loadTrack(currentTrackIndex);
    });
    
    // Load track function
    function loadTrack(index) {
      const track = playlist[index];
      backgroundMusic.src = track.src;
      document.querySelector('.music-title').textContent = track.title;
      document.querySelector('.music-artist').textContent = track.artist;
      progressBar.style.width = '0%';
      
      // Update play button
      if (isPlaying) {
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
      } else {
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
      }
    }
    
    // Check if user has previously interacted with music player
    const hasInteractedBefore = localStorage.getItem('musicPlayerInteracted');
    if (hasInteractedBefore === 'true') {
      // Auto-open the player if user has interacted before
      setTimeout(() => {
        musicPlayer.classList.add('active');
      }, 2000);
    }
    
    // Space bar control is disabled
    
    // Add click-to-flip functionality for project cards
    const projectCards = document.querySelectorAll('.project-card-3d');
    projectCards.forEach(card => {
      card.addEventListener('click', function(e) {
        // Prevent flip if clicking on links
        if (e.target.tagName === 'A' || e.target.closest('a')) {
          return;
        }
        
        // Toggle flip class
        this.classList.toggle('flipped');
        
        // Close other cards if you want only one open at a time
        projectCards.forEach(otherCard => {
          if (otherCard !== this) {
            otherCard.classList.remove('flipped');
          }
        });
      });
    });
    
    // Add visual feedback for loading
    backgroundMusic.addEventListener('loadstart', function() {
      playBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    });
    
    backgroundMusic.addEventListener('canplay', function() {
      if (!isPlaying) {
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
      }
    });
  });
  
  // Add CSS animation for hint
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeInOut {
      0% { opacity: 0; transform: translateY(10px); }
      20% { opacity: 1; transform: translateY(0); }
      80% { opacity: 1; transform: translateY(0); }
      100% { opacity: 0; transform: translateY(-10px); }
    }
  `;
  document.head.appendChild(style);

  /* ===========================
     RESUME MODAL FUNCTIONS
     =========================== */
  function openResumeModal() {
    const modal = document.getElementById('resume-modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeResumeModal() {
    const modal = document.getElementById('resume-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Close modal when clicking outside
  document.getElementById('resume-modal').addEventListener('click', function(e) {
    if (e.target === this) {
      closeResumeModal();
    }
  });

  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeResumeModal();
      closeCertificateModal();
    }
  });

  /* ===========================
     CERTIFICATE MODAL FUNCTIONS
     =========================== */
  function openCertificateModal(certificateFile) {
    const modal = document.getElementById('certificate-modal');
    const iframe = document.getElementById('certificate-frame');
    iframe.src = 'certificates/' + certificateFile;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCertificateModal() {
    const modal = document.getElementById('certificate-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function toggleCertificate() {
    const preview = document.getElementById('certificate-preview');
    if (preview.style.display === 'none') {
      preview.style.display = 'block';
    } else {
      preview.style.display = 'none';
    }
  }

  /* ===========================
     ENHANCED SKILL BARS ANIMATION
     =========================== */
  const enhancedSkillBars = document.querySelectorAll(".skill-progress");
  if ("IntersectionObserver" in window) {
    const enhancedSkillObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const width = entry.target.dataset.width;
          entry.target.style.setProperty('--skill-width', width + '%');
          entry.target.style.width = width + '%';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    enhancedSkillBars.forEach(bar => {
      // Set initial width to 0 for animation
      bar.style.width = '0%';
      enhancedSkillObserver.observe(bar);
    });
  } else {
    // Fallback for browsers without IntersectionObserver
    enhancedSkillBars.forEach(bar => {
      const width = bar.dataset.width;
      bar.style.width = width + '%';
    });
  }

  /* ===========================
     AOS INITIALIZATION
     =========================== */
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1000,
      once: false, // Changed from true to false to allow animations on both scroll directions
      offset: 100,
      mirror: true, // Enable animations on scroll up as well
      anchorPlacement: 'top-bottom'
    });
  }
