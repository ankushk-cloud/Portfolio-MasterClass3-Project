# 🌐 Personal Portfolio Website

A clean, fully responsive personal portfolio website built with pure HTML, CSS, and JavaScript — no frameworks, no libraries, no build tools. Just the three core languages of the web, working together. This project was developed step-by-step across four phases in a web development masterclass.

---

## 📁 Project Structure

The project has three files:

- **index.html** — Contains the entire page structure and all the written content. Every section of the website lives here.
- **style.css** — Handles everything visual: colors, fonts, spacing, layout, animations, dark mode, and how the site looks on different screen sizes.
- **script.js** — Makes the website interactive. It handles the dark mode toggle, mobile menu, smooth scrolling, loading project cards, and contact form validation.

---

## 🏗️ How It Was Built (The Four Phases)

This project was not built all at once. It followed a structured four-phase approach, which is a great way to learn because you build on top of what you already have.

**Phase 1 — Structure (HTML)**
The first step was writing the HTML. This means laying out all the sections of the page in the correct order — the navigation bar, the hero section, the about section, the projects section, the contact form, and the footer. At this stage, the page had no styling at all. It looked plain, but the structure was solid.

**Phase 2 — Styling (CSS)**
Once the structure was in place, the design was applied. This includes the color palette, Google Fonts, spacing, shadows, hover effects, and the overall look and feel of every section.

**Phase 3 — Responsiveness (CSS Media Queries)**
The site was then made to work on all screen sizes — phones, tablets, and desktops. This involved writing media queries that adjust the layout at different viewport widths. The hamburger menu for mobile was also added in this phase.

**Phase 4 — Interactivity (JavaScript)**
Finally, JavaScript was added to bring the site to life. This phase introduced the dark mode toggle, a working hamburger menu, smooth scroll navigation, dynamically generated project cards, and a validated contact form.

---

## 📄 index.html — The Page Explained

The HTML file is organized into six clearly commented sections.

### Navigation Bar
The navigation sits at the very top of the page and stays fixed there as you scroll (this is called a "sticky" nav). It contains the brand name/logo on the left, navigation links in the middle, and two buttons on the right — a hamburger icon for mobile screens and a dark mode toggle. The hamburger icon is built from three simple spans, which CSS and JavaScript animate into an X shape when the menu is open.

### Hero Section
This is the first thing a visitor sees — the big, impactful introduction. It has a gradient blue background, a large heading with the developer's name highlighted in a bright accent color, a short tagline, and a call-to-action button that takes the visitor down to the projects section.

### About Section
This section is split into two columns. The left side contains a short personal bio explaining the developer's background and interests. The right side contains a list of skills. On smaller screens, these two columns automatically stack on top of each other.

### Projects Section
This is a grid of project cards. Each card shows the project name, a short description, technology tags, and two buttons — one for a live demo and one for the source code. The interesting thing here is that unlike the other sections, the cards are not hardcoded in the HTML. They are generated automatically by JavaScript from a list defined in script.js. This makes it very easy to add or remove projects later.

### Contact Section
This section has a simple form with three fields: full name, email address, and a message. The form uses custom JavaScript validation instead of relying on the browser's default validation, which gives full control over the error messages and the user experience.

### Footer
A minimal footer with a copyright line and links to GitHub and LinkedIn.

---

## 🎨 style.css — The Design System Explained

### Design Tokens (CSS Variables)
Rather than writing color values and font names throughout the file, all of them are defined once at the top using CSS custom properties (also called variables). This means if you want to change the primary color, you change it in one place and it updates everywhere on the page automatically. The same approach is used for shadows, border radius, and transition speed.

### Fonts
Two Google Fonts are imported and used strategically. **Inter** is used for all body text, labels, and buttons because it is highly readable at small sizes. **Poppins** is used for headings and the nav brand because its bold weights create strong visual impact.

### Full-Width Sections with Constrained Content
Three sections — About, Contact, and Projects — have full-width background colors that go edge to edge. But the actual content inside them needs to be centered and limited in width so it doesn't stretch too wide on large screens. This is handled by giving the sections themselves `max-width: 100%` (so the background spans the screen), and then constraining their child elements to a maximum of 1100px and centering them with auto margins.

