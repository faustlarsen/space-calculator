/* eslint-disable no-undef */
import { SpaceCalculator } from './../src/space.js';

describe('SpaceCalculator', () => {
  let userAge;
  beforeEach(() => {
    userAge = new SpaceCalculator(100,80);
  });

  test('should return years past life expectancy on Earth', () => {
    userAge.ageOnEarth();
    expect(userAge.age).toEqual(100);
    expect(userAge.earthExpectancy).toEqual(80);
    expect(userAge.earthPastExpectacy).toEqual(20); 
  });
 
  test('should return current age, years left and years past life expectancy on Mercury', () => {
    userAge.ageOnMercury();
    expect(userAge.mercuryAge).toEqual(417); 
    expect(userAge.mercuryExpectancy).toEqual(333); 
    expect(userAge.mercuryPastExpectancy).toEqual(84); 
  });

  test('should return current age, years left and years past life expectancy on Venus', () => {
    userAge.ageOnVenus();
    expect(userAge.venusAge).toEqual(161); 
    expect(userAge.venusExpectancy).toEqual(129); 
    expect(userAge.venusPastExpectancy).toEqual(32); 
  });

  test('should return current age, years left and years past life expectancy on Mars', () => {
    userAge.ageOnMars();
    expect(userAge.marsAge).toEqual(53); 
    expect(userAge.marsExpectancy).toEqual(43); 
    expect(userAge.marsPastExpectancy).toEqual(10); 
  });

  test('should return current age, years left and years past life expectancy on Jupiter', () => {
    userAge.ageOnJupiter();
    expect(userAge.jupiterAge).toEqual(8); 
    expect(userAge.jupiterExpectancy).toEqual(7); 
    expect(userAge.jupiterPastExpectancy).toEqual(1); 
  });
});