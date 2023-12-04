import { LOTTO_RULE } from './constants/constants';

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
    if (numbers.length !== LOTTO_RULE.pickableNumbers) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  static isUniqueNumbers(numbers) {
    if (new Set(numbers).size !== LOTTO_RULE.pickableNumbers) {
      throw new Error('[ERROR] 각 로또 번호는 중복될 수 없습니다.');
    }
  }

  static isUniqueNumber(winningNumbers, number) {
    if (winningNumbers.includes(number)) {
      throw new Error('[ERROR] 로또 번호와 중복된 수는 입력 불가합니다.');
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
      throw new Error('[ERROR] 로또 번호는 1-45 사이의 정수만 가능합니다.');
    }
  }

  static isInRange(number) {
    if (number < LOTTO_RULE.minNum || number > LOTTO_RULE.maxNum) {
      throw new Error('[ERROR] 로또 번호는 1-45 사이의 정수만 가능합니다.');
    }
  }

  static isDivisible(paid) {
    if (paid < LOTTO_RULE.ticketPrice || paid % LOTTO_RULE.ticketPrice !== 0) {
      throw new Error('[ERROR] 1000원 단위로 구매 가능합니다.');
    }
  }
}
