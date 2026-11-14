// Navigation is native anchor navigation; JavaScript only marks the current section.
const sectionLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
const sections = sectionLinks.map(link => document.querySelector(link.hash)).filter(Boolean);

function updateCurrentSection() {
    let current = sections[0];
    for (const section of sections) {
        if (section.getBoundingClientRect().top <= 160) current = section;
    }
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        current = sections[sections.length - 1];
    }
    for (const link of sectionLinks) {
        if (current && link.hash === `#${current.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
    }
}

let scrollScheduled = false;
window.addEventListener('scroll', () => {
    if (scrollScheduled) return;
    scrollScheduled = true;
    window.requestAnimationFrame(() => {
        updateCurrentSection();
        scrollScheduled = false;
    });
}, { passive: true });
window.addEventListener('resize', updateCurrentSection);
window.addEventListener('load', updateCurrentSection);
updateCurrentSection();
