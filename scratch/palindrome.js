//find palindromes
//palinedrome("abba") === true)
//palinedrome("abba") === true)

isPlaindrome = (str) => {
    let rev = str.split('').reverse().join('')
    console.log(str === rev)
}

isPlaindrome("abba");

// (function (str) {
//     console.log(str)
// })("test");

// ((x) => console.log(x))("hi");