class BankAccount {
    constructor(saldo){
        this.balance = saldo;
        console.log(`Il tuo saldo iniziale è ${this.balance}`)
    }

    deposit(money) {
        this.balance += money;
        console.log(`Il tuo saldo attuale è ${this.balance}`)
    }

    withdraw(money){
        this.balance -= money;
        console.log(`Il tuo saldo attuale è ${this.balance}`)
    }

    view(){
        console.log(`Il tuo saldo finale è ${this.balance}`)
    }
}


const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();