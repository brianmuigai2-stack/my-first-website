# Brian Muigai — Developer Portfolio

>  A clean, modern, and responsive portfolio website showcasing my projects, skills, and contact information.  
> Built with **HTML**, **CSS**, and **JavaScript** — simple, fast, and easy to deploy anywhere!

---


## Project Structure

| File | Description |
|------|--------------|
| `index.html` | Main structure of the website (hero, skills, projects, contact) |
| `style.css` | Styling and responsive layout with dark/light mode |
| `script.js` | Interactive elements, animations, and dynamic features |
| `profile.jpg` | Personal profile image (replace with yours) |
| `resume.pdf` | Downloadable resume |
| `projects/` | Folder containing project images or screenshots |
| `icons/` | (Optional) Folder for SVG or PNG icons |

---

## Features

✅ Fully responsive design (works on desktop, tablet, and mobile)  
🌗 Light & Dark theme toggle (remembers user preference)  
⌨️ Typing animation on hero section  
📊 Animated skill progress bars  
🖼️ Interactive project cards with hover overlays  
💬 Contact form with **EmailJS** integration (no backend needed)  
🐙 Live GitHub projects fetch & stats  
🔗 Social media links (GitHub, LinkedIn, Twitter, WhatsApp)  
🧠 Accessible and optimized for performance  

---

##  Technologies Used

- **HTML5**
- **CSS3 (Flexbox, Grid, Animations)**
- **JavaScript (ES6+)**
- **EmailJS** — send contact messages without backend
- **GitHub API** — display recent repositories
- **Netlify / Vercel / GitHub Pages** — for hosting

---

##  Getting Started

### Clone the repository
git clone https://github.com/brianmuigai2-stack/portfolio.git
cd portfolio

# Then open your browser at http://localhost:8000
Or use VS Code Live Server extension.

##  Deployment Options
 GitHub Pages
Push your repo to GitHub.

Go to Settings → Pages.

Choose branch: main and folder: /root.

Save — your site will be live at:
👉 https://<your-username>.github.io/<repo-name>/

###  Netlify / Vercel
Drag & drop the project folder into Netlify.

Or connect your GitHub repo to Vercel — deploys automatically.

###  Setting up EmailJS (for the contact form)
Go to EmailJS.com and create an account.

Create a new email service (like Gmail).

Add a template with variables:

from_name, user_email, message
Copy your User ID, Service ID, and Template ID.

In your script.js, replace:

js

emailjs.init("YOUR_USER_ID");
emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", "#contact-form");
Test on a live URL — EmailJS won’t work on local file://.

### Customization Checklist
 Replace profile.jpg with your photo

 Update name, title, and description in index.html

 Add your real resume.pdf

 Insert your EmailJS IDs in script.js

 Add your GitHub username in the GitHub stats section

 Replace Open Graph meta tags with your own info for social sharing

 Optimize images (use .webp format for better performance)

### Tips & Tricks
Use loading="lazy" for large images

Test Lighthouse performance in Chrome DevTools

Add rel="noopener noreferrer" for all external links

Compress your CSS & JS for faster loading

Use alt attributes for accessibility

## Troubleshooting
### Icons not showing?
Check your folder paths — use a local server instead of opening via file://.

### Email form not working?
Test on a live domain — EmailJS blocks local origins.

### GitHub repos not loading?
You may have hit a GitHub API rate limit (wait a few minutes or authenticate if needed).

## Star History

<a href="https://www.star-history.com/#brianmuigai2-stack/my-first-website&type=date&legend=top-left">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=brianmuigai2-stack/my-first-website&type=date&theme=dark&legend=top-left" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=brianmuigai2-stack/my-first-website&type=date&legend=top-left" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=brianmuigai2-stack/my-first-website&type=date&legend=top-left" />
 </picture>
</a>

##  Credits
Icons — Simple Icons / inline SVG

## Contact form — EmailJS

## GitHub stats — Vercel’s GitHub Readme Stats

## Built by Brian Muigai

## License
This project is licensed under the MIT License — feel free to use, modify, and share!
Add a LICENSE file with the MIT text to your repository.

## Connect with Me
### Portfolio: brianmuigai2-stack.github.io/portfolio
### LinkedIn: linkedin.com/in/brianmuigai
### GitHub: github.com/brianmuigai2-stack
### WhatsApp: +254 707528414
### Email: brian11613bmw@gmail.com

## ⭐ If you like this portfolio, give it a star on GitHub! ⭐



