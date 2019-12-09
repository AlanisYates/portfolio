var scroll = new SmoothScroll('.topnav [href*="#"]', {
  speed: 500
});

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// scrollmagic animation
const flightPath = {
  curviness: 1.25,
  autoRotate: true,
  values: [
    { x: 100, y: -600 },
    { x: window.innerWidth, y: 0 }
  ]
};

const tween = new TimelineLite();

tween.add(
  TweenLite.to(".circle-3", 1, {
    bezier: flightPath,
    ease: Power1.easeInOut
  })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: ".animation",
  duration: 1000,
  triggerHook: 0.3
})
  .setTween(tween)
  .setPin(".animation")
  .addTo(controller);
