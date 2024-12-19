export class BankAccount {
    balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    deposit(amount: number): void {
        this.balance = this.balance + amount;
    }
}

const bankAccount = new BankAccount(500);
bankAccount.deposit(100);// After fixing: will print 600
console.log(bankAccount.balance);
