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
    }    else if (limit === 30) {
        scrollPercentage.innerHTML = `tim turs`
    } else {
        scrollPercentage.innerHTML = `${pixels.toFixed()}px`
        nav.style.opacity = 0;
        nav.style.zIndex = -1
    }
})
const skillsBtn = document.querySelector('#skillsBtn');
const portfolioBtn = document.querySelector('#portfolioBtn');
let portfolioTexts = document.querySelectorAll('.portfolio__text')
let skillsHighlighted = document.querySelectorAll('.portololio__skill')
skillsBtn.addEventListener('click', ()=> {
    portfolioBtn.style.borderColor = 'transparent'
    portfolioBtn.style.color = 'black'

    skillsBtn.style.borderColor = '#f42e0e'
    skillsBtn.style.color = '#f42e0e'

    skillsHighlighted.forEach(skill => {
        skill.style.color ='#f42e0e'
    })
    portfolioTexts.forEach(text => {
        text.style.color = '#a0a0a0'
    })
})
portfolioBtn.addEventListener('click', ()=> {
    skillsBtn.style.borderColor = 'transparent'
    skillsBtn.style.color = 'black'

    portfolioBtn.style.borderColor = '#f42e0e'
    portfolioBtn.style.color = '#f42e0e'

    skillsHighlighted.forEach(skill => {
        skill.style.color ='black'
    })
    portfolioTexts.forEach(text => {
        text.style.color = 'black'
    })
})
let ImgRotate = document.querySelectorAll('.hero__svg')
let animatedTags = document.querySelectorAll("h1, .portfolio__text, .bio__text, .hero__text,  a, .portololio__skill, .hero__svg")
animatedTags.forEach(tag => {
    tag.style.opacity = 0
})
const FadeIn = () => {
    console.log('fade in')
    let delay = 0.15

    animatedTags.forEach(tag => {
        const tagsTop = tag.getBoundingClientRect().top
        const tagsBottom = tag.getBoundingClientRect().bottom
        // console.log(tagsTop, tagsBottom)
        if(tagsTop < window.innerHeight && tagsBottom > 0
            ) {
                tag.style.animation = `fadein 0.5s ${delay}s ease-in both`

                delay = delay + 0.05
                
            } else {
                tag.style.opacity = 0
                tag.style.animation = ''
            }
    })
}
FadeIn()
document.addEventListener("scroll", FadeIn )
window.addEventListener("resize", () => {
    FadeIn()
})
const locomotiveScroll = new LocomotiveScroll({
     el: document.querySelectorAll('.scroll'),
     smoth: true
})