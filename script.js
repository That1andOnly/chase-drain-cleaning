// Click ripple effect (feels interactive)
document.querySelectorAll('a').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});
