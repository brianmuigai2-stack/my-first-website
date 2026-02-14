# Brian Muigai — Professional Developer Portfolio

> A modern, animated, and responsive portfolio website showcasing my projects, skills, and professional experience as a Software Engineering Intern.  
> Built with **HTML**, **CSS**, and **JavaScript** — featuring cinema-quality animations, interactive elements, and professional design!

---

## 🌟 Key Features

### **✨ Advanced Animations & Interactions**
- **Swipe-in Scroll Animations**: Sections and elements slide in from alternating directions
- **Staggered Element Reveals**: Professional timing for cards, skills, and achievements
- **Parallax Effects**: Multi-layer depth animations in hero section
- **Interactive Card Tilts**: 3D mouse-responsive hover effects
- **Smooth Scroll Navigation**: Seamless scrolling with active state indicators
- **Scroll Progress Bar**: Visual indicator showing page progress

### **🎯 Professional Content Sections**
- **Enhanced Hero Section**: Professional positioning with tech stack badges
- **About Section**: Personal introduction with animated statistics
- **Resume Modal**: Complete professional resume with detailed experience
- **Skills Section**: Animated progress bars with comprehensive breakdown
- **Featured Projects**: Showcase of top projects with live demos
- **Services Section**: Professional service offerings
- **Contact Form**: EmailJS integration for direct communication

### **🎨 Design & User Experience**
- **Multiple Theme Options**: Light, Dark, Ocean, Forest, Sunset, Galaxy
- **Fully Responsive**: Optimized for desktop, tablet, and mobile
- **Compact Professional Layout**: Balanced spacing with edge breathing room
- **Typography Controls**: Adjustable font sizes for accessibility
- **Loading Animations**: Smooth image and content loading effects
- **Performance Optimized**: 60fps animations with requestAnimationFrame

### **🔧 Technical Features**
- **No Build Process**: Pure HTML/CSS/JavaScript - deploy anywhere
- **GitHub Integration**: Live repository fetching and display
- **EmailJS Contact Form**: Backend-free contact functionality
- **SEO Optimized**: Meta tags, semantic HTML, structured data
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support
- **Cross-browser Compatible**: Works on all modern browsers

---

## 📁 Project Structure

| File/Folder | Description |
|-------------|-------------|
| `index.html` | Main structure with all sections and modal |
| `style.css` | Comprehensive styling with animations and themes |
| `script.js` | Interactive features, animations, and dynamic content |
| `Yobi.jpg` | Professional profile photo |
| `Brian Muigai Resume (1).docx` | Resume file for modal viewing |
| `projects/` | Project screenshots and assets |
| `App.png`, `/hacker-loop.mp4` | Visual assets for projects |

---

## 🛠 Technologies Used

### **Frontend**
- **HTML5** - Semantic structure and accessibility
- **CSS3** - Advanced animations, Grid, Flexbox, custom properties
- **JavaScript (ES6+)** - Modern features, async/await, modules

### **Features & APIs**
- **EmailJS** - Contact form without backend
- **GitHub API** - Repository fetching and stats
- **Intersection Observer API** - Scroll-triggered animations
- **RequestAnimationFrame** - Smooth 60fps animations
- **LocalStorage** - Theme and preference persistence

### **Deployment**
- **GitHub Pages** - Free hosting
- **Vercel** - Zero-config deployment
- **Netlify** - Drag-and-drop hosting
- **Any static host** - No build process required

---

## 🚀 Getting Started

### **Quick Start**
```bash
# Clone the repository
git clone https://github.com/brianmuigai2-stack/my-first-website.git
cd my-first-website

# Start a local server
python -m http.server 8000
# or use Node.js: npx serve .
# or use VS Code Live Server extension
```

Open your browser and navigate to `http://localhost:8000`

---

## 📱 Deployment Options

### **GitHub Pages (Recommended)**
1. Push to GitHub repository
2. Go to Settings → Pages
3. Select source: Deploy from a branch
4. Choose branch: `main` and folder: `/root`
5. Your site will be live at: `https://brianmuigai2-stack.github.io/my-first-website/`

### **Vercel (Automatic)**
1. Connect your GitHub repository to Vercel
2. Vercel automatically detects and deploys your site
3. Get a custom domain: `your-site.vercel.app`

### **Netlify (Drag & Drop)**
1. Drag the entire project folder to Netlify
2. Your site is instantly live with a random URL
3. Optional: Connect to GitHub for auto-deploys

---

## ⚙️ Customization Guide

