/* ============================================================
   PORTFOLIO WEBSITE – script.js
   Phase 4: Interactive Logic
   ============================================================

   Features:
   1. Dark Mode Toggle
   2. Hamburger Mobile Menu
   3. Smooth Scrolling via nav links
   4. Dynamic Project Cards (generated from an array)
   5. Contact Form Validation
   ============================================================ */

/* ------------------------------------------------------------
   1. DARK MODE TOGGLE
   Adds / removes the class "dark" on <body>.
   All colour changes are handled in style.css (body.dark {...})
   Persists the user's preference with localStorage.
   ------------------------------------------------------------ */
const darkToggleBtn = document.getElementById('dark-mode-toggle');

// On page load: restore saved preference
(function initDarkMode() {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    darkToggleBtn.textContent = 'Light Mode';
  }
})();

darkToggleBtn.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');

  darkToggleBtn.textContent = isDark ? 'Light Mode' : 'Dark Mode';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

/* ------------------------------------------------------------
   2. HAMBURGER MOBILE MENU
   Toggles .open on both #hamburger and .nav-links.
   Closes the menu automatically when a nav link is clicked.
   ------------------------------------------------------------ */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
  // Prevent the page from scrolling while the menu is open
  document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
});

// Close menu when any nav link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ------------------------------------------------------------
   3. SMOOTH SCROLLING
   The CSS rule html { scroll-behavior: smooth } already handles
   this for most browsers. The JS below provides a fallback and
   also offsets the scroll position so the sticky nav doesn't
   cover the section heading.
   ------------------------------------------------------------ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    // Ignore bare "#" links
    if (targetId === '#') return;

    const targetEl = document.querySelector(targetId);
    if (!targetEl) return;

    e.preventDefault();

    const navHeight = document.querySelector('header').offsetHeight;
    const targetTop = targetEl.getBoundingClientRect().top + window.scrollY - navHeight;

    window.scrollTo({ top: targetTop, behavior: 'smooth' });
  });
});

/* ------------------------------------------------------------
   4. DYNAMIC PROJECT CARDS
   Edit the `projects` array below to add / remove projects.
   Each object can have: title, description, liveUrl, codeUrl, tags
   The gallery HTML is cleared and rebuilt automatically.
   ------------------------------------------------------------ */
const projects = [
  {
    title:       'Portfolio Website',
    description: 'This very site! Built from scratch using HTML, CSS, and JavaScript across four phases — structure, styling, responsiveness, and interactivity.',
    liveUrl:     '#',
    codeUrl:     'https://github.com/Ankush2107/Masterclass-3-Project',
    tags:        ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title:       'Responsive Landing Page',
    description: 'A fully responsive product landing page with a hero section, feature grid, pricing table, and animated CTA button built with CSS Grid.',
    liveUrl:     '#',
    codeUrl:     '#',
    tags:        ['HTML', 'CSS', 'Responsive'],
  },
  {
    title:       'JavaScript Quiz App',
    description: 'An interactive multi-choice quiz app that dynamically renders questions, tracks the score, shows a timer countdown, and displays a results screen.',
    liveUrl:     '#',
    codeUrl:     '#',
    tags:        ['JavaScript', 'DOM', 'Array'],
  },
];

/**
 * createProjectCard(project)
 * Receives one project object and returns a complete <article> element.
 */
function createProjectCard(project) {
  // Tags HTML
  const tagsHTML = project.tags
    .map(tag => `<span class="project-tag">${tag}</span>`)
    .join('');

  const card = document.createElement('article');
  card.className = 'project-card';

  card.innerHTML = `
    <div class="project-image-placeholder" aria-hidden="true">
      ${project.title}
    </div>
    <div class="project-info">
      <h3 class="project-title">${project.title}</h3>
      <div class="project-tags">${tagsHTML}</div>
      <p class="project-description">${project.description}</p>
      <div class="project-links">
        <a href="${project.liveUrl}" class="btn-live" target="_blank" rel="noopener noreferrer">Live Demo</a>
        <a href="${project.codeUrl}" class="btn-code" target="_blank" rel="noopener noreferrer">View Code</a>
      </div>
    </div>
  `;

  return card;
}

// Render all project cards into the gallery
function renderProjects() {
  const gallery = document.getElementById('projects-gallery');
  if (!gallery) return;

  gallery.innerHTML = ''; // Clear existing placeholder cards

  projects.forEach(project => {
    gallery.appendChild(createProjectCard(project));
  });
}

renderProjects();

/* ------------------------------------------------------------
   5. CONTACT FORM VALIDATION
   Validates: Name (not empty), Email (valid format), Message (≥10 chars).
   Shows red error messages under each field on failure.
   Shows a success banner on a valid submission.
   ------------------------------------------------------------ */
const contactForm  = document.getElementById('contact-form');
const nameInput    = document.getElementById('name');
const emailInput   = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError    = document.getElementById('name-error');
const emailError   = document.getElementById('email-error');
const messageError = document.getElementById('message-error');

/** Simple email regex */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Show an error message under a field */
function showError(field, errorSpan, message) {
  field.style.borderColor = '#dc2626';
  errorSpan.textContent   = message;
}

/** Clear an error from a field */
function clearError(field, errorSpan) {
  field.style.borderColor = '';
  errorSpan.textContent   = '';
}

/** Validate all fields; returns true if the form is valid */
function validateForm() {
  let isValid = true;

  // Name
  if (nameInput.value.trim() === '') {
    showError(nameInput, nameError, '⚠ Please enter your full name.');
    isValid = false;
  } else {
    clearError(nameInput, nameError);
  }

  // Email
  if (emailInput.value.trim() === '') {
    showError(emailInput, emailError, '⚠ Please enter your email address.');
    isValid = false;
  } else if (!EMAIL_REGEX.test(emailInput.value.trim())) {
    showError(emailInput, emailError, '⚠ Please enter a valid email (e.g. you@example.com).');
    isValid = false;
  } else {
    clearError(emailInput, emailError);
  }

  // Message
  if (messageInput.value.trim().length < 10) {
    showError(messageInput, messageError, '⚠ Message must be at least 10 characters long.');
    isValid = false;
  } else {
    clearError(messageInput, messageError);
  }

  return isValid;
}

// Clear errors in real-time as the user types
[nameInput, emailInput, messageInput].forEach(input => {
  input.addEventListener('input', () => {
    // Re-validate only the field the user is currently editing
    if (input === nameInput)    clearError(nameInput,    nameError);
    if (input === emailInput)   clearError(emailInput,   emailError);
    if (input === messageInput) clearError(messageInput, messageError);
  });
});

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  if (!validateForm()) return;

  // Show success feedback
  const submitBtn = document.getElementById('submit-btn');
  submitBtn.textContent    = '✓ Message Sent!';
  submitBtn.style.background = '#16a34a';
  submitBtn.disabled       = true;

  // Reset form after a short delay
  setTimeout(() => {
    contactForm.reset();
    submitBtn.textContent    = 'Send Message';
    submitBtn.style.background = '';
    submitBtn.disabled       = false;
  }, 3000);
});

/* ------------------------------------------------------------
   6. SCROLL-BASED NAV SHADOW
   Adds a deeper shadow to the header when the user has scrolled
   down, giving a clear visual separation from the content.
   ------------------------------------------------------------ */
const siteHeader = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    siteHeader.style.boxShadow = '0 4px 24px rgba(0,0,0,0.15)';
  } else {
    siteHeader.style.boxShadow = '';
  }
}, { passive: true });
