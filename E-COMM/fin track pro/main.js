let dashBoardBtn = document.querySelector('.dashbtn')
let centerSection = document.querySelector('.centersection')
let settingsBtn = document.querySelector('.settingbtn')
let settingSection = document.querySelector('.settingsection')
let transactionBtn = document.querySelector('.transactionbtn')
let addTransactionInterface = document.querySelector('.addtransactioninterface')
let closeBox = document.querySelector('.closebox')
let save = document.querySelector('.save')
let formTrans = document.querySelector('.formtrans')
let alltransactionBtn = document.querySelector('.alltransactionbtn')
let allTransactionInterface = document.querySelector('.alltransactioninterface')

settingsBtn.addEventListener('click', function () {
    centerSection.classList.add('displayclass')
    allTransactionInterface.classList.add('displayclass')
    settingSection.classList.remove('displayclass')

    // settingSection.classList.remove('displayclass')
})
dashBoardBtn.addEventListener('click', function () {
    centerSection.classList.remove('displayclass')

})

alltransactionBtn.addEventListener('click', function () {
    allTransactionInterface.classList.remove('displayclass')
    settingSection.classList.add('displayclass')
    centerSection.classList.add('displayclass')

})

closeBox.addEventListener('click', function () {
    addTransactionInterface.style.display = 'none'
})
transactionBtn.addEventListener('click', function () {
    addTransactionInterface.style.display = 'flex'

})

let expense = document.querySelector('.expense')
let desc = document.querySelector('.desc input')
let amount = document.querySelector('.amount input')
let date = document.querySelector('.date input')
let category = document.querySelector('.forthsection select')

let transactionsArr = JSON.parse(localStorage.getItem('transaction')) ?? []

formTrans.addEventListener('submit', function (e) {
    e.preventDefault()

    let typeVal = expense.value
    let descVal = desc.value
    let amountVal = amount.value
    let dateVal = date.value
    let categoryVal = category.value

    if (descVal.trim() === "") {
        alert('all field should be filled')
        return
    }

    if (amountVal < 0) {
        alert('please fil correct amount')
        return
    }

    let transactionObj = {
        type: typeVal,
        desc: descVal,
        amount: Number(amountVal),
        date: dateVal,
        category: categoryVal,
    }

    transactionsArr.push(transactionObj)
    localStorage.setItem('transaction', JSON.stringify(transactionsArr))

    formTrans.reset()
    addTransactionInterface.style.display = 'none'      
    updateTransactions()
    updateTransactionList()
    updateSummary()
    updateChart();


})

let transaction = document.querySelector('.transaction')
function updateTransactions() {
    transaction.textContent = transactionsArr.length
}
updateTransactions()


let transactionList = document.querySelector('.transactionlist')
function updateTransactionList() {
    transactionList.innerHTML = ""
    transactionsArr.forEach(function (transaction, index) {
        transactionList.innerHTML += ` <div class="transaction">
                            <h3>${transaction.date}</h3>
                            <h3>${transaction.desc}</h3>
                            <h3>${transaction.category}</h3>
                            <h3>${transaction.amount}</h3>
                            <h3><svg class="deletetransactionbtn" data-index='${index}' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="30"
                                    color="#991b1b" fill="none" stroke="#991b1b" stroke-width="2"
                                    stroke-linecap="round">
                                    <path
                                        d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5">
                                    </path>
                                    <path
                                        d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5">
                                    </path>
                                </svg></h3>
                        </div>`
    })
}
updateTransactionList()

transactionList.addEventListener("click", function (e) {

    if (e.target.classList.contains("deletetransactionbtn")) {

        let index = e.target.dataset.index;
        transactionsArr.splice(index, 1);

        localStorage.setItem("transaction", JSON.stringify(transactionsArr));

        updateTransactions();
        updateTransactionList();
        updateSummary()
        updateChart();

    }

});

let resetBtn = document.querySelector('.resetdatasection button')
resetBtn.addEventListener('click', function(){

    let confirmReset = confirm("Are you sure you want to delete all transactions?");

    if(!confirmReset){
        return;
    }

    transactionsArr = [];
    localStorage.removeItem('transaction');

    updateTransactions();
    updateTransactionList();
    updateSummary();
    updateChart();

});