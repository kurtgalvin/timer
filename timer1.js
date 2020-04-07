// we need all the numbers passed in as args
const numbers = process.argv.map(i => Number(i)).filter(n => {
  return Number.isInteger(n) && n >= 0
})

const timer = function(seconds) {
  const delay = seconds * 1000
  return setTimeout(() => {
    process.stdout.write('\x07');
  }, delay);
}

const timers = function(nums) {
  if (nums.length !== 0) {
    return nums.map(num => timer(num))
  }
}

timers(numbers)