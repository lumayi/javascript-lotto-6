import Computer from './Computer.js';
import Validation from './Validation.js';
import { LOTTO_RULE } from './constants/constants.js';
import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';

export default class Vendor {
  static async isssueTickets() {
    const tickets = await Vendor.getNumberOfTickets();
    const issuedTickets = [];
    for (let i = 0; i < tickets; i += 1) {
      const ticket = Computer.getRandomSixNumbers();
      ticket.sort((a, b) => a - b);
      issuedTickets.push(ticket);
    }
    OutputView.printTickets(issuedTickets);
    return issuedTickets;
  }

  static async getNumberOfTickets() {
    try {
      const paid = await InputView.getPurchaseAmount();
      Validation.validatePaidMoney(paid);
      return paid / LOTTO_RULE.ticketPrice;
    } catch (error) {
      OutputView.printErrors(error);
      return Vendor.getNumberOfTickets();
    }
  }
}
