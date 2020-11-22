import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {SpaceCalculator} from './space.js';
$(document).ready(function(){
  $("#calculator").submit(function(event) {
    event.preventDefault(); 
    let newAge = parseInt($("#age").val());
    let newExpectancy = parseInt($("#expectancy").val());
    let spaceAge = new SpaceCalculator(newAge, newExpectancy);
    if 
    (spaceAge.age <= spaceAge.expectancy) {
      $("#earth").html(
        `<li> Age ${spaceAge.age}.</li>
        <li> Years left ${spaceAge.earthPastExpectacy}.</li>`);     
    } else {
      $("#earth").html(
        `<li> Age ${spaceAge.earthAge}.</li>
        <li> Years past expectancy ${spaceAge.earthPastExpectacy}.</li>`);      
    } if 
    (spaceAge.age <= spaceAge.expectancy) {
      $("#mercury").html(
        `<li>Age ${spaceAge.mercuryAge}. </li>
        <li>Years left ${spaceAge.mercuryExpectancy}. </li>`);    
    } else {
      $("#mercury").html(
        `<li>Age ${spaceAge.mercuryAge}. </li>
        <li>Years past expectancy ${spaceAge.mercuryExpectancy}. </li>`);  
    } if 
    (spaceAge.age <= spaceAge.expectancy) {
      $("#venus").html(
        `<li>Age ${spaceAge.venusAge}.</li>
        <li>Years left ${spaceAge.venusExpectancy}.</li>`);          
    } else {
      $("#venus").html(
        `<li>Age ${spaceAge.venusAge}.</li>   
        <li>Years past expectancy ${spaceAge.venusExpectancy}.</li>`);
    } if 
    (spaceAge.age <= spaceAge.expectancy) {
      $("#mars").html(
        `<li>Age ${spaceAge.marsAge}.</li>
        <li>Years left ${spaceAge.marsExpectancy}.</li>`);         
    } else {
      $("#mars").html(
        `<li>Age ${spaceAge.marsAge}.</li>
        <li>Years past expectancy ${spaceAge.marsExpectancy}.</li>`);  
    } if 
    (spaceAge.age <= spaceAge.expectancy) {
      $("#jupiter").html(
        `<li>Age ${spaceAge.jupiterAge}.</li>
        <li>Years left ${spaceAge.jupiterExpectancy}.</li>`);                         
    } else {
      $("#jupiter").html(
        `<li>Age ${spaceAge.jupiterAge}.</li>
        <li> Years past expectancy ${spaceAge.jupiterExpectancy}.</li>`);  
    }
  });
});