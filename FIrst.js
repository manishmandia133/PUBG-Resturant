// Wait for all content (images, video) to load before initializing Locomotive Scroll
// This ensures scroll height is calculated correctly for all sections
window.addEventListener('load', function () {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true,
        smartphone: { smooth: true },
        tablet: { smooth: true }
    });

    // Update scroll calculations after a short delay to ensure all images are rendered
    setTimeout(function () {
        scroll.update();
    }, 500);

    // Also update when any image loads late (e.g., from external CDN)
    document.querySelectorAll('img').forEach(function (img) {
        img.addEventListener('load', function () {
            scroll.update();
        });
    });
});

// Loader animation
var loader = document.querySelector('#loader');
setTimeout(function () {
    loader.style.top = '-100%';
}, 1500);