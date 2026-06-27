// ============================================================
//  TIRTH JOSHI — PORTFOLIO JAVASCRIPT
//  Premium animations, interactions, and dynamic features
// ============================================================

// ---- Project Data ----
const projectsData = [
    {
        title: 'Portfolio Website',
        status: 'Completed',
        summary: 'My personal developer portfolio — a clean, responsive showcase deployed on Vercel with dark/light theme support.',
        description: 'Redesigned personal space representing my skills as a CSE student. Built utilizing clean semantic markup, custom responsive CSS layouts, modern color palettes, CSS micro-animations, and subtle scroll revealing scripts. Fully responsive across phone, tablet, and desktop display viewports.',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
        githubLink: 'https://github.com/Tirth-67/tirth-joshi-portfolio',
        liveLink: 'https://tirth-joshi-portfolio.vercel.app'
    },
    {
        title: 'Laundry Management System',
        status: 'In Progress',
        summary: 'A web-based system for booking laundry services, calculating service prices, and tracking order status.',
        description: 'A dedicated web utility meant to simplify laundry orders. It enables students or customers to book service time slots, calculate rates dynamically based on laundry type and weight, and verify status from order start to completion. Formulated with clear, practical frontend views.',
        technologies: ['HTML5', 'CSS3', 'JavaScript'],
        githubLink: null,
        liveLink: null
    }
];

// ---- Utility: Check prefers-reduced-motion ----
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ============================================================
//  1. CODE CARD TYPING ANIMATION
// ============================================================
(function initCodeTyping() {
    const codeBlock = document.getElementById('codeBlock');
    const terminalStatus = document.getElementById('terminalStatus');
    if (!codeBlock || !terminalStatus) return;

    // Save original HTML and clear it
    const finalHTML = codeBlock.innerHTML;

    // Code structure for typing — each segment has text and optional class
    const codeSegments = [
        { text: 'public class', cls: 'code-keyword' },
        { text: ' ' },
        { text: 'Developer', cls: 'code-class' },
        { text: ' {\n' },
        { text: '    ' },
        { text: 'public static void', cls: 'code-keyword' },
        { text: ' ' },
        { text: 'main', cls: 'code-method' },
        { text: '(String[] args) {\n' },
        { text: '        String name = ' },
        { text: '"Tirth Joshi"', cls: 'code-string' },
        { text: ';\n' },
        { text: '        String[] skills = {\n' },
        { text: '            ' },
        { text: '"Web Development"', cls: 'code-string' },
        { text: ',\n' },
        { text: '            ' },
        { text: '"Java Programming"', cls: 'code-string' },
        { text: ',\n' },
        { text: '            ' },
        { text: '"DSA & Algorithms"', cls: 'code-string' },
        { text: '\n        };\n' },
        { text: '        \n' },
        { text: '        ' },
        { text: 'boolean', cls: 'code-keyword' },
        { text: ' readyToGrow = ' },
        { text: 'true', cls: 'code-keyword' },
        { text: ';\n' },
        { text: '        ' },
        { text: 'if', cls: 'code-keyword' },
        { text: ' (readyToGrow) {\n' },
        { text: '            System.out.println(' },
        { text: '"Ready to build!"', cls: 'code-string' },
        { text: ');\n' },
        { text: '        }\n' },
        { text: '    }\n' },
        { text: '}' }
    ];

    if (prefersReducedMotion) {
        // Show final code immediately
        codeBlock.innerHTML = finalHTML;
        terminalStatus.textContent = '✓ Compilation Successful';
        terminalStatus.classList.add('success');
        return;
    }

    // Clear and start typing
    codeBlock.innerHTML = '';
    const cursor = document.createElement('span');
    cursor.className = 'typing-cursor';

    let segIndex = 0;
    let charIndex = 0;
    let currentSpan = null;

    function typeNextChar() {
        if (segIndex >= codeSegments.length) {
            // Typing complete — remove cursor and update status
            if (cursor.parentNode) cursor.remove();
            setTimeout(() => {
                terminalStatus.textContent = '✓ Compilation Successful';
                terminalStatus.classList.add('success');
                document.querySelector('.code-card')?.classList.add('compiled');
            }, 400);
            return;
        }

        const segment = codeSegments[segIndex];

        // Create span for new segment
        if (charIndex === 0) {
            if (segment.cls) {
                currentSpan = document.createElement('span');
                currentSpan.className = segment.cls;
                codeBlock.appendChild(currentSpan);
            } else {
                currentSpan = null;
            }
        }

        const char = segment.text[charIndex];
        const textNode = document.createTextNode(char);

        if (currentSpan) {
            currentSpan.appendChild(textNode);
        } else {
            codeBlock.appendChild(textNode);
        }

        // Append cursor after the current position
        if (cursor.parentNode) cursor.remove();
        if (currentSpan) {
            currentSpan.after(cursor);
        } else {
            codeBlock.appendChild(cursor);
        }

        charIndex++;

        if (charIndex >= segment.text.length) {
            segIndex++;
            charIndex = 0;
        }

        // Variable speed: faster for spaces/newlines, slower for visible chars
        const speed = (char === ' ' || char === '\n') ? 12 : 25;
        setTimeout(typeNextChar, speed);
    }

    // Start typing after a brief delay for page load
    codeBlock.appendChild(cursor);
    setTimeout(typeNextChar, 800);
})();


