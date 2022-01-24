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
let nav = document.querySelector('.socials');
const scrollPercentage = document.querySelector('.progress-bar__number');
document.addEventListener('scroll', () => {
    const pixels = window.pageYOffset
    let limit = (window.pageYOffset + window.innerHeight) / document.body.scrollHeight * 100
    if (limit === 100) {
        scrollPercentage.innerHTML = `socials`
        nav.style.opacity = 1;
        nav.style.zIndex = 3
    } else {
        scrollPercentage.innerHTML = `${pixels.toFixed()}px`
        nav.style.opacity = 0;
        nav.style.zIndex = -1
    }
})
// render

const renderer = new THREE.GLRenderer()
