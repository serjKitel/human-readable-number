module.exports = function toReadable (number) {

    let firstNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let secondNumbers = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let thirdNumbers = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let hundreds = Math.floor(number / 100);
    let dozens = number % 100;
    let units = dozens % 10;
    let result = [];

    if (number === 0)
        return 'zero';

    if (hundreds > 0) {
        result.push(firstNumbers[hundreds] + ' hundred');
    }

    if (dozens >= 20) {
        result.push(thirdNumbers[Math.floor(dozens / 10)]);
        if (units !== 0) {
            result.push(firstNumbers[units]);
        }
    }
    else if (dozens >= 10) {
        result.push(secondNumbers[dozens % 10]);
    }
    else if (dozens !== 0) {
        result.push(firstNumbers[units]);
    }

    return result.join(' ');
    
}
