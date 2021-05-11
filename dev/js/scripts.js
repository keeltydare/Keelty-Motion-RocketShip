//IMPORTS
import { gsap } from "gsap";
//import { GSDevTools } from "gsap/GSDevTools";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";
import {MotionPathHelper} from "gsap/MotionPathHelper";

//register Plugins
gsap.registerPlugin( MotionPathPlugin, MotionPathHelper);

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
//MotionPathHelper.create("#asteroid-03");
  //GSDevTools.create();

  /* add your code here */
  let mainTL = gsap.timeline({id:"main"});
  let lightTL = gsap.timeline({paused:true});


  function init(){
    //***********  starsTL init ****************
  gsap.set([".star-01", ".star-02", ".star-03", ".star-04", ".star-05", ".star-06", ".star-07", ".star-08"], {alpha:0, borderRadius:"100%", rotation:"180deg", transformOrigin:"center center", scale:.25});
    //*********** serenityTL init ****************
  gsap.set(["#serenity"], {display:"none", scale:0, transformOrigin:"center center"});
    //*********** asteroidDodgeTL init ****************
    gsap.set(["#asteroid-01", "#asteroid-02", "#asteroid-03", "#asteroid-04", "#asteroid-05", "#asteroid-06", "#asteroid-07", "#asteroid-08", "#asteroid-09", "#asteroid-10"], {x:"+=1100", y:"-=1100"});
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
    .to("#serenity", {scale:1, duration:2, onStart:light, ease:"elastic.out"})

    ;

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
      rotation:"300deg"
    }, "asteroids+=5")

    .to("#asteroid-02", {
      duration:5,
      motionPath:{
        path:"M745.94,-33.73797 C647.702,45.23103 509.963,110.21503 247.015,419.13103 51.024,649.38403 90.357,921.90603 100,1100" ,
        curviness:0.5,
        offsetX:-60,
        offsetY:-60
      }
    }, "asteroids+=4")

    .to("#asteroid-03", {
      duration:5,
      motionPath:{
        path:"M1051.35897,606.95303 C965.41597,616.89503 862.88697,600.97303 582.52897,854.58403 458.71497,966.58503 142.97497,1019.16003 0,1200 ",
        curviness:0.5,
        offsetX:-60,
        offsetY:-60
      },
      rotation:"300deg"
    }, "asteroids+=3")

    .to("#asteroid-04", {
      duration:5,
      motionPath:{
        path:"M1065.776,292.76598 C762.985,411.76598 604.474,608.49898 589.108,626.07598 398.766,843.79298 8.666,962.31298 -200,1100",
        curviness:0.5,
        offsetX:-60,
        offsetY:-60
      },
      rotation:"300deg"
    }, "asteroids+=2")

    .to("#asteroid-05", {
      duration:5,
      motionPath:{
        path:"M492.44826,-23.92182 C407.61626,128.36518 376.59226,119.76118 215.48626,228.76118 158.96426,267.00218 59.39626,313.05318 -100,500 ",
        curviness:0.5,
        offsetX:-200,
        offsetY:-200
      }
    }, "asteroids+=1")

    .to("#asteroid-06", {
      duration:5,
      motionPath:{
        path:"M275.98597,-0.98905 C191.14397,84.13295 176.14897,99.44395 139.08997,126.65795 98.09597,156.76095 49.49897,179.45595 -100,225 ",
        curviness:0.5,
        offsetX:-60,
        offsetY:-60
      }
    }, "asteroids+=6")

    .to("#asteroid-07", {
      duration:5,
      motionPath:{
        path:"M887.32797,-17.642 C749.50697,113.239 557.76697,249.207 419.97897,349.095 354.85697,396.304 34.75797,640.339 -100,800 ",
        curviness:0.5,
        offsetX:-60,
        offsetY:-60
      }
    }, "asteroids+=7")

    .to("#asteroid-08", {
      duration:5,
      motionPath:{
        path:"M1108.66701,-35.685 C992.76601,29.727 646.07201,194.142 513.35001,432.204 308.78101,799.135 199.40801,710.485 -100,798.378 ",
        curviness:0.5,
        offsetX:-60,
        offsetY:-60
      },
      rotation:"300deg"
    }, "asteroids+=8")

    .to("#asteroid-09", {
      duration:5,
      motionPath:{
        path:"#asteroidPath-09",
        align:"#asteroidPath-09",
        alignOrigin:[0.5, 0.5]
      },
      rotation:"300deg"
    }, "asteroids+=9")

    .to("#asteroid-10", {
      duration:5,
      motionPath:{
        path:"M755.48721,-17.4731 C755.48721,13.5199 501.99721,184.4559 387.72121,257.0249 155.55521,404.4449 210.73321,427.6919 -100,537.3459 ",
        curviness:0.5,
        offsetX:-60,
        offsetY:-60
      },
      rotation:"300deg"
    }, "asteroids+=10")
    .to("#symbol", {scale:1, duration:1, ease:"back.out"}, "asteroids+=10")
  

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

    tl.to("#symbol", {duration:5, scale:4, x:400, y:400, ease:"power4.out"})
    .to("#logo", {duration:2, scale:1, ease:"back.out"})
    .to("#glow-01", {duration:.5, scale:1.05, transformOrigin:"center center", ease:"back.out"}, "-=.5")
    .to("#glow-02", {duration:.5, scale:1.075, transformOrigin:"center center", ease:"back.out"}, "-=.25")


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
      .add(asteroidDodgeTL())
      .add(flightTL())
      .add(bigSymbolTL())

  ;//tl END





});
