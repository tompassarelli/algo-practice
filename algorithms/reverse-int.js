let posnum = 987654321
let negnum = -987654321

// flip the '-' before returning
function reverse(num) {
    _rev = Array.from(num.toString()).reverse().join('')
    if (_rev.charAt(_rev.length-1) === '-') {
        _rev = '-' + _rev.substring(0, (_rev.length-1))
    }
    _rev = parseInt(_rev)
    return _rev;
}

function reverseSign(num) {
    if (num < 0) {
        // after we strip '-' out, reapply with *-1
        return -1*parseInt(Array.from(num.toString()).reverse().join(''))
    }
    return parseInt(Array.from(num.toString()).reverse().join(''))
}

console.log({
    negativeNum:reverseSign(negnum)
}) 
