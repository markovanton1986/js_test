const numbersForValidation = {
    30: 'Diners',
    31: 'JCB',
    35: 'JCB',
    36: 'Diners',
    34: 'AmericanExpress',
    37: 'AmericanExpress',
    51: 'MasterCard',
    52: 'MasterCard',
    53: 'MasterCard',
    54: 'MasterCard',
    55: 'MasterCard',
    60: 'Discover',
    62: 'Discover',
    64: 'Discover',
    65: 'Discover',
  };
  
  export function checkForMatchPayment(number) {
    const firstNumber = Number(number.slice(0, 1));
    if (firstNumber === 4) return 'Visa';
    if (firstNumber === 2) return 'Mir';
    const firstTwoNumbers = Number(number.slice(0, 2));
    if (numbersForValidation[firstTwoNumbers] !== undefined)
      return numbersForValidation[firstTwoNumbers];
    return false;
  }
  
  export function checkByAlgorithmLuna(number) {
    if (number.length < 13 || number.length > 19) return false;
    const numberArray = number.split('');
    for (let i = 0; i < numberArray.length; i += 1) {
      const toNumber = Number(numberArray[i]);
      if (i === 0 || i % 2 === 0) {
        if (toNumber * 2 > 9) {
          numberArray[i] = toNumber * 2 - 9;
        } else {
          numberArray[i] = toNumber * 2;
        }
      } else {
        numberArray[i] = toNumber;
      }
    }
    let sum = 0;
    for (const num of numberArray) {
      sum += num;
    }
    if (sum % 10 === 0) return true;
    return false;
  }