class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    this.#amount += amount;
  }

  withdraw(amount) {
    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }
}

class BankAccountVip extends BankAccount {
  constructor(initialAmount) {
  super(initialAmount);
}  

  calcInterest(amount) {
    let interest= (amount*3)/100;
      return amount + interest;
    }
    
  deposit(amount){
    if(amount>= 1000) {
      super.deposit(this.calcInterest(amount));
    } else {
      super.deposit(amount);
    } 
    }
}


const bankAccountVip = new BankAccountVip(1000);
bankAccountVip.deposit(500);
bankAccountVip.deposit(1200);
bankAccountVip.withdraw(800);
bankAccountVip.deposit(3500);
bankAccountVip.view();
