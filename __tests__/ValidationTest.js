import Validation from '../src/Validation';
import { ERROR_MESSAGE } from '../src/constants/constants';

describe('기능 테스트', () => {
  const dupCases = [[[1, 2, 3, 4, 5, 6]], [[1, 2, 13, 14, 35, 4]]];
  test.each(dupCases)(
    '로또 번호가 중복되지 않을 시, 예외 처리되지 않는다.',
    (numbers) => {
      expect(() => {
        Validation.isUniqueNumbers(numbers);
      }).not.toThrow(ERROR_MESSAGE.mustUniqueNumbers);
    },
  );
  test('보너스 번호가 중복되지 않을 시, 예외 처리되지 않는다.', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonus = 7;
    expect(() => {
      Validation.isUniqueNumber(winningNumbers, bonus);
    }).not.toThrow(ERROR_MESSAGE.isUniqueNumber);
  });
  const SixNumbers = [[[1, 2, 3, 5, 6, 7]], [[1, 2, 13, 14, 35, 4]]];
  test.each(SixNumbers)(
    '로또 번호가 6개일 시, 예외 처리되지 않는다.',
    (numbers) => {
      expect(() => {
        Validation.isSixNumbers(numbers);
      }).not.toThrow(ERROR_MESSAGE.isSixNumbers);
    },
  );
  test.each(SixNumbers)(
    '번호가 1-45 사이일 시, 예외 처리 되지 않는다.',
    (numbers) => {
      expect(() => {
        Validation.isWithinRange(numbers);
      }).not.toThrow(ERROR_MESSAGE.isWithinRange);
    },
  );
  const paidCases = [1000, 25000, 540000];
  test.each(paidCases)(
    '1000원으로 나누어질 시, 예외처리 되지 않는다.',
    (paid) => {
      expect(() => {
        Validation.isDivisible(paid);
      }).not.toThrow(ERROR_MESSAGE.isDivisible);
    },
  );
});

describe('예외 테스트', () => {
  const dupCases = [[[1, 2, 3, 3, 4, 5]], [[1, 2, 13, 13, 13, 4]]];
  test.each(dupCases)('로또 번호가 중복될 시, 예외 처리', (numbers) => {
    expect(() => {
      Validation.isUniqueNumbers(numbers);
    }).toThrow(ERROR_MESSAGE.isUniqueNumbers);
  });
  test('보너스 번호가 중복될 시, 예외 처리', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonus = 6;
    expect(() => {
      Validation.isUniqueNumber(winningNumbers, bonus);
    }).toThrow(ERROR_MESSAGE.isUniqueNumber);
  });
  const lessThanSixNumbers = [[[1, 2, 3, 5, 6]], [[1, 2, 13, 14, 35, 4, 7]]];
  test.each(lessThanSixNumbers)(
    '로또 번호가 6개가 아닐 시, 예외 처리',
    (numbers) => {
      expect(() => {
        Validation.isSixNumbers(numbers);
      }).toThrow(ERROR_MESSAGE.isSixNumbers);
    },
  );
  const outOfRangeCases = [[['h', 2, 390, 5, 6, 77]], [[1, '', 13, 14, 85, 4]]];
  test.each(outOfRangeCases)(
    '번호가 1-45 사이가 아닐시, 예외 처리',
    (numbers) => {
      expect(() => {
        Validation.isWithinRange(numbers);
      }).toThrow(ERROR_MESSAGE.isWithinRange);
    },
  );
  const paidCases = [100, 2500, 54002];
  test.each(paidCases)(
    '1000원으로 나누어질 시, 예외처리 되지 않는다.',
    (paid) => {
      expect(() => {
        Validation.isDivisible(paid);
      }).toThrow(ERROR_MESSAGE.isDivisible);
    },
  );
});
