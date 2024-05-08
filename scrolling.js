var div = document.querySelector('.svg');
new simpleParallax(div);


var allProducts = document.querySelectorAll('.row img');
var delay = 0
allProducts.forEach(ele => {
    new simpleParallax(ele, {
        delay: delay,
        overflow: true,
        transition: 'cubic-bezier(0,0,0,1)'
    });
    delay += 1;
})