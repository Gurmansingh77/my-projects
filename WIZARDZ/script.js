function Page1Animation(){
    let tl = gsap.timeline()

tl.from("nav h1",{
    y:-30,
    opacity:0,
    duration:0.6,
    delay:0.3
})
tl.from("nav h4 , nav button",{
    y:-30,
    opacity:0,
    duration:0.2,
    stagger:0.1
})
tl.from(".centerpart1 h1 , .centerpart1 p",{
    x:-300,
    opacity:0,
    stagger:0.4
})
tl.from(".centerpart1 button",{
    opacity:0,
})
tl.from(".centerpart2 img",{
    opacity:0,
    duration:0.4
},"-=1")
tl.from(".section1bottom img",{
    x:-300,
    opacity:0,
    duration:0.2,
    stagger:0.2
},"-=1.9")
}

Page1Animation()

function Page2Animation(){
    gsap.from(".services button",{
    x:-300,
    opacity:0,
    scrollTrigger:{
        trigger:".services button",
        scroll:"body",
        start:"top 80%"
    }
})
gsap.from(".services p",{
    x:300,
    opacity:0,
    delay:0.4,
    scrollTrigger:{
        trigger:".services p",
        scroll:"body",
        start:"top 80%"
    }
})

gsap.from(".line-1",{
    x:-300,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".line-1",
        scroll:"body",
        start:"top 50%"
    }
})
gsap.from(".line-2",{
    x:300,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".line-1",
        scroll:"body",
        start:"top 50%"
    }
})
}

Page2Animation()