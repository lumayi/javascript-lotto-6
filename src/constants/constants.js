const LOTTO_RULE = Object.freeze({
  ticketPrice: 1000,
  maxNum: 45,
  minNum: 1,
  mustPickNumbers: 6,
});
const PRIZE = Object.freeze({
  three: 5000,
  four: 50000,
  five: 150000,
  bonusFive: 30000000,
  six: 2000000000,
});
const ERROR_MESSAGE = Object.freeze({
  isSixNumbers: '[ERROR] 로또 번호는 6개여야 합니다.',
  mustUniqueNumbers: '[ERROR] 각 로또 번호는 중복될 수 없습니다.',
  mustUniqueNumber: '[ERROR] 로또 번호와 중복된 수는 입력 불가합니다.',
  isWithinRange: '[ERROR] 로또 번호는 1-45 사이의 정수만 가능합니다.',
  isDivisible: '[ERROR] 1000원 단위로 구매 가능합니다.',
});

export { LOTTO_RULE, PRIZE, ERROR_MESSAGE };
