import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {Mars} from './js/mars.js';
import {Venus} from './js/venus.js';
import {Jupiter} from './js/jupiter.js';
import {Mercury} from './js/mercury.js';
import {Earth} from './earth.js';
$(document).ready(function(){
  $("#calculator").submit(function(event) {
    event.preventDefault(); 
    let newAge = parseInt($("#age").val());
    let newExpectancy = parseInt($("#expectancy").val());
    let earthAge = new Earth (newAge, newExpectancy);
    let mercury = new Mercury(newAge, newExpectancy);
    let venus = new Venus(newAge, newExpectancy);
    let mars = new Mars(newAge, newExpectancy);
    let jupiter = new Jupiter(newAge, newExpectancy);
    //Earth
    if (earthAge.age <= earthAge.expectancy) {
      $("#earth").html(
        `<li> Age ${earthAge.age}.</li>
        <li> Years left ${earthAge.earthPastExpectacy}.</li>`);     
    } else {
      $("#earth").html(
        `<li> Age ${earthAge.earthAge}.</li>
        <li> Years past expectancy ${earthAge.earthPastExpectacy}.</li>`);     
    //Mercury
    } if (earthAge.age <= earthAge.expectancy) {
      $("#mercury").html(
        `<li>Age ${mercury.mercuryAge}. </li>
        <li>Years left ${mercury.mercuryExpectancy}. </li>`);    
    } else {
      $("#mercury").html(
        `<li>Age ${mercury.mercuryAge}. </li>
        <li>Years past expectancy ${mercury.mercuryExpectancy}. </li>`);  
    //Venus
    } if (earthAge.age <= earthAge.expectancy) {
      $("#venus").html(
        `<li>Age ${venus.venusAge}.</li>
        <li>Years left ${venus.venusExpectancy}.</li>`);          
    } else {
      $("#venus").html(
        `<li>Age ${venus.venusAge}.</li>   
        <li>Years past expectancy ${venus.venusExpectancy}.</li>`);
    //Mars
    } if (earthAge.age <= earthAge.expectancy) {
      $("#mars").html(
        `<li>Age ${mars.marsAge}.</li>
        <li>Years left ${mars.marsExpectancy}.</li>`);         
    } else {
      $("#mars").html(
        `<li>Age ${mars.marsAge}.</li>
        <li>Years past expectancy ${mars.marsExpectancy}.</li>`);  
    //Jupiter
    } if (earthAge.age <= earthAge.expectancy) {
      $("#jupiter").html(
        `<li>Age ${jupiter.jupiterAge}.</li>
        <li>Years left ${jupiter.jupiterExpectancy}.</li>`);                         
    } else {
      $("#jupiter").html(
        `<li>Age ${jupiter.jupiterAge}.</li>
        <li> Years past expectancy ${jupiter.jupiterExpectancy}.</li>`);  
    }
  });
});