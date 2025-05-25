const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var loader = document.querySelector('#loader')
setTimeout(function(){
    loader.style.top = '-100%'
},3000)