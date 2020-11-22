export class Mercury {
  constructor(age, expectancy) {
    this.age = age;
    this.expectancy = expectancy;
    this.mercury = 0.24;
    this.mercuryAge = Math.round(this.age / this.mercury);  
    this.mercuryExpectancy =  Math.abs(Math.round(this.expectancy / this.mercury - this.mercuryAge));  
  }
}