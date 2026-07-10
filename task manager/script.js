let input = document.querySelector(".input");
let addbtn = document.querySelector(".addbtn");
let clearBtn = document.querySelector(".clearbtn");
let alltasksection = document.querySelector(".alltasksection");
let taskcontainer = document.querySelector('.taskcontainer')

let total = document.querySelector(".total");
let pending = document.querySelector(".pending");

let totalTaskCount = document.querySelector(".totaltaskcount")
let completeTaskCount = document.querySelector(".completecount")
let pendingTaskCount = document.querySelector(".pendingcount")
let dashboardBtn = document.querySelector(".dashbordbtn")
let pendingBtn = document.querySelector('.pendingbtn')
let themeBtn = document.querySelector('.themebtn')

let completebBtn = document.querySelector('.completebtn')
let heading = document.querySelector('.heading')

let tasks = []
let completedTasksArr = []
let editIndex = null
let isDark = false

let savedTasks = localStorage.getItem("tasks");
let savedCompletedTasks = localStorage.getItem("completedTasksArr");
   if(savedTasks){
        tasks = JSON.parse(savedTasks)
    }
    if (savedCompletedTasks) {
        completedTasksArr = JSON.parse(savedCompletedTasks);
    }
    renderTasks()

    let savedTheme = localStorage.getItem("theme");

    if(savedTheme === 'dark'){
        themeBtn.innerHTML = ` <span>
        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25" color="#f5a623" fill="none" stroke="#f5a623" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21.5 14.0784C20.3003 14.7189 18.9301 15.0821 17.4751 15.0821C12.7491 15.0821 8.91792 11.2509 8.91792 6.52485C8.91792 5.06986 9.28105 3.69968 9.92163 2.5C5.66765 3.49698 2.5 7.31513 2.5 11.8731C2.5 17.1899 6.8101 21.5 12.1269 21.5C16.6849 21.5 20.503 18.3324 21.5 14.0784Z"></path>
        </svg>
        </span>
        Dark Mode</button>`

        document.body.style = 'background-color: var(--dark-body-background-color);'
    }
    if(savedTheme === 'light'){
         themeBtn.innerHTML = ` <span>

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25"
                                    color="#f5a623" fill="#f5a623" stroke="#f5a623" stroke-width="3"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path
                                        d="M16.9991 12C16.9991 14.7614 14.7605 17 11.9991 17C9.23766 17 6.99908 14.7614 6.99908 12C6.99908 9.23858 9.23766 7 11.9991 7C14.7605 7 16.9991 9.23858 16.9991 12Z">
                                    </path>
                                    <path
                                        d="M12.1247 3.25H11.9997M12.1242 20.75H11.9992M20.75 12.125V12M3.25 12.125V12M18.2752 5.90098L18.1868 5.81259M5.90051 18.275L5.81212 18.1866M18.0987 18.2756L18.187 18.1872M5.72429 5.9012L5.81267 5.81282M12.2497 3.25C12.2497 3.38807 12.1378 3.5 11.9997 3.5C11.8616 3.5 11.7497 3.38807 11.7497 3.25C11.7497 3.11193 11.8616 3 11.9997 3C12.1378 3 12.2497 3.11193 12.2497 3.25ZM12.2492 20.75C12.2492 20.8881 12.1373 21 11.9992 21C11.8611 21 11.7492 20.8881 11.7492 20.75C11.7492 20.6119 11.8611 20.5 11.9992 20.5C12.1373 20.5 12.2492 20.6119 12.2492 20.75ZM20.75 12.25C20.6119 12.25 20.5 12.1381 20.5 12C20.5 11.8619 20.6119 11.75 20.75 11.75C20.8881 11.75 21 11.8619 21 12C21 12.1381 20.8881 12.25 20.75 12.25ZM3.25 12.25C3.11193 12.25 3 12.1381 3 12C3 11.8619 3.11193 11.75 3.25 11.75C3.38807 11.75 3.5 11.8619 3.5 12C3.5 12.1381 3.38807 12.25 3.25 12.25ZM18.3636 5.98937C18.266 6.087 18.1077 6.087 18.01 5.98937C17.9124 5.89174 17.9124 5.73345 18.01 5.63582C18.1077 5.53819 18.266 5.53819 18.3636 5.63582C18.4612 5.73345 18.4612 5.89174 18.3636 5.98937ZM5.9889 18.3634C5.89127 18.461 5.73297 18.461 5.63534 18.3634C5.53771 18.2658 5.53771 18.1075 5.63534 18.0099C5.73297 17.9122 5.89127 17.9122 5.9889 18.0099C6.08653 18.1075 6.08653 18.2658 5.9889 18.3634ZM18.0103 18.364C17.9126 18.2663 17.9126 18.108 18.0103 18.0104C18.1079 17.9128 18.2662 17.9128 18.3638 18.0104C18.4614 18.108 18.4614 18.2663 18.3638 18.364C18.2662 18.4616 18.1079 18.4616 18.0103 18.364ZM5.6359 5.98959C5.53827 5.89196 5.53827 5.73367 5.6359 5.63604C5.73353 5.53841 5.89182 5.53841 5.98945 5.63604C6.08708 5.73367 6.08708 5.89196 5.98945 5.98959C5.89182 6.08722 5.73353 6.08722 5.6359 5.98959Z">
                                    </path>
                                </svg>
                            </span>
                            Light mode</button>`

        document.body.style = 'background-color: white;'
    }

