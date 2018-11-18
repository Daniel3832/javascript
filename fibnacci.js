function fib(n){
    if(n == 1 || n == 2) 
        return 1
    else if(n > 2)
        return fib(n-1) + fib(n-2)
}

//dynamic programming
function fib2(n) {
    let fib = [];
    fib[0] = 1;
    fib[1] = 1;
    for (var i = 2; i < n; i++) {
        fib[i] = fib[i-2] + fib[i-1];
    }
    return fib[n-1];
}

console.log(fib2(6));

// for (var i = 0; i < 10; i++) {
//     console.log(fib2(i));  
// }