/* 
    Palindromic number
    121, 2332 - reverse is same
    
    1) Enter a number then check if it is palindromic number or not (Done)

    2) Print numbers that are palindromic 1-1000  (101 - 999) (In Progress)
*/

// 1) Enter a number then check if it is palindromic number or not 
function checkPalindrome(num) {
    let str = num.toString();
    let j = str.length - 1;
    for (let i = 0; i <= Math.floor((str.length - 1) / 2); i++) {
        // console.log(i, j);
        if (str[i] == str[j]) j--;
        else break;
    }
    if (j <= ((str.length - 1) / 2)) {
        console.log(str + ' is a palindromic number.');
    } else {
        console.log(str + ' is not a palindromic number.');
    }
}

checkPalindrome(1551);

// 2) Print numbers that are palindromes from 1 to the specified limit. 
function printPalindromicNumbers(limit) {
    for (let i = 0; i < limit; i++) {
        let str = i.toString();    
        let j = str.length - 1;
        
        for (let i = 0; i <= Math.floor((str.length - 1) / 2); i++) {
            if (str[i] == str[j]) j--;
            else break;
        }
        if (j <= ((str.length - 1) / 2)) {
            console.log(str + ' is a palindromic number.');
        }
    }
}
printPalindromicNumbers(200);