// ============================================================
//  2. HERO TYPEWRITER SUBTITLE
// ============================================================
(function initTypewriter() {
    const el = document.getElementById('typewriterText');
    if (!el) return;

    const phrases = [
        'Frontend Developer',
        'Java & DSA Enthusiast',
        'CSE Student at Parul University',
        'Building for the Web'
    ];

    if (prefersReducedMotion) {
        el.textContent = phrases[0];
        el.classList.remove('typewriter-text');
        return;
    }

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let pauseTime = 0;

    function tick() {
        const current = phrases[phraseIndex];

        if (!isDeleting) {
            el.textContent = current.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === current.length) {
                pauseTime = 2000; // Pause before deleting
                isDeleting = true;
            } else {
                pauseTime = 60 + Math.random() * 40; // Typing speed with slight randomness
            }
        } else {
            el.textContent = current.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                pauseTime = 400; // Pause before typing next
            } else {
                pauseTime = 30; // Deleting speed
            }
        }

        setTimeout(tick, pauseTime);
    }

    setTimeout(tick, 1200); // Start after hero animations
})();


// ============================================================
//  3. STAGGERED SCROLL-REVEAL OBSERVER
// ============================================================
(function initScrollReveal() {
    // Section-level reveals
    const scrollReveals = document.querySelectorAll('.scroll-reveal');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');

                // Trigger child staggered reveals
                const items = entry.target.querySelectorAll('.reveal-item');
                items.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('revealed');
                    }, index * 120); // 120ms stagger between items
                });

                sectionObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -60px 0px' });

    scrollReveals.forEach(reveal => {
        sectionObserver.observe(reveal);
    });
})();


// ============================================================
//  4. FLOATING PARTICLE SYSTEM (Hero Section)
// ============================================================
(function initParticles() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas || prefersReducedMotion) return;

    // Only on desktop
    if (window.innerWidth < 768) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animFrameId;

    function resize() {
        const hero = canvas.parentElement;
        canvas.width = hero.offsetWidth;
        canvas.height = hero.offsetHeight;
    }

    function createParticles() {
        particles = [];
        const count = Math.min(Math.floor(canvas.width * canvas.height / 18000), 60);
        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 1.5 + 0.5,
                speedX: (Math.random() - 0.5) * 0.3,
                speedY: (Math.random() - 0.5) * 0.3 - 0.15, // Slight upward drift
                opacity: Math.random() * 0.4 + 0.1
            });
        }
    }

    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const isLight = document.body.getAttribute('data-theme') === 'light';
        const color = isLight ? '79, 70, 229' : '99, 102, 241';

        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${color}, ${p.opacity})`;
            ctx.fill();

            // Move
            p.x += p.speedX;
            p.y += p.speedY;

            // Wrap around edges
            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;
        });

        animFrameId = requestAnimationFrame(drawParticles);
    }

    resize();
    createParticles();
    drawParticles();

    window.addEventListener('resize', () => {
        resize();
        createParticles();
    });

    // Pause when not visible (performance)
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            cancelAnimationFrame(animFrameId);
        } else {
            drawParticles();
        }
    });
})();


// ============================================================
//  5. NAVBAR SCROLL EFFECT
// ============================================================
(function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                if (window.scrollY > 80) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
                ticking = false;
            });
            ticking = true;
        }
    });
})();


// ============================================================
//  6. BACK TO TOP BUTTON
// ============================================================
(function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
})();


// ============================================================
//  7. TOAST NOTIFICATION SYSTEM
// ============================================================
function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    const iconSVG = type === 'success'
        ? '<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>'
        : '<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>';

    toast.innerHTML = `${iconSVG}<span>${message}</span>`;
    container.appendChild(toast);

    // Auto-dismiss after 4s
    setTimeout(() => {
        toast.classList.add('removing');
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}


// ============================================================
//  8. PROJECT MODAL
// ============================================================
function openModal(index) {
    const modal = document.getElementById('projectModal');
    const project = projectsData[index];

    if (!project) return;

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


// ============================================================
//  9. NAVIGATION — SMOOTH SCROLL + ACTIVE LINK
// ============================================================
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


// ============================================================
//  10. CONTACT FORM SUBMISSION (Web3Forms + Toast)
// ============================================================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const submitBtn = contactForm.querySelector('.send-btn');
        const originalHTML = submitBtn.innerHTML;

        // Show loading state
        submitBtn.innerHTML = '<span>Sending...</span><div class="btn-spinner"></div>';
        submitBtn.classList.add('loading');

        const formData = new FormData(contactForm);

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        })
            .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                    showToast('Message sent successfully! I\'ll get back to you soon.', 'success');
                    contactForm.reset();
                } else {
                    showToast('Something went wrong. Please try again.', 'error');
                    console.error(response);
                }
            })
            .catch(error => {
                showToast('Network error. Please check your connection.', 'error');
                console.error(error);
            })
            .finally(() => {
                submitBtn.innerHTML = originalHTML;
                submitBtn.classList.remove('loading');
            });
    });
}


// ============================================================
//  11. HAMBURGER MENU TOGGLE
// ============================================================
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


// ============================================================
//  12. THEME TOGGLE LOGIC
// ============================================================
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


// ============================================================
//  13. CUSTOM CURSOR POSITIONING
// ============================================================
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


// ============================================================
//  14. MAGNET HOVER EFFECT (Desktop only)
// ============================================================
if (window.matchMedia('(pointer: fine)').matches) {
    const magnetElements = document.querySelectorAll('.cta-button, .send-btn, .social-icon-link');

    magnetElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
            if (cursor) cursor.style.transform = 'translate(-50%, -50%) scale(1.6)';
        });

        el.addEventListener('mouseleave', () => {
            el.style.transform = '';
            if (cursor) cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });
}
