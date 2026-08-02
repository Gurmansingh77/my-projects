

let ctx = document.getElementById("cashFlowChart").getContext("2d");
let cashFlowChart;

function updateChart() {

    let income = 0;
    let expense = 0;

    transactionsArr.forEach(function (transaction) {

        if (transaction.type === "income") {
            income += transaction.amount;
        } else {
            expense += transaction.amount;
        }

    });

    if (cashFlowChart) {
        cashFlowChart.destroy();
    }

    cashFlowChart = new Chart(ctx, {

        type: "bar",

        data: {

            labels: ["Income", "Expense"],

            datasets: [
                {
                    label: "Income",
                    data: [income, null],
                    backgroundColor: "green"
                },
                {
                    label: "Expense",
                    data: [null, expense],
                    backgroundColor: "red"
                }
            ]

        },

        options: {
            responsive: true,
            maintainAspectRatio: false
        }

    });

}

updateChart();
