document.addEventListener('DOMContentLoaded', () => {
    const scrollButton = document.createElement('button');
    scrollButton.textContent = '↑';
    scrollButton.className = 'scroll-to-top';
    document.body.appendChild(scrollButton);

    scrollButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    });
});
