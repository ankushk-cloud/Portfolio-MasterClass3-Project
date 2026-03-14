// const darkToggleBtn = document.getElementById('dark-mode-toggle')

// (function initDarkMode() {
//     if(localStorage.getItem('theme') === 'dark') {
//         document.body.classList.add('dark');
//         darkToggleBtn.textContent = 'Light Mode'
//     }
// })();

// darkToggleBtn.addEventListener('click', () => {
//     const isDark = document.body.classList.toggle('dark');
//     darkToggleBtn.textContent = isDark ? 'Light Mode' : 'Dark Mode';
//     localStorage.setItem('theme', isDark ? 'dark' : 'light')
// });

// const hamburger = document.getElementById('hamburger');
// const navLinks = document.querySelector(".nav-click")
// hamburger.addEventListener('click', () => {
//     hamburger.classList.toggle('open')
//     navLinks.classList.contains('open')

//     document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden': '';
// })

// navLinks.querySelectorAll('a').forEach(link => {
//     link.addEventListener('click', () => {
//         hamburger.classList.remove('open')
//         navLinks.classList.remove('open')
//         document.body.style.overflow = '';
//     })
// })

let add = (n1, n2) => {
    console.log(n1 + n2) 
}

add(12, 5)