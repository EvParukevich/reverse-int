module.exports = function reverse (n) {
    let revArrayNumber = String(n).split('').reverse();
    if (revArrayNumber[revArrayNumber.length - 1] !== '-') {
       return +revArrayNumber.join('')
    } else {
        revArrayNumber.pop();
        return +revArrayNumber.join('');
    }    
}
