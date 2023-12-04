import Validation from './Validation.js';
import { LOTTO_RULE, PRIZE } from './constants/constants.js';
import OutputView from './views/OutputView.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Validation.validateLotto(numbers);
  }

  getWinningResult(tickets, bonusNumber) {
    const result = this.#calculateWinningPrize(tickets, bonusNumber);
    OutputView.printMatchedResult(result);
    const profit = this.#calculateTotalEarning(result);
    const profitabiltity = this.#calculateProfitability(tickets, profit);
    OutputView.printProfitability(profitabiltity);
  }

  #getInitializedResult() {
    return {
      three: 0,
      four: 0,
      five: 0,
      bonusFive: 0,
      six: 0,
    };
  }

  #calculateWinningPrize(tickets, bonusNumber) {
    const result = this.#getInitializedResult();
    tickets.forEach((ticket) => {
      const matched = ticket.filter((number) => this.#numbers.includes(number));
      const isBonus = ticket.includes(bonusNumber);
      if (matched.length === 3) result.three += 1;
      if (matched.length === 4) result.four += 1;
      if (matched.length === 5 && !isBonus) result.five += 1;
      if (matched.length === 5 && isBonus) result.bonusFive += 1;
      if (matched.length === 6) result.six += 1;
    });
    return result;
  }

  #calculateTotalEarning(result) {
    const { three, four, five, bonusFive, six } = result;
    const total =
      three * PRIZE.three +
      four * PRIZE.four +
      five * PRIZE.five +
      bonusFive * PRIZE.bonusFive +
      six * PRIZE.six;
    return total;
  }

  #calculateProfitability(tickets, profits) {
    const profitabiltity =
      (profits / (tickets.length * LOTTO_RULE.ticketPrice)) * 100;
    return profitabiltity.toFixed(1);
  }
}

export default Lotto;
