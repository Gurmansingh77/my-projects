let task = document.querySelector(".task")
let afterClickInterface = document.querySelector('.aftertaskclickinterface')
let taskInput = document.querySelector('.taskinput')
let taskForm = document.querySelector('.taskform')
let taskSection = document.querySelector('.tasksection')
let taskTitle = document.querySelector('.taskTitle')
let crossBtn = document.querySelector('.cross')
let deleteBtn = document.querySelector('.deletebtn')
let title = document.querySelector('.title')
let activeBtn = document.querySelector('.activebtn')
let alltask = document.querySelector('.alltask')
let completedBtn = document.querySelector('.completedbtn')

task.addEventListener('click', function () {
    afterClickInterface.style.display = 'flex'
})

let realTask = JSON.parse(localStorage.getItem("task"))
let tasks = realTask ?? []
let completedTaskArr = JSON.parse(localStorage.getItem("completedtasks")) ?? []

taskForm.addEventListener('submit', function (e) {
    e.preventDefault()

    taskSection.innerHTML = ""

    taskInputVal = taskInput.value

    if (taskInputVal.trim() === "") {
        alert('please fill the task')
        return
    }

    let task = {
        tasktitle: taskInputVal,
        completed: false
    }


    tasks.push(task)
    localStorage.setItem('task', JSON.stringify(tasks))
    // tasks = []


    renderTaskList()
})

function renderTaskList() {
    taskSection.innerHTML = "";
    taskInput.value = ""

    tasks.forEach(function (task, index) {
        taskSection.innerHTML += `<div class="tasks">
        <h2 class="tasktitle" style="font-size: small; font-weight: normal; ">${task.tasktitle}</h2>
        <div class="btns">
        <button class="donebtn" data-index="${index}">done</button>
        <button class="deletebtn" data-index="${index}">delete</button>
        </div>
        </div>`
    })
}

renderTaskList()

crossBtn.addEventListener('click', function () {
    afterClickInterface.style.display = 'none'

})

taskSection.addEventListener('click', function (e) {
    // console.log(e.target)
    let btnIndex = e.target.dataset.index
    if (e.target.classList.contains('deletebtn')) {
        tasks.splice(btnIndex, 1)
        localStorage.setItem("task", JSON.stringify(tasks))
        renderTaskList()
    }

    let doneBtnIndex = e.target.dataset.index

    if (e.target.classList.contains('donebtn')) {
        tasks[doneBtnIndex].completed = true

        let completedTask = tasks[doneBtnIndex]
        completedTaskArr.push(completedTask)

        tasks.splice(doneBtnIndex, 1)
        localStorage.setItem("task", JSON.stringify(tasks))
        localStorage.setItem("completedtasks", JSON.stringify(completedTaskArr))
        renderTaskList()

    }


    let comDelBtnIndex = e.target.dataset.index
    if (e.target.classList.contains('completeddelbtn')) {
        completedTaskArr.splice(comDelBtnIndex, 1)
        localStorage.setItem("completedtasks", JSON.stringify(completedTaskArr))
        taskSection.innerHTML = ""
        renderCompleteTask()
    }
})

function renderCompleteTask() {
    completedTaskArr.forEach(function (task, index) {
        taskSection.innerHTML += `<div class="tasks">
        <h2 class="tasktitle" style="font-size: small; font-weight: normal; ">${task.tasktitle}</h2>
        <div class="btns">
        <button class="completeddelbtn" data-index="${index}">delete</button>
        </div>
        </div>`
    })


}

completedBtn.addEventListener('click', function () {
    taskSection.innerHTML = ""
    title.textContent = 'Completed Tasks'
    renderCompleteTask()

})

alltask.addEventListener('click', function () {
    taskSection.innerHTML = ""
    title.textContent = 'Task List'
    renderTaskList()
})

activeBtn.addEventListener('click', function () {
    taskSection.innerHTML = ""
    title.textContent = 'Active Tasks'
    renderTaskList()
})