addbtn.addEventListener('click', function () {

    let task = input.value

    if (task.trim() == "") {
        alert("input can not be blank")
        return
    }

    if (editIndex === null) {
        let newtask = {
            title: task,
            completed: false
        };
        tasks.push(newtask)

    } else {
        tasks[editIndex].title = task
        editIndex = null
    }

    input.value = ""
    renderTasks()

})

function renderTasks() {
    taskcontainer.innerHTML = ''

    tasks.forEach(function (task, index) {
        taskcontainer.innerHTML += ` <div class="taskboxes">
                    <div class="title">${task.title}</div>
                    <div class="changebtns">
                        <button class="cbtns editbtn" data-index="${index}">Edit</button>
                        <button class="cbtns delbtn" data-index="${index}">Delete</button>
                        <button class="cbtns donebtn" data-index="${index}">Done</button>
                    </div>
                </div> `

    })
    pendingTaskCount.textContent = tasks.length

    totalTaskCount.textContent = tasks.length + completedTasksArr.length

    let completedTask = completedTasksArr.length
    completeTaskCount.textContent = completedTask

    let delBtn = document.querySelectorAll('.delbtn')
    delBtn.forEach(function (button) {
        button.addEventListener('click', function () {
            tasks.splice(button.dataset.index, 1)
            renderTasks()
        })
    })


    let doneBtn = document.querySelectorAll('.donebtn')
    doneBtn.forEach(function (button) {
        button.addEventListener('click', function () {
            let index = button.dataset.index;
            tasks[index].completed = true
            // renderTasks()

            completedTasksArr.push(tasks[index])
            tasks.splice(index, 1)
            renderTasks()
            console.log(completedTasksArr)
        })
    })

    let editBtn = document.querySelectorAll('.editbtn')
    editBtn.forEach(function (button) {
        button.addEventListener('click', function () {
            let index = button.dataset.index
            editIndex = index
            input.value = tasks[index].title
        })
    })

    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("completedTasksArr", JSON.stringify(completedTasksArr));
}


clearBtn.addEventListener('click', function () {
    tasks = []
    completedTasksArr = []
    renderTasks()
})

completebBtn.addEventListener('click', function () {
    console.log(completedTasksArr)
    heading.innerHTML = `<h1>Completed Tasks</h1>`
    taskcontainer.innerHTML = ``

    completedTasksArr.forEach(function (task) {
        taskcontainer.innerHTML += `<div class="taskboxes">
                    <div class="title">${task.title}</div>
                </div>`
    })


})

dashboardBtn.addEventListener('click', function () {
    heading.innerHTML = `<h1>Task List</h1>`
    taskcontainer.innerHTML = ``
    renderTasks()
})

pendingBtn.addEventListener('click', function () {
    heading.innerHTML = `<h1>Pending Task</h1>`
    taskcontainer.innerHTML = ``

    if (tasks.length === 0) {
        heading.innerHTML = `<h1>Pending Task - No Pending Task!!</h1>`
    } else {
        tasks.forEach(function (task) {

            taskcontainer.innerHTML += `<div class="taskboxes">
            <div class="title">${task.title}</div>
            </div>`
        })
    }
})

