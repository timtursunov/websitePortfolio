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
scrollPercentage.innerHTML = `hi, there!`
document.addEventListener('scroll', () => {
    const pixels = window.pageYOffset
    let limit = (window.pageYOffset + window.innerHeight) / document.body.scrollHeight * 100
    if (limit === 100) {
        scrollPercentage.innerHTML = `socials`
        nav.style.opacity = 1;
        nav.style.zIndex = 3
    }  else {
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
let animatedTags = document.querySelectorAll("h1, .portfolio__text, .bio__text, a, .portololio__skill")
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
let greenBox = document.querySelector('#hero')
let canvasBox;
let font
let points = []
function preload () {
    font = loadFont('helc.ttf')
}
function setup() {
    canvasBox = createCanvas(1200, 600);
    canvasBox.parent(greenBox)

    points = font.textToPoints("Tim Tursunov", 120, 330, 150, {
        sampleFactor: 0.3,
        simplifyThreshold: 0
    })
}
function draw() {
    const nl = 0.01
    background('white')
    fill('black')
    noStroke()
    points.forEach(point => {
        const distance = createVector(point.x - mouseX, point.y - mouseY)
        const distortion = distance.mult(60 / distance.mag())
        circle(point.x + distortion.x, point.y + distortion.y, 5);
        
    });
    noFill()
    stroke('black')
    beginShape()
    points.forEach(point => {
        const distance = createVector(point.x - mouseX, point.y - mouseY)
        const distortion = distance.mult(60 / distance.mag())

        const nx = 40 * noise(nl * point.x , nl * point.y, nl * frameCount) - 20;
        const ny = 40 * noise(nl * point.x , nl * point.y, nl * frameCount) - 20;;
        vertex(point.x + distortion.x + nx, point.y + distortion.y + ny)
    })
    endShape()
}



//resizing





let siteBottom =  document.body.scrollHeight

// let scrollDiv = document.querySelectorAll('.scroll')

// const locomotiveScroll = new LocomotiveScroll({
//      el: scrollDiv,
//      smoth: true
// })

let workScrollBtn = document.querySelector('#work')
workScrollBtn.addEventListener('click', function(){
    window.scrollTo({
        top: siteBottom,       
        left: 0,
        behavior: 'smooth'
    })
})

