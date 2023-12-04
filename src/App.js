import Host from './Host.js';
import Lotto from './Lotto.js';
import Vendor from './Vendor.js';
import InputView from './views/InputView.js';

class App {
  async play() {
    const vendor = new Vendor();
    const tickets = await vendor.isssueTickets();
    const { winningNumbers, lotto } = await Host.enrollWinningNumbers();
    const bonusNumber = await Host.enrollBonusNumber(winningNumbers);
    lotto.getWinningResult(tickets, bonusNumber);
  }
}
const app = new App();
app.play();
export default App;
