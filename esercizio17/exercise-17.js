function calculate() {
    let num = 0;
    return {
        add(param){
            num += param;
            return this;
        },

        multiply(param) {
            num *= param;
            return this;
        },

        sub(param){
            num -= param;
            return this;
        },

        divide(param){
            num /= param;
            return this;
        },
        
        printResult() {
        console.log (num);
        }
    }
}


const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7