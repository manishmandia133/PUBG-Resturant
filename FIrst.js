// =============================================
// LOADER — Sundown-style sequential text reveal
// =============================================

var loader = document.querySelector('#loader');
var t1 = document.querySelector('#loader-text-1');
var t2 = document.querySelector('#loader-text-2');
var t3 = document.querySelector('#loader-text-3');

var tl = gsap.timeline();

tl.to(t1, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' })
.to(t1, { opacity: 0, y: -30, duration: 0.4, ease: 'power2.in', delay: 0.3 })
.to(t2, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' })
.to(t2, { opacity: 0, y: -30, duration: 0.4, ease: 'power2.in', delay: 0.3 })
.to(t3, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' })
.to(t3, { opacity: 0, y: -30, duration: 0.4, ease: 'power2.in', delay: 0.3 })
.to(loader, { top: '-100%', duration: 0.8, ease: 'power4.inOut' });

// =============================================
// LOCOMOTIVE SCROLL — Initialize after load
// =============================================

window.addEventListener('load', function () {
    var scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true,
        smartphone: { smooth: true },
        tablet: { smooth: true }
    });

    setTimeout(function () { scroll.update(); }, 800);

    document.querySelectorAll('img').forEach(function (img) {
        img.addEventListener('load', function () { scroll.update(); });
    });

    var video = document.querySelector('#video');
    if (video) {
        video.addEventListener('loadeddata', function () { scroll.update(); });
    }
});

// =============================================
// GSAP — Entrance animations
// =============================================

gsap.from('#center h1', { y: 80, opacity: 0, duration: 1, delay: 3.5, ease: 'power3.out' });
gsap.from('#left p', { y: 40, opacity: 0, duration: 0.8, delay: 3.7, ease: 'power3.out' });
gsap.from('#nav_part1 h4', { y: 20, opacity: 0, duration: 0.6, delay: 3.3, stagger: 0.1, ease: 'power2.out' });
gsap.from('.logo', { y: 20, opacity: 0, duration: 0.6, delay: 3.2, ease: 'power2.out' });

// =============================================
// MENU HOVER IMAGE — Fixed background image switcher
// =============================================

var page3 = document.querySelector('#page3');
var fixedImg = document.querySelector('#fixed-image');
var elems = document.querySelectorAll('.elem');

if (page3 && fixedImg) {
    page3.addEventListener('mouseenter', function() {
        fixedImg.style.display = 'block';
    });
    
    page3.addEventListener('mouseleave', function() {
        fixedImg.style.display = 'none';
    });

    elems.forEach(function (elem) {
        elem.addEventListener('mouseenter', function () {
            var imgSrc = elem.getAttribute('data-image');
            if (imgSrc) {
                fixedImg.style.backgroundImage = `url(${imgSrc})`;
            }
        });
    });
}