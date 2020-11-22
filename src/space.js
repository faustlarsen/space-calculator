export class SpaceCalculator {
  constructor(age, expectancy) {
    this.age = age;
    this.expectancy = expectancy;
    this.mercury = 0.24;
    this.venus = 0.62;
    this.mars = 1.88;
    this.jupiter = 11.86;

    this.earthAge = this.age;
    this.earthExpectancy = this.expectancy;
    this.earthPastExpectacy = Math.abs(this.expectancy - this.age);


    this.mercuryAge = Math.round(this.age / this.mercury);  
    this.mercuryExpectancy =  Math.abs(Math.round(this.expectancy / this.mercury - this.mercuryAge));  
  
    console.log(this.mercuryExpectancy);

    this.venusAge = Math.round(this.age / this.venus);  
    this.venusExpectancy = Math.abs(Math.round(this.expectancy / this.venus - this.venusAge)); 


    this.marsAge = Math.round(this.age / this.mars);  
    this.marsExpectancy = Math.abs(Math.round(this.expectancy / this.mars - this.marsAge)); 


    this.jupiterAge = Math.round(this.age / this.jupiter);  
    this.jupiterExpectancy = Math.abs(Math.round(this.expectancy / this.jupiter - this.jupiterAge)); 

  }
}
