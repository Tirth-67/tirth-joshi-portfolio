// Project Data
const projectsData = [
    {
        title: 'Next-Word Predictor (Advanced AI)',
        description: 'An advanced Python project that utilizes machine learning and natural language processing to intelligently predict the next words from a given paragraph. Trained on specialized datasets for high accuracy.',
        technologies: ['Python', 'TensorFlow', 'NLP', 'Machine Learning']
    },
    {
        title: 'Interactive Weather App',
        description: 'A beautiful, responsive weather application providing real-time forecasts. Built exclusively with HTML, CSS, and vanilla JavaScript. Features dynamic weather animations and location-based updates.',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Weather API']
    },
    {
        title: 'Smart Task Manager',
        description: 'A lightweight and intuitive task management tool with drag-and-drop functionality and local storage persistence. Designed with modern UI/UX principles to enhance daily productivity.',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage']
    }
];

// Open Modal
function openModal(index) {
    const modal = document.getElementById('projectModal');
    const project = projectsData[index];

    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDescription').textContent = project.description;

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
            linksContainer.innerHTML += `<a href="${project.githubLink}" target="_blank" class="modal-link-btn github-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> View Code
            </a>`;
        }
        if (project.liveLink) {
            linksContainer.innerHTML += `<a href="${project.liveLink}" target="_blank" class="modal-link-btn live-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg> Live Demo
            </a>`;
        }
    }

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close Modal When Clicking Outside
window.addEventListener('click', (event) => {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        closeModal();
    }
});

// Page Routing System
function navigateToPage(pageId) {
    document.querySelectorAll('.page-view').forEach(page => {
        page.classList.remove('active');
    });

    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Retrofit old scroll function
function scrollToSection(sectionId) {
    navigateToPage(sectionId);
}

// Navigation Links Routing
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('href').substring(1);
        navigateToPage(sectionId);
    });
});

// Scroll Animation for Cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all project cards
document.querySelectorAll('.project-card').forEach(card => {
    observer.observe(card);
});

// Contact Form Submission (Web3Forms)
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const form = document.getElementById('contactForm');
    const submitBtn = form.querySelector('.send-btn');
    const originalText = submitBtn.innerHTML;

    submitBtn.innerHTML = '<span>Sending... ⏳</span><span class="btn-icon"></span>';
    submitBtn.style.opacity = '0.7';
    submitBtn.style.cursor = 'not-allowed';

    const formData = new FormData(form);

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
    })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                submitBtn.innerHTML = '<span>✓ Message Sent!</span><span class="btn-icon">✨</span>';
                submitBtn.style.background = 'var(--primary-color)';
                submitBtn.style.color = '#000';
                form.reset();
            } else {
                submitBtn.innerHTML = '<span>❌ Error Sending</span>';
                console.log(response);
            }
        })
        .catch(error => {
            submitBtn.innerHTML = '<span>❌ Error Sending</span>';
            console.log(error);
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

// Hamburger Menu Toggle (Enhanced)
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');
const mobileOverlay = document.getElementById('mobileOverlay');

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

// Parallax Effect on Scroll
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const stars = document.querySelector('.stars');
    if (stars) {
        stars.style.transform = `translateY(${scrollY * 0.5}px)`;
    }
});

// Add animation delays to project cards
document.querySelectorAll('.project-card').forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// Skill bars animation on scroll
const skillsSection = document.querySelector('.skills');

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll('.skill-progress');
            bars.forEach(bar => {
                const targetWidth = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = targetWidth;
                }, 100);
            });
            skillsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

// Keyboard Navigation for Modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Theme Toggle Logic
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const savedTheme = localStorage.getItem('portfolio-theme');

if (savedTheme === 'light') {
    document.body.setAttribute('data-theme', 'light');
    toggleSwitch.checked = true;
} else {
    toggleSwitch.checked = false;
}

toggleSwitch.addEventListener('change', function (e) {
    if (e.target.checked) {
        document.body.setAttribute('data-theme', 'light');
        localStorage.setItem('portfolio-theme', 'light');
    } else {
        document.body.removeAttribute('data-theme');
        localStorage.setItem('portfolio-theme', 'dark');
    }
});

// Custom Cursor Logic
const cursor = document.querySelector('.custom-cursor');
const cursorGlow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', (e) => {
    if (cursor && cursorGlow) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    }
});

// Magnet Effect for interactive elements
const magnetElements = document.querySelectorAll('.cta-button, .send-btn, .social-circles a, .project-card, .method-card');

magnetElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        if (cursor) cursor.style.transform = 'scale(2)';
    });

    el.addEventListener('mouseleave', () => {
        el.style.transform = '';
        if (cursor) cursor.style.transform = '';
    });
});

console.log('🚀 Creative Portfolio Enhanced Successfully!');
