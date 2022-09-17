const MAX_LEN = 12;

class Calculator {
  #units = [];
  #currentNum = [];

  #isLastUnitSign() {
    return /[+ㅡ×÷%.]/.test(this.#units[this.#units.length - 1]);
  }

  insert(str) {
    if (/[+ㅡ×÷%.]/.test(str)) {
      // 입력된 글자가 기호인지 판단
      if (/[+ㅡ×÷%]/.test(str)) {
        this.#currentNum = [];
        // 연산 기호일 경우 현재 숫자를 초기화
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
      if (this.#isLastUnitSign() || this.#units.length === 0) return;
    } else {
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
