function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openBlog(domain) {
    let title, content;

    switch (domain) {
        case 'events':
            title = "Events Domain";
            content = "Details about upcoming events will be displayed here.";
            break;
        case 'marketing':
            title = "Marketing Domain";
            content = "Marketing strategies and insights will be shared here.";
            break;
        case 'tech':
            title = "Tech Domain";
            content = "Latest technology trends and discussions.";
            break;
        case 'creative':
            title = "Creative Domain";
            content = "Creative projects and ideas will be showcased here.";
            break;
        case 'finance':
            title = "Finance Domain";
            content = "Financial tips and investment strategies.";
            break;
        default:
            title = "Unknown Domain";
            content = "No content available.";
    }

    document.getElementById("blogTitle").innerText = title;
    document.getElementById("blogContent").innerText = content;
    document.getElementById("blogModal").style.display = "block";
}

function closeModal() {
    document.getElementById("blogModal").style.display = "none";
}

// Floating icons movement
document.addEventListener('mousemove', (event) => {
    const icons = document.querySelectorAll('.icon');
    icons.forEach((icon, index) => {
        icon.style.transform = `translate(${event.clientX * (index + 1) / 10}px, ${event.clientY * (index + 1) / 10}px)`;
    });
});

// Close the modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById("blogModal");
    if (event.target == modal) {
        closeModal();
    }
}
