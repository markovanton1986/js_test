import { checkForMatchPayment, checkByAlgorithmLuna } from './checkNumberCard';

export default class Validator {
  constructor() {
    this.input = document.getElementById('input');
    this.button = document.getElementById('button');
    this.checkInput = this.checkInput.bind(this);
    this.checkButton = this.checkButton.bind(this);
  }

  init() {
    this.checkInput();
    this.checkButton();
  }

  checkInput() {
    this.input.addEventListener('input', () => {
      this.informer();
      const foundPaymentSystem = checkForMatchPayment(this.input.value);
      if (foundPaymentSystem) {
        this.highlightPaymentSystem(foundPaymentSystem);
      } else {
        this.removeClassDisableFromIcons();
      }
    });
  }

  checkButton() {
    this.button.addEventListener('click', () => {
      const isValidation = checkByAlgorithmLuna(this.input.value);
      if (isValidation === true) {
        this.informer('Такая карта существует!', 'green');
      } else {
        this.informer('Такой карты не существует!', 'red');
      }
    });
  }

  informer(text, color) {
    const informer = document.querySelector('.validator__informer');
    if (!informer) return;
    if (!text) {
      informer.classList.remove('_green', '_red');
      informer.textContent = '';
      return;
    }
    informer.textContent = text;
    informer.classList.add(`_${color}`);
  }

  removeClassDisableFromIcons() {
    const icons = document.querySelectorAll('.validator__card');
    for (const icon of icons) {
      icon.classList.remove('_disable');
    }
    return icons;
  }

  highlightPaymentSystem(paymentSystem) {
    const icons = this.removeClassDisableFromIcons();
    const iconPaymentSystem = document.getElementById(paymentSystem);
    if (iconPaymentSystem) {
      for (const icon of icons) {
        if (icon !== iconPaymentSystem) icon.classList.add('_disable');
      }
    }
  }
}