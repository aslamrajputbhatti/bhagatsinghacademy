document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    const menuButton = document.getElementById('menu-btn');
    const closeButton = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('a:not(.mobile-menu-call)') : [];

    const setMenu = (isOpen) => {
        if (!mobileMenu) return;
        mobileMenu.classList.toggle('open', isOpen);
        mobileMenu.setAttribute('aria-hidden', String(!isOpen));
        document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    menuButton?.addEventListener('click', () => setMenu(true));
    closeButton?.addEventListener('click', () => setMenu(false));
    mobileLinks.forEach((link) => link.addEventListener('click', () => setMenu(false)));

    const revealItems = document.querySelectorAll('.section, .trust-bar');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
    }, { threshold: 0.08 });
    revealItems.forEach((item) => revealObserver.observe(item));
});
