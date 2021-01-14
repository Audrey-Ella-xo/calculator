const Calculate = (data, btnName) => {
    let { total, next, operation } = data;

    switch (btnName) {
        case 'AC':
            total = null;
            next = null;
            operation = null
            break;
        case '+':
        case '-':
        case 'x':
        case '÷':
        case '%':
            if(!total) break;
            if(next && operation) {
                total = operate(total, next, operation);
            }
            operation = btnName;
            break;
        case '.':
            if (total && !total.split('').includes('.') && !operation ){
                total = `${total}${btnName}`
            }
            else if(next){
                next += btnName;
            }
            else {
                next = `0${btnName}`
            }
            break;
        case '=':
            if(total && next){
                total = operation(total, next, operation);
                next = null
                operation = null
            }
            break;
        case '+/-':
            if(total){
                total *= -1;
            } else if(next){
                next *= -1;
            }
            break;

        default:
            if (next){
                next += btnName;
            }else {
                next = btnName;
            }
            break;
    }

    return { total, next, operation }
}

export default Calculate;