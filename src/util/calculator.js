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

  #operate(num1, num2, operator) {
    if (operator === '+') {
      return num1 + num2;
    } else if (operator === '-') {
      return num1 - num2;
    } else if (operator === '*') {
      return num1 * num2;
    } else if (operator === '/') {
      return num1 / num2;
    } else {
      return num1 % num2;
    }
  }

  #createPostfix() {
    let operatorStack = [];
    let postFix = [];
    let negative = [];
    let num = [];
    let isNegative = false;
    for (let unit of this.#units) {
      if (/[+ㅡ×÷%]/.test(unit)) {
        if (num.length !== 0) {
          postFix.push(num.join(''));
          num = [];
        }
        switch (unit) {
          case 'ㅡ':
            unit = '-';
            break;
          case '×':
            unit = '*';
            break;
          case '÷':
            unit = '/';
            break;
        }
        if (operatorStack.length === 0) {
          operatorStack.unshift(unit);
          continue;
        }
        switch (this.#compareOpPriority(operatorStack.at(0), unit)) {
          case true:
            operatorStack.unshift(unit);
            continue;
          case false: {
            const tmpStackOperator = operatorStack.shift();
            postFix.push(tmpStackOperator);
            operatorStack.unshift(unit);
            continue;
          }
          default:
            operatorStack.unshift(unit);
            continue;
        }
      } else if (unit === '(') {
        isNegative = !isNegative;
      } else if (unit === ')') {
        negative.push(unit);
        const negativeConverted = negative.join('').replaceAll(/[()]/g, '');
        postFix.push(negativeConverted);

        isNegative = !isNegative;
        negative = [];
        continue;
      }
      if (isNegative) {
        negative.push(unit);
      } else {
        num.push(unit);
      }
    }
    if (num.length !== 0) {
      postFix.push(num.join(''));
      num = [];
    }
    for (const operator of operatorStack) {
      postFix.push(operator);
    }
    return postFix;
  }

  #getOpPriority(op) {
    switch (op) {
      case '*':
      case '/':
      case '%':
        return 2;
      case '+':
      case '-':
        return 1;
    }
  }

  #compareOpPriority(stackOp, currOp) {
    const stackOpPriority = this.#getOpPriority(stackOp);
    const currOpPriority = this.#getOpPriority(currOp);
    if (stackOpPriority < currOpPriority) {
      return true;
    } else {
      return false;
    }
  }

  insert(str) {
    if (str === '()') {
      alert('아직 구현하지 못한 기능입니다.');
      return;
    }

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
    let result = [];
    const postfix = this.#createPostfix();
    for (const unit of postfix) {
      if (/[-+*/%]/.test(unit)) {
        const num2 = parseFloat(result.shift());
        const num1 = parseFloat(result.shift());
        result.unshift(this.#operate(num1, num2, unit));
      } else {
        result.unshift(unit);
      }
    }
    const resultConverted = String(result[0]).split('');
    this.#units = [...resultConverted];
    this.#currentNum = [...resultConverted];
    return result[0];
  }

  getFormula() {
    return this.#units.join('');
  }
}

export default Calculator;
