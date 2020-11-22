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
    if (spaceAge.age <= spaceAge.expectancy) {
      $("#earth").html(
        `<li> Age ${spaceAge.age}.</li>
        <li> Years left ${spaceAge.earthPastExpectacy}.</li>`);                                  
      $("#mercury").html(
        `<li>Age ${spaceAge.mercuryAge}. </li>
        <li>Years left ${spaceAge.mercuryExpectancy}. </li>`);                                   
      $("#venus").html(
        `<li>Age ${spaceAge.venusAge}.</li>
        <li>Years left ${spaceAge.venusExpectancy}.</li>`);                    
      $("#mars").html(
        `<li>Age ${spaceAge.marsAge}.</li>
        <li>Years left ${spaceAge.marsExpectancy}.</li>`);                     
      $("#jupiter").html(
        `<li>Age ${spaceAge.jupiterAge}.</li>
        <li>Years left ${spaceAge.jupiterExpectancy}.</li>`);                         
    } else {
      $("#earth").html(
        `<li> Age ${spaceAge.earthAge}.</li>
        <li> Years past expectancy ${spaceAge.earthPastExpectacy}.</li>`);      
      $("#mercury").html(
        `<li>Age ${spaceAge.mercuryAge}. </li>
        <li>Years past expectancy ${spaceAge.mercuryPastExpectacy}. </li>`);  
      $("#venus").html(
        `<li>Age ${spaceAge.venusAge}.</li>   
        <li>Years past expectancy ${spaceAge.venusPastExpectacy}.</li>`); 
      $("#mars").html(
        `<li>Age ${spaceAge.marsAge}.</li>
        <li>Years past expectancy ${spaceAge.marsPastExpectacy}.</li>`);  
      $("#jupiter").html(
        `<li>Age ${spaceAge.jupiterAge}.</li>
        <li> Years past expectancy ${spaceAge.jupiterPastExpectacy}.</li>`);  
    }
  });
});