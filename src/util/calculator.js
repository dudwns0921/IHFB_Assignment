const MAX_LEN = 12;

class Calculator {
  #units = [];

  insert(str) {
    this.#units.push(str);
  }

  delete() {
    this.#units.pop();
  }

  clear() {
    this.#units = [];
  }

  calculate() {
    console.log('calculate units');
  }

  reverse() {
    console.log('reverse unit');
  }

  getFormula() {
    return this.#units.join('');
  }
}

export default Calculator;
