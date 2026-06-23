// Project Data
const projectsData = [
    {
        title: 'Portfolio Website',
        status: 'Completed',
        summary: 'My personal developer portfolio upgraded to a premium, recruiter-ready profile with strong visual design.',
        description: 'Redesigned personal space representing my skills as a CSE student. Built utilizing clean semantic markup, custom responsive CSS layouts, modern color palettes, CSS micro-animations, and subtle scroll revealing scripts. Fully responsive across phone, tablet, and desktop display viewports.',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
        githubLink: 'https://github.com/Tirth-67/tirth-joshi-portfolio',
        liveLink: 'https://tirthjoshi.netlify.app'
    },
    {
        title: 'Laundry Management System',
        status: 'In Progress',
        summary: 'A web-based system for booking laundry services, calculating service prices, and tracking order status.',
        description: 'A dedicated web utility meant to simplify laundry orders. It enables students or customers to book service time slots, calculate rates dynamically based on laundry type and weight, and verify status from order start to completion. Formulated with clear, practical frontend views.',
        technologies: ['HTML5', 'CSS3', 'JavaScript'],
        githubLink: null,
        liveLink: null
    },
    {
        title: 'Smart Task Manager',
        status: 'Completed',
        summary: 'Lightweight productivity tool with drag-and-drop mechanics and local storage persistence for dashboard status.',
        description: 'An interactive productivity dashboard enabling custom task prioritization and management. Includes drag-and-drop event logic to move items across status lists, dynamic addition/deletion UI controls, and local storage integration to retain task board contents on browser reloads.',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage'],
        githubLink: null,
        liveLink: null
    },
    {
        title: 'Interactive Weather App',
        status: 'Completed',
        summary: 'Real-time weather forecasting application presenting clean layout data and dynamic weather state visual animations.',
        description: 'A responsive weather dashboard client. It connects to open weather API endpoints using fetch scripts to extract location statistics, parses JSON replies to display details like temperature and wind speed, and changes background gradient states based on cloud coverage.',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Weather API'],
        githubLink: null,
        liveLink: null
    },
    {
        title: 'Next-Word Predictor',
        status: 'Completed',
        summary: 'Advanced Python model that predicts the next logical word from user input phrases, applying NLP techniques.',
        description: 'An artificial intelligence and NLP study application. Coded using advanced Python text processing pipelines and neural network models (LSTM/TensorFlow), this tool analyzes entered string sequences to estimate the next logical term in line. Trained on custom corpus texts.',
        technologies: ['Python', 'TensorFlow', 'NLP', 'Machine Learning'],
        githubLink: null,
        liveLink: null
    }
];

// Open Modal
function openModal(index) {
    const modal = document.getElementById('projectModal');
    const project = projectsData[index];

    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDescription').textContent = project.description;

    const statusBadge = document.getElementById('modalStatusBadge');
    if (statusBadge) {
        statusBadge.className = 'modal-status-badge ' + (
            project.status === 'Completed' ? 'completed' : 
            project.status === 'In Progress' ? 'in-progress' : 'coming-soon'
        );
        statusBadge.textContent = project.status;
    }

    const tagsContainer = document.getElementById('modalTags');
    tagsContainer.innerHTML = '';
    project.technologies.forEach(tech => {
        const tag = document.createElement('span');
        tag.className = 'tag';
        tag.textContent = tech;
        tagsContainer.appendChild(tag);
    });

    const linksContainer = document.getElementById('modalLinks');
    if (linksContainer) {
        linksContainer.innerHTML = '';
        if (project.githubLink) {
            linksContainer.innerHTML += `<a href="${project.githubLink}" target="_blank" rel="noopener" class="project-btn github-btn">
                Code <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>`;
        } else {
            linksContainer.innerHTML += `<button class="project-btn disabled-btn" disabled>Code Coming Soon</button>`;
        }
        if (project.liveLink) {
            linksContainer.innerHTML += `<a href="${project.liveLink}" target="_blank" rel="noopener" class="project-btn live-btn">
                Live Demo <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>`;
        } else {
            linksContainer.innerHTML += `<button class="project-btn disabled-btn" disabled>Demo Coming Soon</button>`;
        }
    }

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close Modal When Clicking Outside
window.addEventListener('click', (event) => {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        closeModal();
    }
});

