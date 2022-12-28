astring = "fruit"

// solution 1 -> array -> reverse -> return arr

revString = (_arr) => {
// array.from or split('')
  console.log(Array.from(astring).reverse().join(''))
}

revString(astring)


// solution 2 -> create an empty string, count backwards pushing it

revStringEmpty = (_str = String) => {
    let buffer = '';
    for (i = _str.length -1; i >= 0; i--) {
        buffer += _str[i]
    }
    console.log(buffer) // join them together i.e '' no space
}
revStringEmpty(astring)

// solution 3 recursion (slow, not good)
function reverseString(str) {
    if (str === "") 
      return "";
    
    else
      return reverseString( str.substr(1) ) + str.charAt(0) 
}
// abc
// proc1 ret reverseString(bc) + a
// proc2 ret reverseString(c) + b
// proc3 ret reverseString('') + c 
// proc4 ret ''
// after proc4, we eval in opposite direction
// proc4 ret ''
// proc3 ret c + b
// proc2 ret cb + a
// proc1 ret cba