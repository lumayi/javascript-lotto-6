import Lotto from './Lotto.js';
import Validation from './Validation.js';
import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';

export default class Host {
  #lotto;

  constructor(lotto) {
    this.#lotto = lotto;
  }

  static async enrollWinningNumbers() {
    try {
      const winningNumbers = await InputView.getWinningNumbers();
      const lotto = new Lotto(winningNumbers);
      return { winningNumbers, lotto };
    } catch (error) {
      OutputView.printErrors(error);
      return Host.enrollWinningNumbers();
    }
  }

  static async enrollBonusNumber(winningNumbers) {
    try {
      const bonus = await InputView.getBonusNumber();
      Validation.validateBonus(winningNumbers, bonus);
      return bonus;
    } catch (error) {
      OutputView.printErrors(error);
      return Host.enrollBonusNumber(winningNumbers);
    }
  }
}
