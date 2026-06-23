# 🚀 Premium Recruiter-Ready Portfolio

This directory contains the main web assets of the portfolio application. Fully upgraded to provide visual consistency, clean semantic layout structuring, and modern user interactions suited for professional engineering reviewers.

## 🔗 Live Site

**URL:** [https://tirthjoshi.netlify.app](https://tirthjoshi.netlify.app)
**Hosting Platform:** Netlify

---

## 📁 Source Assets

- `index.html` – Redesigned HTML structure. Contains accessibility improvements, modern fonts, sticky navbar layout, timeline grids, and inline SVGs.
- `style.css` – Premium stylesheet using obsidian color variables (`--dark-bg`, `--accent-gradient`), responsive flex containers, glassmorphism filters, theme switches, and mobile drawer transitions.
- `script.js` – Application coordinator containing the detailed project array (5 items), interactive modal triggers, navbar observer handlers, theme persistence storage, and Web3Forms submit feedback routines.
- `resume.pdf` – Developer's current professional curriculum vitae.

---

## 🛠️ Local Customization & Adjustments

### 1. Update Contact Information
Locate and edit these sections inside `index.html`:
- Web3Forms API Key: Edit the `<input type="hidden" name="access_key" value="YOUR-KEY">` value on line 286.
- Email: Email links on lines 81 and 243.
- Social Links: Lines 88-95, and 250-275.

### 2. Add New Projects
To include more projects, open `script.js` and push a new configuration object to the `projectsData` array at the top of the file:
```javascript
{
    title: 'Project Title',
    status: 'Completed / In Progress',
    summary: 'Brief description...',
    description: 'Detailed description for the modal display...',
    technologies: ['Tech 1', 'Tech 2'],
    githubLink: 'URL',
    liveLink: 'URL'
}
```

---

## 📝 Upgrades Completed Checklist

- [x] Responsive layout (Desktop, Tablet, Mobile)
- [x] Premium Obsidian and Indigo/Teal visual themes
- [x] Seamless sticky navigation and mobile drawer
- [x] Interactive Developer Java Code Preview Card
- [x] Scannable Education timeline card layout
- [x] Projects list (5 projects) with custom SVG icons (no broken images)
- [x] Separate "Currently Building" Laundry service banner
- [x] Why This Portfolio? recruiter aligning details card
- [x] Contact section with direct profile links and Web3Forms
- [x] Direct View and Download Resume actions for `resume.pdf`
- [x] Persistent theme choice in browser localStorage
