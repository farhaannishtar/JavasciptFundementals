 /*
    Print fibonacci sequence:
    Each number is the sum of the two preceding 
    ones, starting from 0 and 1

    The sequence starts: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
*/
function fibonacci(fiboIndex) {
    let num1 = 0, num2 = 1, nextTerm;
    for (let i = 0; i <= fiboIndex; i++) {
        console.log(num1);
        nextTerm = num1 + num2;
        num1 = num2;
        num2 = nextTerm;
    }
}
fibonacci(14);