const MAX_LEN = 12;

class Calculator {
  #units = [];
  #currentNum = [];
  #isReverse = false;

  #lastUnit() {
    return this.#units.at(-1);
  }

  #lastCurrentNum() {
    return this.#currentNum.at(-1);
  }

  #reverseCurrentNum() {
    if (this.#isReverse) {
      this.#currentNum = ['(', '-', ...this.#currentNum, ')'];
    } else {
      this.#currentNum.pop();
      this.#currentNum.shift();
      this.#currentNum.shift();
    }
  }

  insert(str) {
    if (/[+ㅡ×÷%.]/.test(str)) {
      if (/[+ㅡ×÷%]/.test(str)) {
        if (this.#lastUnit() === '.') {
          this.#units.pop();
          this.#currentNum.pop();
        }
        this.#currentNum = [];
        this.#isReverse = false;
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
        if (this.#isReverse) {
          this.#units.pop();
          this.#currentNum.pop();
          this.#units.push(str, ')');
          this.#currentNum.push(str, ')');
          return;
        }
      }
      if (/[+ㅡ×÷%.]/.test(this.#lastUnit()) || this.#units.length === 0) return;
    } else {
      if (this.#currentNum.length === MAX_LEN) return;
      if (this.#lastCurrentNum() === '0' && this.#currentNum.length === 1) {
        this.#units.pop();
        this.#currentNum.pop();
      }
      if (this.#isReverse) {
        this.#units.pop();
        this.#currentNum.pop();
        this.#units.push(str, ')');
        this.#currentNum.push(str, ')');
        return;
      }
      this.#currentNum.push(str);
    }
    this.#units.push(str);
  }

  delete() {
    this.#units.pop();
    this.#currentNum.pop;
  }

  clear() {
    this.#units = [];
    this.#currentNum = [];
  }

  reverse() {
    if (this.#currentNum.length === 0) return;
    this.#isReverse = !this.#isReverse;
    if (this.#units.length === this.#currentNum.length) {
      this.#units = [];
      this.#reverseCurrentNum();
      this.#units = JSON.parse(JSON.stringify(this.#currentNum));
    } else {
      let idx = -1;
      while (!/[+ㅡ×÷%]/.test(this.#units.at(idx))) {
        idx--;
      }
      this.#units = this.#units.slice(0, idx + 1);
      this.#reverseCurrentNum();
      for (const letter of this.#currentNum) {
        this.#units.push(letter);
      }
    }
  }

  calculate() {
    console.log('calculate units');
  }

  getFormula() {
    return this.#units.join('');
  }
}

export default Calculator;
