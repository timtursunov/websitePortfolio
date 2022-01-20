const carousels = document.querySelectorAll('.ticker p')
const movemenTimeline = gsap.timeline({
    repeat: -1
})    
movemenTimeline
    .set(carousels, {
        x:0
    })
    .to(carousels,{
        x: -400,
        duration: 6,
        ease: 'linear'
    })


let dateSpan = document.querySelector('.footer__date');
let timeText = document.querySelector('.footer__time')
let date = new Date();
let year = date.getFullYear();

dateSpan.innerHTML = year;
timeText.innerHTML = `${date.getHours()} ${date.getMinutes()} ${date.getSeconds()}`

