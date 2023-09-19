// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
  
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
  
    return true;
  }
  
  // Calculate the sum of the first 20 prime numbers
  let sum = 0;
  let count = 0;
  let num = 2;
  
  while (count < 20) {
    if (isPrime(num)) {
      sum += num;
      count++;
    }
    num++;
  }
  
  console.log("The sum of the first 20 prime numbers is:" + sum);
  