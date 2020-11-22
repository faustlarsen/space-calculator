export class Earth {
  constructor(age, expectancy) {
    this.age = age;
    this.expectancy = expectancy;
    this.earthAge = this.age;
    this.earthPastExpectacy = Math.abs(this.expectancy - this.age);
  }
}