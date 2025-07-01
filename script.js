function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openBlog(domain) {
    // Logic to open the blog for the selected domain
    alert(`Opening blog for ${domain} domain.`);
}

// Floating icons movement
document.addEventListener('mousemove', (event) => {
    const icons = document.querySelectorAll('.icon');
    icons.forEach((icon, index) => {
        icon.style.transform = `translate(${event.clientX * (index + 1) / 10}px, ${event.clientY * (index + 1) / 10}px)`;
    });
});