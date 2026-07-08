// This file is intentionally small so you can write the real app logic yourself.
// Suggested starting points:
// 1. Open and close #transactionModal.
// 2. Save transactions in an array.
// 3. Render rows inside #transactionTableBody.
// 4. Update #displayBalance, #displayIncome, #displayExpense, and #displayCount.

let openAddModalBtn = document.querySelector("#openAddModalBtn");
let transactionModal = document.querySelector("#transactionModal");
let closeModalBtn = document.querySelector("#closeModalBtn");

openAddModalBtn.addEventListener("click", function () {
  transactionModal.classList.add("active");
});

closeModalBtn.addEventListener("click", function () {
  transactionModal.classList.remove("active");
});
