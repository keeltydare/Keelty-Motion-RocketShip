//IMPORTS
import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";

//register Plugins
gsap.registerPlugin(GSDevTools, MotionPathPlugin);

//**** SELECT ELEMENTS without jQuery ****\\

// jQuery, all instances of .box
//$(".box");

// first instance of .box
//document.querySelector(".box");

// all instances of .box
//document.querySelectorAll(".box");


//page ready listener
let ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {
  //add tools
  //GSDevTools.create();

  /* add your code here */
  let mainTL = gsap.timeline({id:"main"});
  let lightTL = gsap.timeline({paused:true});


  function init(){
    //***********  starsTL init ****************
  gsap.set([".star-01", ".star-02", ".star-03", ".star-04", ".star-05", ".star-06", ".star-07", ".star-08"], {alpha:0, borderRadius:"100%", rotation:"180deg", transformOrigin:"center center", scale:.25});
    //*********** serenityTL init ****************
  gsap.set(["#serenity"], {display:"none", scale:0, transformOrigin:"center center"});
    //*********** asteroidsTL init ****************
    gsap.set(["#asteroid-01", "#asteroid-02", "#asteroid-03", "#asteroid-04", "#asteroid-05", "#asteroid-06", "#asteroid-07", "#asteroid-08", "#asteroid-09", "#asteroid-10"], {display:"none"});
    //*********** asteroidDodgeTL init ****************

    //*********** flightTL init ****************
  gsap.set(["#symbol"], {scale:0, transformOrigin:"center center"});
    //*********** bigSymbolTL init ****************
    gsap.set(["#logo"], {scale:0, transformOrigin:"center center"});


  }

  //Nested Timelines
  //***********  starsTL init  ****************
  function starsTL(){
    let tl = gsap.timeline();

    tl.to(".star-01", {alpha:1, duration:1, rotation:"-180deg", borderRadius:"none", scale:1, ease:"power1.out"})
      .to(".star-02", {alpha:1, duration:1, rotation:"-180deg", borderRadius:"none", scale:1, ease:"power1.out"}, "-=.5")
      .to(".star-03", {alpha:1, duration:1, rotation:"-180deg", borderRadius:"none", scale:1, ease:"power1.out"}, "-=.5")
      .to(".star-04", {alpha:1, duration:1, rotation:"-180deg", borderRadius:"none", scale:1, ease:"power1.out"}, "-=.5")
      .to(".star-05", {alpha:1, duration:1, rotation:"-180deg", borderRadius:"none", scale:1, ease:"power1.out"}, "-=.5")
      .to(".star-06", {alpha:1, duration:1, rotation:"-180deg", borderRadius:"none", scale:1, ease:"power1.out"}, "-=.5")
      .to(".star-07", {alpha:1, duration:1, rotation:"-180deg", borderRadius:"none", scale:1, ease:"power1.out"}, "-=.5")
      .to(".star-08", {alpha:1, duration:1, rotation:"-180deg", borderRadius:"none", scale:1, ease:"power1.out"}, "-=.5")

      ;
    return tl;
  }

  //*********** serenityTL init ****************
  function serenityTL(){
    let tl = gsap.timeline();

    tl.to("#serenity", {display:"block"})
    .to("#serenity", {scale:1, duration:2, onStart:light})

    ;

    return tl;
  }

  //*********** asteroidsTL init ****************
  function asteroidsTL(){
    let tl = gsap.timeline();

    return tl;
  }

  //*********** asteroidDodgeTL init ****************
  function asteroidDodgeTL(){
    let tl = gsap.timeline();

    tl.to("#serenity", {
      duration:15,
      motionPath:{
        path:"#flightPath-01",
        align:"#flightPath-01",
        alignOrigin:[0.5, 0.5],
        autoRotate:180
      },
      ease:"power1.out"
    }, "asteroids")

    .to("#asteroid-01", {
      duration:5,
      motionPath:{
        path:"#asteroidPath-01",
        align:"#asteroidPath-01",
        alignOrigin:[0.5, 0.5]
      }, 
      display:"block", rotation:"300deg"
    }, "asteroids -=10")

    .to("#asteroid-02", {
      duration:5,
      motionPath:{
        path:"#asteroidPath-02",
        align:"#asteroidPath-02",
        alignOrigin:[0.5, 0.5]
      }, 
      display:"block", rotation:"300deg"
    }, "asteroids -=10")

    .to("#asteroid-03", {
      duration:5,
      motionPath:{
        path:"#asteroidPath-03",
        align:"#asteroidPath-03",
        alignOrigin:[0.5, 0.5]
      }, 
      display:"block", rotation:"300deg"
    }, "asteroids -=10")

    .to("#asteroid-04", {
      duration:5,
      motionPath:{
        path:"#asteroidPath-04",
        align:"#asteroidPath-04",
        alignOrigin:[0.5, 0.5]
      }, 
      display:"block", rotation:"300deg"
    }, "asteroids -=10")

    .to("#asteroid-05", {
      duration:5,
      motionPath:{
        path:"#asteroidPath-05",
        align:"#asteroidPath-05",
        alignOrigin:[0.5, 0.5]
      }, 
      display:"block", rotation:"300deg"
    }, "asteroids -=10")

    .to("#asteroid-06", {
      duration:5,
      motionPath:{
        path:"#asteroidPath-06",
        align:"#asteroidPath-06",
        alignOrigin:[0.5, 0.5]
      }, 
      display:"block", rotation:"300deg"
    }, "asteroids -=10")

    .to("#asteroid-07", {
      duration:5,
      motionPath:{
        path:"#asteroidPath-07",
        align:"#asteroidPath-07",
        alignOrigin:[0.5, 0.5]
      }, 
      display:"block", rotation:"300deg"
    }, "asteroids -=10")

    .to("#asteroid-08", {
      duration:5,
      motionPath:{
        path:"#asteroidPath-08",
        align:"#asteroidPath-08",
        alignOrigin:[0.5, 0.5]
      }, 
      display:"block", rotation:"300deg"
    }, "asteroids -=10")

    .to("#asteroid-09", {
      duration:5,
      motionPath:{
        path:"#asteroidPath-09",
        align:"#asteroidPath-09",
        alignOrigin:[0.5, 0.5]
      }, 
      display:"block", rotation:"300deg"
    }, "asteroids -=10")

    .to("#asteroid-10", {
      duration:5,
      motionPath:{
        path:"#asteroidPath-10",
        align:"#asteroidPath-10",
        alignOrigin:[0.5, 0.5]
      }, 
      display:"block", rotation:"300deg"
    }, "asteroids -=10")
    
    .to("#foreground", {display:"none"})
    .to("#symbol", {scale:1, duration:1}, "-=5")
    ;

    return tl;
  }
  //*********** flightTL ****************
  function flightTL(){
    let tl = gsap.timeline();
    tl.to("#serenity", {
      duration:5,
      motionPath:{
        path:"#flightPath-02",
        align:"#flightPath-02",
        alignOrigin:[0.5, 0.5],
        autoRotate:180
      },
      ease:"power1.out",
      scale:0
    })

    ;
    return tl;
  }
  //*********** bigSymbolTL init ****************
  function bigSymbolTL(){
    let tl = gsap.timeline();

    tl.to("#symbol", {duration:5, scale:4, x:400, y:400})
    .to("#logo", {duration:2, scale:1})
    .to("#glow-01", {duration:.5, scale:1.05, transformOrigin:"center center"}, "-=.5")
    .to("#glow-02", {duration:.5, scale:1.075, transformOrigin:"center center"}, "-=.25")
    

    ;

    return tl;
  }

  //*********** flame functions DO NOT INCLUDE IN MAIN TL ****************
  function light(){
  
    console.log('SHOW TIME');
    gsap.set("#light",{display:"block", scale:.75, alpha:.25, transformOrigin:"center center"});
  
    lightTL.to("#light",{duration:1, scale:1, aplha:1, yoyo:true, repeat:-1, ease:"back.out"});
    
    lightTL.play()
  }

  //1. set initial properties
  init();

  //2. show content - prevents FOUC
  gsap.set('#svg-container',{visibility:"visible"});

  //3. BUILD Main timeline
//  mainTL.add(fadeInTL())
mainTL.add(starsTL())
      .add(serenityTL(), "-=1")
      .add(asteroidsTL())
      .add(asteroidDodgeTL())
      .add(flightTL())
      .add(bigSymbolTL())

  ;//tl END





});
