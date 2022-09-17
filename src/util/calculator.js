const MAX_LEN = 12;

class Calculator {
  #units = [];
  #currentNum = [];

  #lastUnit() {
    return this.#units[this.#units.length - 1];
  }

  #lastCurrentNum() {
    return this.#currentNum[this.#currentNum.length - 1];
  }

  insert(str) {
    if (/[+ㅡ×÷%.]/.test(str)) {
      if (/[+ㅡ×÷%]/.test(str)) {
        this.#currentNum = [];
      } else if (str === '.') {
        if (this.#currentNum.includes('.')) return;
        if (this.#currentNum.length === 0) {
          str = '0' + str;
          for (const letter of str) {
            this.#currentNum.push(letter);
          }
          this.#units.push(str);
        } else {
          this.#currentNum.push(str);
        }
      }
      if (/[+ㅡ×÷%.]/.test(this.#lastUnit()) || this.#units.length === 0) return;
    } else {
      if (this.#currentNum.length === MAX_LEN) return;
      if (this.#lastCurrentNum() === '0' && this.#currentNum.length === 1) return;
      this.#currentNum.push(str);
    }
    this.#units.push(str);
  }

  delete() {
    this.#units.pop();
  }

  clear() {
    this.#units = [];
  }

  reverse() {
    console.log('reverse unit');
  }

  calculate() {
    console.log('calculate units');
  }

  getFormula() {
    return this.#units.join('');
  }
}

export default Calculator;
