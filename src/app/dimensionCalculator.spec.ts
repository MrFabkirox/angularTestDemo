import { DimensionCalculator } from './dimensionCalculator';

describe ('dimension calculator validation', () => {

    let dimCalc: DimensionCalculator;
    
    beforeEach(() => {
      dimCalc = new DimensionCalculator();
    })

  it('validate area is 100', () => {

    const area = dimCalc.getArea(20, 5);

    expect(area).toBe(100);
  })

  it('validate perimeter is 200', () => {

    const perimeter = dimCalc.getPerimeter(20, 5);

    expect(perimeter).toBe(200);
  })

})