### **Personal Information**
```html
<!-- Update in index.html -->
<h1 data-translate="hero-title">Hey, I'm Brian 👋</h1>
<p class="hero-eyebrow">Software Engineering Intern | Frontend-Focused Developer</p>
```

### **Resume Content**
```html
<!-- Update resume modal content -->
<div class="resume-section">
  <h1 class="resume-name">Your Name</h1>
  <p class="resume-title">Your Professional Title</p>
  <!-- Add your experience, skills, projects -->
</div>
```

### **Contact Information**
```javascript
// Update in script.js
const contactInfo = {
  email: 'your-email@example.com',
  phone: '+254 XXX XXX XXX',
  github: 'your-username',
  linkedin: 'your-profile-url'
};
```

### **Theme Colors**
```css
:root {
  --accent: #4F46E5; /* Change to your brand color */
  --glow-color: #6366F1; /* Adjust glow effect */
}
```

---

## 📧 EmailJS Setup

1. **Create EmailJS Account**: [EmailJS.com](https://www.emailjs.com/)
2. **Add Email Service**: Connect your Gmail or other email provider
3. **Create Email Template**: Include variables: `from_name`, `user_email`, `message`
4. **Get Your IDs**: User ID, Service ID, Template ID
5. **Update Script**: Replace placeholders in `script.js`

```javascript
// Update these values in script.js
emailjs.init("YOUR_USER_ID");
emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", "#contact-form");
```

**Important**: EmailJS only works on live domains, not `file://` protocol.

---

## 🎨 Animation Customization

### **Adjust Animation Speed**
```css
.page-section {
  transition: opacity 0.8s ease, transform 0.8s ease; /* Adjust duration */
}
```

### **Change Swipe Direction**
```css
.page-section:nth-child(even) {
  transform: translateX(100px); /* Change to translateY for vertical swipe */
}
```

### **Modify Stagger Delays**
```javascript
staggerElements.forEach((el, index) => {
  setTimeout(() => {
    el.classList.add('visible');
  }, index * 150); // Adjust delay multiplier
});
```

---

## 📊 Performance Optimization

### **Image Optimization**
- Use WebP format for better compression
- Add `loading="lazy"` for below-fold images
- Compress images to under 500KB each

### **Animation Performance**
- Uses `transform` and `opacity` for GPU acceleration
- Implements `requestAnimationFrame` for smooth 60fps
- Throttled scroll handlers for better performance

### **SEO Best Practices**
- Semantic HTML5 structure
- Meta tags for social sharing
- Structured data for search engines
- Alt text for all images

---

## 🔧 Troubleshooting

### **Common Issues**

**Animations not working?**
- Check browser console for JavaScript errors
- Ensure you're using a local server, not `file://`
- Verify CSS transitions are not being overridden

**Contact form not sending?**
- Test on a live domain (EmailJS blocks local origins)
- Verify your EmailJS IDs are correct
- Check EmailJS dashboard for error logs

**GitHub repos not loading?**
- May have hit GitHub API rate limit (wait a few minutes)
- Check if username is correct in the script
- Verify network connection

**Theme not persisting?**
- Check if LocalStorage is enabled in browser
- Look for console errors related to theme switching

---

## 📱 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 90+ | ✅ Full |
| Firefox | 88+ | ✅ Full |
| Safari | 14+ | ✅ Full |
| Edge | 90+ | ✅ Full |
| Mobile | iOS 14+, Android 10+ | ✅ Full |

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - feel free to use, modify, and share!

---

## 🌟 Connect With Me

**Portfolio**: [brianmuigai2-stack.github.io/my-first-website](https://brianmuigai2-stack.github.io/my-first-website/)

**LinkedIn**: [linkedin.com/in/brian-muigai-197210382](https://linkedin.com/in/brian-muigai-197210382/)

**GitHub**: [github.com/brianmuigai2-stack](https://github.com/brianmuigai2-stack)

**Email**: [brian11613bmw@gmail.com](mailto:brian11613bmw@gmail.com)

**Phone**: [+254 707528414](tel:+254707528414)

---

## ⭐ Show Some Love

If you find this portfolio helpful or inspiring, please give it a star on GitHub!

[![Star History Chart](https://api.star-history.com/svg?repos=brianmuigai2-stack/my-first-website&type=date&theme=dark)](https://www.star-history.com/#brianmuigai2-stack/my-first-website&type=date)

---

*Built with ❤️ by Brian Muigai - Software Engineering Intern*
