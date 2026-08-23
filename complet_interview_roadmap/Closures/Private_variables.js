// Closures can be used to create private state.

function BankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit(amount) {
            balance += amount;
        },

        withdraw(amount) {
            balance -= amount;
        },

        getBalance() {
            return balance;
        }
    };
}

const account = BankAccount(1000);

account.deposit(500);

console.log(account.getBalance()); // 1500

console.log(account.balance); // undefined

// balance cannot be directly accessed.

// account.balance = 50000;

// This creates a different property; it doesn't modify the closed-over balance.

// Why is this useful?

// Closures provide a simple way to achieve encapsulation/private state.

