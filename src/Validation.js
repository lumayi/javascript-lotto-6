import { ERROR_MESSAGE, LOTTO_RULE } from './constants/constants';

export default class Validation {
  static validateLotto(numbers) {
    Validation.isSixNumbers(numbers);
    Validation.isUniqueNumbers(numbers);
    Validation.isWithinRange(numbers);
  }

  static validateBonus(winningNumbers, bonus) {
    Validation.isInteger(bonus);
    Validation.isInRange(bonus);
    Validation.isUniqueNumber(winningNumbers, bonus);
  }

  static validatePaidMoney(paid) {
    Validation.isInteger(paid);
    Validation.isDivisible(paid);
  }

  static isSixNumbers(numbers) {
    if (numbers.length !== LOTTO_RULE.mustPickNumbers) {
      throw new Error(ERROR_MESSAGE.isSixNumbers);
    }
  }

  static isUniqueNumbers(numbers) {
    if (new Set(numbers).size !== LOTTO_RULE.mustPickNumbers) {
      throw new Error(ERROR_MESSAGE.mustUniqueNumbers);
    }
  }

  static isUniqueNumber(winningNumbers, number) {
    if (winningNumbers.includes(number)) {
      throw new Error(ERROR_MESSAGE.mustUniqueNumber);
    }
  }

  static isWithinRange(numbers) {
    numbers.forEach((number) => {
      Validation.isInteger(number);
      Validation.isInRange(number);
    });
  }

  static isInteger(number) {
    if (!Number.isInteger(number)) {
      throw new Error(ERROR_MESSAGE.isWithinRange);
    }
  }

  static isInRange(number) {
    if (number < LOTTO_RULE.minNum || number > LOTTO_RULE.maxNum) {
      throw new Error(ERROR_MESSAGE.isWithinRange);
    }
  }

  static isDivisible(paid) {
    if (paid < LOTTO_RULE.ticketPrice || paid % LOTTO_RULE.ticketPrice !== 0) {
      throw new Error(ERROR_MESSAGE.isDivisible);
    }
  }
}