themeBtn.addEventListener('click', function () {
    if (!isDark) {

        themeBtn.innerHTML = ` <span>
        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25" color="#f5a623" fill="none" stroke="#f5a623" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21.5 14.0784C20.3003 14.7189 18.9301 15.0821 17.4751 15.0821C12.7491 15.0821 8.91792 11.2509 8.91792 6.52485C8.91792 5.06986 9.28105 3.69968 9.92163 2.5C5.66765 3.49698 2.5 7.31513 2.5 11.8731C2.5 17.1899 6.8101 21.5 12.1269 21.5C16.6849 21.5 20.503 18.3324 21.5 14.0784Z"></path>
        </svg>
        </span>
        Dark Mode</button>`

        document.body.style = 'background-color: var(--dark-body-background-color);'
        localStorage.setItem('theme' , 'dark')

        isDark = true
    } else {
        themeBtn.innerHTML = ` <span>

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25"
                                    color="#f5a623" fill="#f5a623" stroke="#f5a623" stroke-width="3"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path
                                        d="M16.9991 12C16.9991 14.7614 14.7605 17 11.9991 17C9.23766 17 6.99908 14.7614 6.99908 12C6.99908 9.23858 9.23766 7 11.9991 7C14.7605 7 16.9991 9.23858 16.9991 12Z">
                                    </path>
                                    <path
                                        d="M12.1247 3.25H11.9997M12.1242 20.75H11.9992M20.75 12.125V12M3.25 12.125V12M18.2752 5.90098L18.1868 5.81259M5.90051 18.275L5.81212 18.1866M18.0987 18.2756L18.187 18.1872M5.72429 5.9012L5.81267 5.81282M12.2497 3.25C12.2497 3.38807 12.1378 3.5 11.9997 3.5C11.8616 3.5 11.7497 3.38807 11.7497 3.25C11.7497 3.11193 11.8616 3 11.9997 3C12.1378 3 12.2497 3.11193 12.2497 3.25ZM12.2492 20.75C12.2492 20.8881 12.1373 21 11.9992 21C11.8611 21 11.7492 20.8881 11.7492 20.75C11.7492 20.6119 11.8611 20.5 11.9992 20.5C12.1373 20.5 12.2492 20.6119 12.2492 20.75ZM20.75 12.25C20.6119 12.25 20.5 12.1381 20.5 12C20.5 11.8619 20.6119 11.75 20.75 11.75C20.8881 11.75 21 11.8619 21 12C21 12.1381 20.8881 12.25 20.75 12.25ZM3.25 12.25C3.11193 12.25 3 12.1381 3 12C3 11.8619 3.11193 11.75 3.25 11.75C3.38807 11.75 3.5 11.8619 3.5 12C3.5 12.1381 3.38807 12.25 3.25 12.25ZM18.3636 5.98937C18.266 6.087 18.1077 6.087 18.01 5.98937C17.9124 5.89174 17.9124 5.73345 18.01 5.63582C18.1077 5.53819 18.266 5.53819 18.3636 5.63582C18.4612 5.73345 18.4612 5.89174 18.3636 5.98937ZM5.9889 18.3634C5.89127 18.461 5.73297 18.461 5.63534 18.3634C5.53771 18.2658 5.53771 18.1075 5.63534 18.0099C5.73297 17.9122 5.89127 17.9122 5.9889 18.0099C6.08653 18.1075 6.08653 18.2658 5.9889 18.3634ZM18.0103 18.364C17.9126 18.2663 17.9126 18.108 18.0103 18.0104C18.1079 17.9128 18.2662 17.9128 18.3638 18.0104C18.4614 18.108 18.4614 18.2663 18.3638 18.364C18.2662 18.4616 18.1079 18.4616 18.0103 18.364ZM5.6359 5.98959C5.53827 5.89196 5.53827 5.73367 5.6359 5.63604C5.73353 5.53841 5.89182 5.53841 5.98945 5.63604C6.08708 5.73367 6.08708 5.89196 5.98945 5.98959C5.89182 6.08722 5.73353 6.08722 5.6359 5.98959Z">
                                    </path>
                                </svg>
                            </span>
                            Light mode</button>`

        document.body.style = 'background-color: white;'
        localStorage.setItem('theme' , 'light')


        isDark = false
    }
})