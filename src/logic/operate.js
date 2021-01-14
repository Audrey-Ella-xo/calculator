import Big from 'big.js';

const Operate = (numOne, numTwo, operation) => {
    const num1 = Big(numOne);
    const num2 = Big(numTwo);

    let total;

    switch (operation) {
        case '+':
            total = num1.plus(num2)
            break;
        case '-':
            total = num1.minus(num2)
            break;
        case 'x':
            total = num1.times(num2)
            break;
        case '÷':
            total = num1 == 0 ? 'Error: Not divisible by zero' : num1.div(num2)
            break;
        case '%':
            total = num1.div(100)
            break;       
        default:
            break;
    }

    return total;
}

export default Operate