// Keyboard Navigation for Modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Navigation Links Smooth Scroll Routing
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            const navbar = document.querySelector('.navbar');
            const navbarHeight = navbar ? navbar.offsetHeight : 80;
            const targetPosition = targetSection.offsetTop - navbarHeight + 10;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active Link state indicator on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let currentSectionId = 'home';
    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar ? navbar.offsetHeight : 80;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbarHeight - 20;
        if (window.scrollY >= sectionTop) {
            currentSectionId = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSectionId) {
            link.classList.add('active');
        }
    });
});

// Scroll Reveal Observer
const scrollReveals = document.querySelectorAll('.scroll-reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

scrollReveals.forEach(reveal => {
    revealObserver.observe(reveal);
});

// Contact Form Submission (Web3Forms)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const submitBtn = contactForm.querySelector('.send-btn');
        const originalText = submitBtn.innerHTML;

        submitBtn.innerHTML = '<span>Sending... ⏳</span><span class="btn-icon"></span>';
        submitBtn.style.opacity = '0.7';
        submitBtn.style.cursor = 'not-allowed';

        const formData = new FormData(contactForm);

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        })
            .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                    submitBtn.innerHTML = '<span>✓ Message Sent!</span><span class="btn-icon">✨</span>';
                    submitBtn.style.background = 'var(--accent-teal)';
                    submitBtn.style.color = '#ffffff';
                    contactForm.reset();
                } else {
                    submitBtn.innerHTML = '<span>❌ Error Sending</span>';
                    console.error(response);
                }
            })
            .catch(error => {
                submitBtn.innerHTML = '<span>❌ Error Sending</span>';
                console.error(error);
            })
            .finally(() => {
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.background = '';
                    submitBtn.style.color = '';
                    submitBtn.style.opacity = '1';
                    submitBtn.style.cursor = 'pointer';
                }, 3000);
            });
    });
}

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');
const mobileOverlay = document.getElementById('mobileOverlay');

if (hamburger && navMenu && mobileOverlay) {
    function toggleMenu() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        mobileOverlay.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
    }

    hamburger.addEventListener('click', toggleMenu);
    mobileOverlay.addEventListener('click', toggleMenu);

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
}

// Theme Toggle Logic
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const savedTheme = localStorage.getItem('portfolio-theme');

if (savedTheme === 'light') {
    document.body.setAttribute('data-theme', 'light');
    if (toggleSwitch) toggleSwitch.checked = true;
} else {
    document.body.removeAttribute('data-theme');
    if (toggleSwitch) toggleSwitch.checked = false;
}

if (toggleSwitch) {
    toggleSwitch.addEventListener('change', function (e) {
        if (e.target.checked) {
            document.body.setAttribute('data-theme', 'light');
            localStorage.setItem('portfolio-theme', 'light');
        } else {
            document.body.removeAttribute('data-theme');
            localStorage.setItem('portfolio-theme', 'dark');
        }
    });
}

// Custom Cursor Positioning
const cursor = document.querySelector('.custom-cursor');
const cursorGlow = document.querySelector('.cursor-glow');

if (cursor && cursorGlow) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    });
}

// Magnet Hover Effect (desktop/fine-pointer only)
if (window.matchMedia('(pointer: fine)').matches) {
    const magnetElements = document.querySelectorAll('.cta-button, .send-btn, .social-icon-link, .project-card, .contact-info-card');

    magnetElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
            if (cursor) cursor.style.transform = 'translate(-50%, -50%) scale(1.6)';
        });

        el.addEventListener('mouseleave', () => {
            el.style.transform = '';
            if (cursor) cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });
}

console.log('🚀 Premium Recruiter-Ready Portfolio Active!');
