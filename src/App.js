import Host from './Host.js';
import Vendor from './Vendor.js';

class App {
  async play() {
    const tickets = await Vendor.isssueTickets();
    const { winningNumbers, lotto } = await Host.enrollWinningNumbers();
    const bonusNumber = await Host.enrollBonusNumber(winningNumbers);
    lotto.getWinningResult(tickets, bonusNumber);
  }
}
const app = new App();
app.play();
export default App;
