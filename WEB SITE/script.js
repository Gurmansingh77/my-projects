const lenis = new Lenis()
let minicircle = document.querySelector(".minicircle")
let parent = document.querySelectorAll(".parent")

function raf(time) {
   lenis.raf(time)
   requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

function CirclefollowsMouse() {
   window.addEventListener("mousemove", function (dets) {
      minicircle.style.top = dets.clientY + "px"
      minicircle.style.left = dets.clientX + "px"

   })
}

function FirstPageAnim() {
   var tl = gsap.timeline()
   tl.from("#nav", {
      y: '-10',
      opacity: 0,
      duration: 2,
      ease: Expo
   })

   tl.to(".boundingelem", {
      y: '0',
      duration: 2,
      ease: Expo.easeInOut,
      stagger: 0.2,
      delay: -1
   })

   tl.from(".herofooter", {
      y: "-10",
      opacity: 0,
      duration: 1.5,
      ease: Expo.easeInOut,
      delay: -1
   })
}

function TextAnimation() {

   parent.forEach(function(e){

      let h1 = e.querySelector("h1")
      let h5 = e.querySelector(".secondh5")

      e.addEventListener("mouseenter", function(){

         gsap.to(h1 , {
            scale: 0.85,
            duration: 0.4,
            ease: "power3.out",
            opacity:0.3
         })

      })

      e.addEventListener("mouseleave", function(){

         gsap.to(h1 , {
            scale: 1,
            duration: 0.4,
            ease: "power3.out",
            opacity:0.6
         })
      })
         e.addEventListener("mouseenter", function(){

         gsap.to(h5 , {
            scale: 0.85,
            duration: 0.4,
            ease: "power3.out",
            opacity:0.3
         })

      })
       e.addEventListener("mouseleave", function(){

         gsap.to(h5 , {
            scale: 1,
            duration: 0.4,
            ease: "power3.out",
            opacity:0.6
         })
      })

   })

}


function ImageMouseFollower() {
   parent.forEach(function (e) {
      let img = e.querySelector("img")
      
      e.addEventListener("mousemove", function (dets) {
         let diff = dets.clientY - e.getBoundingClientRect().top
         
         gsap.to(img, {
            opacity: 1,
            top: diff,
            left: dets.clientX,
            ease: "power1.out",
            duration: 0.3
         })
      })
      
      e.addEventListener("mouseleave", function () {
         e.querySelector("h1").style.opacity = 0.6
         gsap.to(img, {
            opacity: 0,
            duration: 0.3
         })
      })
   })
}

TextAnimation()
ImageMouseFollower()
CirclefollowsMouse()
FirstPageAnim()