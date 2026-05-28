const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn.addEventListener('click', () => { mobileMenu.classList.toggle('hidden'); });
mobileMenu.querySelectorAll('a').forEach(link => { link.addEventListener('click', () => { mobileMenu.classList.add('hidden'); }); });
window.addEventListener('scroll', () => { if (!mobileMenu.classList.contains('hidden')) mobileMenu.classList.add('hidden'); });

document.querySelectorAll('.team-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
        this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.5), 0 0 40px rgba(139, 92, 246, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.08)';
        this.style.borderColor = 'rgba(139, 92, 246, 0.4)';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)';
        this.style.borderColor = 'rgba(139, 92, 246, 0.15)';
    });
});