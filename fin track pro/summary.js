let currentBalance = document.querySelector(".currentbalance");
let totalIncome = document.querySelector(".totalincome");
let totalExpense = document.querySelector(".totalexpense");

function updateSummary() {
  let income = 0;
  let expense = 0;
  let balance = 0;

  transactionsArr.forEach(function (transaction) {
  
    if (transaction.type == "income") {
      income += transaction.amount;
    } else {
      expense += transaction.amount;
      expense = `${expense}`
    }
  });

  balance = income - expense;

  currentBalance.textContent = `$${balance}`;
    totalIncome.textContent = `$${income}`;
    totalExpense.textContent = `$${expense}`;
}
updateSummary();