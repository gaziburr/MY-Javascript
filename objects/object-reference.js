let myAccount = {
    name: 'gazibur rahman',
    expanses: 0,
    income: 0
}
let addExpanse = function(account, amount) {
    account.expanses = account.expanses + amount
}
let addIncome = function(account, income) {
    account.income = account.income + income
}
let getAccountSummary = function(account) {
    let balance = account.income - account.expanses
    return `Account for ${account.name} has $${balance}.$${account.income } in income.$${account.expanses} in expanses.`
}
addIncome(myAccount, 2000)
addExpanse(myAccount, 2.50)
addExpanse(myAccount, 160)
console.log(getAccountSummary(myAccount))
resetAccount = myAccount
console.log(getAccountSummary(myAccount))