
function toggleMenu() {
    const menuLinks = document.querySelector('.mobile-nav-links');
    menuLinks.classList.toggle('active');
}

document.addEventListener('click', function(event) {
    const menuIcon = document.querySelector('.menu-icon');
    const menuLinks = document.querySelector('.mobile-nav-links');
    
    if (!menuIcon.contains(event.target) && !menuLinks.contains(event.target)) {
        menuLinks.classList.remove('active');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});
