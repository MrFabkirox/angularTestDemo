export class CounterComponent {
  
  public counter: number = 0;
  public countries: Array<string> =
    ['INDIA', 'USA', 'JAPAN', 'FRANCE'];

  public incrementCounter(): number {
  this.counter++;

  return this.counter;
  }

  public decrementCounter(): number {
  this.counter--;

  return this.counter;
  }

}
