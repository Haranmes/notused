const parralaxes = document.querySelectorAll('.parralax');
addEventListener('scroll' , function() {
    let scrollOffset = window.scrollY;
    parralaxes.forEach(function(parralax) {
    parralax.style.backgroundPositionY = (scrollOffset - parralax.offsetTop) * 0.7  + "px"
    })
    
})

