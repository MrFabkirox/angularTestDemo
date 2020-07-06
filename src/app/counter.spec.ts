import { CounterComponent } from './counter';

describe ('counter validation', () => {

  let testCounter: CounterComponent;

  beforeEach(() => {
    testCounter = new CounterComponent();
  })

  it('increment counter', () => {

    const testCount = testCounter.incrementCounter();

    expect(testCount).toBeGreaterThan(0);
  })

  it('decrement counter', () => {

    const testCount = testCounter.decrementCounter();

    expect(testCount).toBeLessThan(0);
  })

  it('verify france is in the array', () => {

    const testCountry = testCounter.countries;

    expect(testCountry).toContain('FRANCE');
  })

})