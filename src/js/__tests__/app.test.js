import { checkForMatchPayment, checkByAlgorithmLuna } from '../checkNumberCard';

test.each([
  ['Visa', '4539804056541904'],
  ['Mir', '2202200188622201'],
  ['MasterCard', '5190967013969042'],
  ['Diners', '36123456780009'],
  ['JCB', '3112762153658293'],
  ['Discover', '6011235155346246'],
  ['AmericanExpress', '371023430676356'],
  [false, '0123456789'],
])('Функция checkForMatchPayment возвращает %s', (payment, number) => {
  const result = checkForMatchPayment(number);

  expect(result).toBe(payment);
});

test.each([
  ['false (при количестве цифр < 13)', false, '453980405654'],
  ['false (при количестве цифр > 19)', false, '45398040565434567843'],
  ['true (при валидном номере)', true, '2202200188622201'],
  ['false (при невалидном номере)', false, '5190967073969042'],
])('Функция checkByAlgorithmLuna возвращает %s', (message, result, number) => {
  const checkResult = checkByAlgorithmLuna(number);

  expect(checkResult).toBe(result);
});