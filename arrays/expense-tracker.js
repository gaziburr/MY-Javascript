const account = {
    name: 'Gazibur rahman',
    expense: [],
    income: [],
    addExpense: function(description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function(description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function() {
        let totalExpenses = 0
        let totalIncome = 0
        let accountBalance = 0

        this.expenses.forEach(function(expense) {
            totalExpenses = totalExpenses + expanse.amount
        })

        this.income.forEach(function(income) {
            totalIncome = totalIncome + income.amount
        })

        totalBalance = totalIncome + totalExpenses

        return `${this.name}has a balance of $${accountBalnace}.$${totalIncome} in income.$${totalExpenses} in expense.`
    }
}

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('job', 1000)
console.log(account.getAccountSummary())