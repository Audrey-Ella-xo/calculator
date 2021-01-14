const Calculate = (data, btnName) => {
    const checkNumber = testNumber => /\d/.test(testNumber)
    const checkOperation = testOperation => /\+|-|x|÷|%/.test(testOperation)
    if(btnName == 'AC'){
        data.operation = null;
        data.next = null;
        data.total = null;
    }

    if(btnName == '.'){
        
    }

    if(btnName == '='){
        
    }

    if(btnName == '+/-'){
        
    }

    if(checkNumber(btnName)){
        if(data.next){
            data.next += btnName;
        }
    }

    if(checkOperation(btnName)){
        
    }
}

export default Calculate;