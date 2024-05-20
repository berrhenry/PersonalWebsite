const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() *30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
})

const scrollingContainer = document.querySelector('.scrolling-container');

scrollingContainer.addEventListener('scroll', reveal);

// window.addEventListener('scroll', reveal);

function reveal() {
    console.log('Scroll event triggered');
    var reveals = document.querySelectorAll('.reveal');
    console.log('Reveal elements:', reveals);
    
    for(var i = 0; i < reveals.length; i++) {
        
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
            console.log('Element revealed:', reveals[i]);
        } else {
            reveals[i].classList.remove('active');
        }
    }
}