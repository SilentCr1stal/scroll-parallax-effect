gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

ScrollSmoother.create({
  wrapper: '.wrapper',
  content: '.content',
  smooth: 1.5,
  effects: true,
  
})

gsap.fromTo('.hero-section', { opacity: 1 }, {
  opacity: 0,
  scrollTrigger: {
    trigger: '.hero-section',
    start: 'center',
    end: '1020px',
    scrub: true
  }
})

gsap.fromTo('.gallery__left .gallery__item', { x: -150, opacity: 0 }, {
  opacity: 1, x: 0,
  scrollTrigger: {
    trigger: '.gallery__item',
    scrub: true
  }
})