# Glambu Website - Deployment Guide

## Quick Start
Your Glambu Fashion Model Agency website is ready to deploy! The website has been fully transformed from the houseboat template.

## What's Included
```
glambu-website/
├── index.html          # Main website file (fully updated)
├── style.css           # Styling with pink/white theme
├── script.js           # JavaScript for interactivity
├── videos/             # Background video folder
│   └── 1.mp4          # Background video
├── img/               # Images folder (needs your photos)
└── CHANGES.md         # Complete list of changes
```

## Deployment Options

### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select main branch
5. Your site will be live at `https://yourusername.github.io/glambu-website/`

### Option 2: Netlify (Free)
1. Go to netlify.com
2. Drag and drop the glambu-website folder
3. Your site goes live instantly
4. Custom domain available

### Option 3: Vercel (Free)
1. Go to vercel.com
2. Import your folder
3. Deploy with one click
4. Automatic SSL and CDN

### Option 4: Traditional Web Hosting
1. Purchase hosting (Hostinger, Bluehost, SiteGround, etc.)
2. Upload files via FTP/cPanel File Manager
3. Upload to public_html or www directory
4. Access via your domain

## Pre-Deployment Checklist

### CRITICAL - Must Do:
- [ ] Replace images in `img/` folder with actual model photos
- [ ] Update background video in `videos/` folder
- [ ] Add real phone number (search for "+91 XXXX XXXXXX" in index.html)
- [ ] Verify email addresses (info@glambu.com, bookings@glambu.com)
- [ ] Test contact form functionality
- [ ] Update social media URLs (Facebook, LinkedIn)
- [ ] Add favicon (logo.jpeg)

### Recommended:
- [ ] Set up contact form backend (FormSpree, Netlify Forms, EmailJS)
- [ ] Add Google Analytics tracking code
- [ ] Compress images for faster loading
- [ ] Optimize/compress background video
- [ ] Add sitemap.xml
- [ ] Add robots.txt
- [ ] Set up SSL certificate (automatic with modern hosting)
- [ ] Test on mobile devices
- [ ] Test on different browsers

## Contact Form Setup

### Easy Option - FormSpree
1. Go to formspree.io
2. Create account
3. Create a form
4. Replace form action in index.html:
```html
<form action="https://formspree.io/f/YOUR-FORM-ID" method="POST" class="space-y-4">
```

### Easy Option - Netlify Forms (if using Netlify)
Just add `netlify` attribute to form:
```html
<form netlify name="contact" class="space-y-4">
```

## Custom Domain Setup
Most hosting providers offer easy domain connection:
1. Purchase domain (GoDaddy, Namecheap, Google Domains)
2. Point nameservers to your hosting
3. Wait 24-48 hours for DNS propagation

## Performance Tips
1. **Compress Images**: Use TinyPNG or Squoosh
2. **Video Optimization**: Convert to WebM format for smaller size
3. **Enable Caching**: Most hosts enable this by default
4. **Use CDN**: Cloudflare (free) can speed up global access

## SEO Checklist
- [ ] Unique page title (✅ Already done)
- [ ] Meta description (✅ Already done)
- [ ] Heading structure (H1, H2, H3) (✅ Already done)
- [ ] Image alt tags (Update with actual photo descriptions)
- [ ] Responsive design (✅ Already done)
- [ ] Fast loading speed (Optimize images & video)
- [ ] Submit to Google Search Console
- [ ] Submit to Bing Webmaster Tools

## Browser Compatibility
Website uses modern web standards and works on:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS/Android)

## Support & Maintenance
- Update model photos regularly
- Keep contact information current
- Monitor contact form submissions
- Update portfolio with new work
- Test website monthly

## Security
- Use HTTPS (automatic with modern hosting)
- Keep contact form protected from spam (add reCAPTCHA if needed)
- Regular backups (most hosts do this automatically)

## Quick Deploy Command (if using Git)
```bash
git init
git add .
git commit -m "Initial Glambu website"
git remote add origin https://github.com/yourusername/glambu-website.git
git push -u origin main
```

## Need Help?
Common issues:
- **Images not showing**: Check file paths are correct
- **Video not playing**: Ensure video file exists in videos folder
- **Form not working**: Set up backend (FormSpree/Netlify)
- **Slow loading**: Compress images and video

## Your Website is Ready! 🎉
Simply upload these files to any web hosting and your Glambu Fashion Model Agency website will be live!
