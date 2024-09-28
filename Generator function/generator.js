function* generatePrimes(limit) {
  // Helper function to check if a number is prime
  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }

  // Generate prime numbers
  for (let num = 2; num <= limit; num++) {
    if (isPrime(num)) {
      yield num;
    }
  }
}

// Example usage:
const limit = 30;
const primeGenerator = generatePrimes(limit);

console.log(`Prime numbers up to ${limit}:`);
for (const prime of primeGenerator) {
  console.log(prime);
}

// Alternative usage: convert to array
const primes = [...generatePrimes(limit)];
console.log(`Array of primes up to ${limit}:`, primes);
