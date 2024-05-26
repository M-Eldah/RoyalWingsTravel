anime({
    targets: '.Logo',
    duration: 6000,
    scale: [0.95, 1],
    easing: 'easeInOutQuad',
    direction: 'alternate',
    loop: true
})
var t = 0;
function galleryScroll(target) {
    t = t + target;
    if (t < 0) { t = 8 }
    if (t > 8) { t = 0 }
    var g = document.getElementById('Gallery');
    var w = window.innerWidth;
    var myObject = {
        prop1: 0,
    }

    anime({
        targets: myObject,
        prop1: [g.scrollLeft, w * t],
        easing: 'easeInOutQuad',
        duration: 400,
        update: function () {
            g.scrollLeft = myObject.prop1;
        }
    });
}
