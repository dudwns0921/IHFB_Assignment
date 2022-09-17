class Calculator {
  #units = [];

  insert(str) {
    this.#units.push(str);
    console.log(this.#units);
  }

  getFormula() {
    return this.#units.join('');
  }
}

export default Calculator;
