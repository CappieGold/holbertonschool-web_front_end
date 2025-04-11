function countPrimeNumbers() {
    let count = 0;
    for (let i = 2; i <= 100; i++) {
      let isPrime = true;
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        count++;
      }
    }
    return count;
  }
  
  setTimeout(() => {
    const iterations = 100;
    const startTime = performance.now();
  
    let totalPrimes;
    for (let k = 0; k < iterations; k++) {
      totalPrimes = countPrimeNumbers();
    }
    
    const endTime = performance.now();
    const executionTime = endTime - startTime;
    
    console.log(`Execution time of calculating prime numbers 100 times was ${executionTime} milliseconds.`);
  }, 0);
  