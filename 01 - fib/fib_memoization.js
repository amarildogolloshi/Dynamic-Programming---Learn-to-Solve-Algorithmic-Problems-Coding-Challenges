/*
    Write a function fib(n) that takes in a number as an argument. 
    The function should return the n-th number of the Fibonacci sequence. 
    
    The 0th number of the sequence is 0. 
    The 1st number of the sequence is 1. 
    
    To generate the next number of the sequence, we sum the previous two.
*/
const fib = (n, memo = {}) => {
    
    if (n in memo) 
        return memo[n];
    
    if (n <= 2)
        return 1
    
    memo[n] = fib(n-1, memo) + fib(n - 2, memo); 
    return memo[n];
}

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(50));