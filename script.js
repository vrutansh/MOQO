gsap.to("#page1 h1",{
    transform:"translateX(-100%)",
    fontWeight:100,
    // duration:1,
    // delay:1,
    scrollTrigger:{
        trigger:"#page1",
        pin: true,
        scroller:"body",
        // markers:true,
        start:"top 0",
        end:"top -200%",
        scrub:2,
        
    }
})