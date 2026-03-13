function toggleVideo(btn) {
const content = btn.nextElementSibling;
const isOpen = content.classList.contains('open');

document.querySelectorAll('.accordion-content.open').forEach(el => {
    el.classList.remove('open');
    el.style.maxHeight = '0';
    el.previousElementSibling.classList.remove('active');
    const vid = el.querySelector('video');
    const icon = el.previousElementSibling.querySelector('.play-icon svg');
    icon.innerHTML = "<svg viewBox=\"0 0 24 24\"><polygon points=\"5,3 19,12 5,21\"/></svg>";
});

if (!isOpen) {
    content.classList.add('open');
    content.style.maxHeight = content.scrollHeight + 'px';
    btn.classList.add('active');
    const icon = btn.querySelector('.play-icon svg');
    icon.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 640\"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill=\"rgb(255, 255, 255)\" d=\"M176 96C149.5 96 128 117.5 128 144L128 496C128 522.5 149.5 544 176 544L240 544C266.5 544 288 522.5 288 496L288 144C288 117.5 266.5 96 240 96L176 96zM400 96C373.5 96 352 117.5 352 144L352 496C352 522.5 373.5 544 400 544L464 544C490.5 544 512 522.5 512 496L512 144C512 117.5 490.5 96 464 96L400 96z\"/></svg>"

        const vid = content.querySelector('video');
        if (vid) {
            vid.currentTime = 0;
            vid.play();
        }

    }
}

function copyDiscord() {
    navigator.clipboard.writeText('rioxyofficiel').then(() => {
        const toast = document.getElementById('toast');
        toast.textContent = 'Copied: rioxyofficiel';
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2200);
    });
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));