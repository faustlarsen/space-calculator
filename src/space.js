export class SpaceCalculator {
  constructor(age, expectancy) {
    this.age = age;
    this.expectancy = expectancy;
    this.mercury = 0.24;
    this.venus = 0.62;
    this.mars = 1.88;
    this.jupiter = 11.86;
  }
  ageOnEarth() {
    this.earthAge = this.age;
    this.earthExpectancy = this.expectancy;
    this.earthPastExpectacy = Math.abs(this.expectancy - this.age);
  }
  ageOnMercury() {
    this.mercuryAge = Math.round(this.age / this.mercury);  
    this.mercuryExpectancy = Math.round(this.expectancy / this.mercury); 
    this.mercuryPastExpectancy = Math.abs(this.mercuryAge - this.mercuryExpectancy); 
  }
  ageOnVenus() {
    this.venusAge = Math.round(this.age / this.venus);  
    this.venusExpectancy = Math.round(this.expectancy / this.venus); 
    this.venusPastExpectancy = Math.abs(this.venusAge - this.venusExpectancy);
  }
  ageOnMars() {
    this.marsAge = Math.round(this.age / this.mars);  
    this.marsExpectancy = Math.round(this.expectancy / this.mars); 
    this.marsPastExpectancy = Math.abs(this.marsAge - this.marsExpectancy);
  }
  ageOnJupiter() {
    this.jupiterAge = Math.round(this.age / this.jupiter);  
    this.jupiterExpectancy = Math.round(this.expectancy / this.jupiter); 
    this.jupiterPastExpectancy = Math.abs(this.jupiterAge - this.jupiterExpectancy);
  }
}
