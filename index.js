// index.js

function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function generateConsecutivePrimes(count) {
    const consecutivePrimes = [];
    let number = 2;
    while (consecutivePrimes.length < count) {
      if (isPrime(number)) {
        consecutivePrimes.push(number);
      }
      number++;
    }
    return consecutivePrimes;
  }
  
  const count = 10;
  const consecutivePrimes = generateConsecutivePrimes(count);
  console.log(`Consecutive prime numbers count ${count}:`, consecutivePrimes);
  