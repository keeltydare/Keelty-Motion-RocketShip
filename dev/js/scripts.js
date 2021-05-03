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


  function init(){
    //***********  starsTL init ****************
gsap.set([".star-01", ".star-02", ".star-03", ".star-04", ".star-05", ".star-06", ".star-07", ".star-08"], {alpha:0})
    //*********** asteroidsTL init ****************
gsap.set(["#asteroid-1", "#asteroid-2", "#asteroid-3", "#asteroid-4", "#asteroid-5", "#asteroid-6", "#asteroid-7", "#asteroid-8", "#asteroid-9", "#asteroid-10"], {display:"none"})
    //*********** serenityTL init ****************
gsap.set(["#serenity"], {display:"none"} )
    //*********** asteroidDodgeTL init ****************

    //*********** flightTL init ****************
gsap.set(["#symbol"], {display:"none"})
    //*********** bigSymbolTL init ****************


  }

  //Nested Timelines
  //***********  starsTL init  ****************
  function starsTL(){

  }

  //*********** asteroidsTL init ****************
  function asteroidsTL(){

  }
  //*********** serenityTL init ****************
  function serenityTL(){

  }
  //*********** asteroidDodgeTL init ****************
  function asteroidDodgeTL(){

  }
  //*********** flightTL ****************
  function flightTL(){

  }
  //*********** bigSymbolTL init ****************
  function bigSymbolTL(){

  }

  //*********** flame functions DO NOT INCLUDE IN MAIN TL ****************
  function light(){
  
    console.log('SHOW TIME');
    gsap.set(".light",{display:"block", alpha:".5"});
  
    lightTL.to("#left-blue",{duration:0.25, scale:.75, aplha:".25", yoyo:true, repeat:-1},"flames")
  
  }

  //1. set initial properties
  init();

  //2. show content - prevents FOUC
  gsap.set('#svg-container',{visibility:"visible"});

  //3. BUILD Main timeline
//  mainTL.add(fadeInTL())


  //;//tl END





});
