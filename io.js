// const section1 = document.querySelector(".section1");
const sections = document.querySelectorAll('section');
const faders = document.querySelectorAll('.fade-in')
const sliders = document.querySelectorAll('.slide-in')
 

var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
var options;
if (width <= 1000) {
    options = {
        root:null,
        threshold:0,
        rootMargin:"-150px"
    };
}else{
    options = {
        root:null,
        threshold:0,
        rootMargin:"-150px"
    };
}


const appears = new IntersectionObserver((entries,observer)=>{
    entries.forEach(entry=>{
        if (entry.isIntersecting) {
            console.log(entry.target.id + " is showing" );
            entry.target.classList.add('appear')
            observer.unobserve(entry.target)
        }
    })
},options)

const slideappears = new IntersectionObserver((entries,observer)=>{
    entries.forEach(entry=>{
        if (entry.isIntersecting) {
            console.log(entry.target.id + " is showing" );
            entry.target.classList.add('appear')
            observer.unobserve(entry.target)
        }
    })
},options)

sliders.forEach(slider=>{
    slideappears.observe(slider)
})

faders.forEach(fader=>{
    appears.observe(fader);   
})