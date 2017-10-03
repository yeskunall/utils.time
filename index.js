const ONE_SECOND = 1000;
const ONE_MINUTE = 60 * ONE_SECOND;
const ONE_HOUR = 60 * ONE_MINUTE;
const ONE_DAY = 24 * ONE_HOUR;

const seconds = x => x * ONE_SECOND;
const minutes = x => x * ONE_MINUTE;
const hours = x => x * ONE_HOUR;
const days = x => x * ONE_DAY;

module.exports = {
  ONE_SECOND,
  ONE_MINUTE,
  ONE_HOUR,
  ONE_DAY,
  seconds,
  minutes,
  hours,
  days,
};
