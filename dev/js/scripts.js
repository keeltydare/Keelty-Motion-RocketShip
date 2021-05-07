//IMPORTS
import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";
import {MotionPathHelper} from "gsap/MotionPathHelper";

//register Plugins
gsap.registerPlugin(GSDevTools, MotionPathPlugin, MotionPathHelper);

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
  MotionPathHelper.create("#asteroid-10");
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
        path:"M745.94,-33.73797 C647.702,45.23103 509.963,110.21503 247.015,419.13103 51.024,649.38403 90.357,921.90603 90.607,1048.03103" ,
        curviness:0.5,
        offsetX:-60,
        offsetY:-60
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
        path:"M530.06126,-74.03582 C482.26726,59.64718 342.49226,158.48218 241.88126,210.00918 100.22026,282.55918 -37.04274,383.77418 -146.65674,496.82518 ",
        curviness:0.5,
        offsetX:-60,
        offsetY:-60
      }, 
      display:"block", rotation:"300deg"
    }, "asteroids -=10")

    .to("#asteroid-06", {
      duration:5,
      motionPath:{
        path:"#M-84.35674,213.17518 C16.44326,191.85218 88.29926,173.69518 151.18626,119.79218 209.72926,69.60618 265.12126,1.69718 304.80226,-73.04982 ",
        curviness:0.5,
        offsetX:-60,
        offsetY:-60
      }, 
      display:"block", rotation:"300deg"
    }, "asteroids -=10")

    .to("#asteroid-07", {
      duration:5,
      motionPath:{
        path:"M-63.9565,764.91803 C74.6325,598.12503 295.9585,443.55103 427.2025,339.15403 564.9265,229.59903 831.2415,37.20103 916.6355,-44.97397 ",
        curviness:0.5,
        offsetX:-60,
        offsetY:-60
      }, 
      display:"block", rotation:"300deg"
    }, "asteroids -=10")

    .to("#asteroid-08", {
      duration:5,
      motionPath:{
        path:"M-28.56503,763.263 C-28.56503,794.244 386.56097,751.693 525.03297,420.888 662.61697,92.202 1132.82297,-18.705 1163.84097,-18.705 ",
        curviness:0.5,
        offsetX:-60,
        offsetY:-60
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
        path:"M-52.10579,550.6049 C261.68821,407.6259 274.02521,332.9169 365.04521,273.6379 601.40421,119.7009 606.68121,117.7959 719.19521,-15.9291 ",
        curviness:0.5,
        offsetX:-60,
        offsetY:-60
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
