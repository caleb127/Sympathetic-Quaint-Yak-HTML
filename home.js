const categoriesWrapper = document.querySelector('.categories-wrapper')
const images = document.querySelectorAll(".images img")
categoriesWrapper.addEventListener('mousemove', e => {
    gsap.to(images, {
        // move images to mouse position
        x: e.x, 
        y: e.y, 
        // transform origin of images to center
        xPercent: -50, 
        yPercent: -50,
        // stagger subsequent images by 50ms
        stagger: .05
    })
})
gsap.utils.toArray('.categories h6')
.forEach(category => {
    let {label} = category.dataset
    
    category.addEventListener('mouseenter', () => {
        gsap.to(`img[data-image=${label}]`, {opacity: 1, scale: 1})
        gsap.set(`img[data-image=${label}]`, {zIndex: 1})
        gsap.set(`h6[data-label=${label}]`, {zIndex: 2})
    })
    
    category.addEventListener('mouseleave', () => {
        gsap.to(`img[data-image=${label}]`, {opacity: 0, zIndex: -1, scale: .80})
        gsap.set(`h6[data-label=${label}]`, {zIndex: 0})
    })
})