### Visual Effects
Several subtle effects give the site a polished, professional feel. Nav links have an animated underline that grows from left to right on hover. Section headings have a short decorative blue bar beneath them. Skills list items have a blue dot bullet created with CSS rather than an actual image or emoji. Project cards lift up slightly when hovered. The CTA button has a colored glow around it.

### Responsive Breakpoints
Three breakpoints define how the layout adapts to different devices. At 900px and below (tablets), the hero section becomes slightly shorter and the About columns stack vertically. At 600px and below (phones), the hamburger menu appears and the regular nav links are hidden, the hero fills the full screen height, and projects display in a single column. At 400px and below (very small phones), project buttons also stack vertically.

### Dark Mode
Dark mode is entirely CSS-driven. When JavaScript adds the class "dark" to the body element, a set of CSS overrides kicks in that replaces the light background, surface, text, and border colors with dark equivalents. Because everything uses CSS variables, the whole page switches automatically. Only a few elements with hardcoded background colors (like project image placeholders and tag pills) need their own specific dark mode overrides.

---

## ⚙️ script.js — The JavaScript Features Explained

### Dark Mode Toggle
When the user clicks the dark mode button, JavaScript adds or removes a "dark" class on the body element. It also updates the button label to reflect the current state. The user's preference is saved in localStorage, which means if they close the tab and come back later, the site remembers and restores their chosen theme automatically.

### Hamburger Mobile Menu
On mobile screens, the regular nav links are hidden and a hamburger icon appears instead. Clicking it toggles an "open" class on both the button and the nav list. The CSS handles the visual — the three bars animate into an X, and the nav slides in from the left as a full-screen overlay. While the menu is open, background scrolling is disabled so the experience feels like a proper mobile menu. Clicking any link inside the menu closes it automatically.

### Smooth Scrolling
Every link on the page that points to a section (like the nav links and the CTA button) has been given smooth scrolling behavior. When clicked, instead of jumping instantly to the section, the browser smoothly animates the scroll. The code also accounts for the sticky header height, so the section heading isn't hidden behind the nav bar when you arrive at it.

### Dynamic Project Cards
Instead of writing each project card directly in the HTML, all project information is stored as a JavaScript array. Each project is an object with a title, description, tags, a live URL, and a code URL. When the page loads, JavaScript loops through this array and builds each card from scratch, then injects them all into the projects section. To add a new project, you just add a new item to the array — no HTML editing needed.

### Contact Form Validation
When the form is submitted, JavaScript checks all three fields before allowing it to go through. The name field must not be empty. The email must follow a valid format (checked using a regular expression pattern). The message must be at least 10 characters long. If any field fails, a red error message appears beneath it. The errors are also cleared in real time as the user types. When all fields are valid and the form is submitted successfully, the button turns green with a confirmation message, and then the form resets after three seconds.

### Scroll-Based Navigation Shadow
As the user scrolls down the page, the navigation bar gains a slightly stronger drop shadow. This gives it a sense of depth and reinforces that it is "floating" above the page content. When scrolled back to the top, the shadow fades back to its default subtle state.

---

## 🚀 How to Run It

There is nothing to install or configure. Simply open the `index.html` file in any web browser and the site will work immediately. If you are using VS Code, the recommended way is to use the **Live Server** extension, which auto-refreshes the browser whenever you save a file.

---

## ✏️ How to Customize It

- To change the name shown on the site, update the text in the hero heading and the footer in `index.html`.
- To change the bio or skills, edit the about section in `index.html`.
- To add or edit projects, update the projects array in `script.js`.
- To update your GitHub or LinkedIn links, edit the footer links in `index.html`.
- To change the color theme, update the CSS variable values at the top of `style.css`.

---

## 🛠️ Built With

- **HTML5** — Semantic page structure
- **CSS3** — Custom properties, Flexbox, CSS Grid, responsive media queries, animations
- **Vanilla JavaScript (ES6+)** — DOM manipulation, localStorage, event listeners
- **Google Fonts** — Inter and Poppins
