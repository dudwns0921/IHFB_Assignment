import Calculator from './calculator';

export function initCal() {
  const cal = new Calculator();
  window['cal'] = cal;
}
