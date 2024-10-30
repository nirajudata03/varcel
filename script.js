// Initialize Lenis
const lenis = new Lenis({
  
});

/*// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});*/

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);



function textAnimation(){
  gsap.from('#text_',{
    y:100,
    scrollTrigger:{
        trigger: '#text_',
        markers:false,
        start:'top 100%',
        end:'bottom 60%',
        scrub: 1,
        yoyo: true,
    }
})
}
textAnimation()


function cardAnimation() {
  document.querySelectorAll('.card').forEach(card => {
    gsap.to(card,{
      scale: 0.7,
      opacity: 0,
      scrollTrigger:{
        trigger:card,
        markers: false,
        start: 'top 15%',
        end: 'bottom 15%',
        scrub: true
      }
    })
  })
}
cardAnimation()


var steps = document.querySelectorAll("#steps_process_H")

steps.forEach(function(elem){
  elem.addEventListener("mousemove",function(){
    console.log('Hello')
    gsap.to(elem,{
      opacity: 1,
      ease: "power2.in",
      duration:0.1
    })
  })
  
  elem.addEventListener("mouseleave",function(){
    console.log('Hello')
    gsap.to(elem,{
      opacity: 0.3,
      ease: "power1.out",
      duration:0.1
    })
  })

  
  
})


