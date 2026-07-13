let goalBtn = document.querySelector('.goal')
let afterGoalClickInterFace = document.querySelector('.aftergoalclickinterface')
let closeGoals = document.querySelector('.closegoals')
let goalForm = document.querySelector('.goalform')
let goalInput = document.querySelector('.goalinput')
let goalArea = document.querySelector('.goalarea')
let goalFooter = document.querySelector('.goalfooter')

goalBtn.addEventListener('click' , function(){
    afterGoalClickInterFace.style.display = 'flex'
})

closeGoals.addEventListener('click' , function(){
    afterGoalClickInterFace.style.display = 'none'

})

let goalsArr = JSON.parse(localStorage.getItem("goals")) ?? []

goalForm.addEventListener('submit' , function(e){
    e.preventDefault()

    let goalInputVal = goalInput.value
    if(goalInputVal.trim() === ""){
        alert('Please fill the goal input')
        return
    }

    let goalObj = {
        goalTitle:goalInputVal
    }

    goalsArr.push(goalObj)
    localStorage.setItem('goals' , JSON.stringify(goalsArr))
    goalForm.reset()
    renderGoalSection()

})

function renderGoalSection(){
    goalArea.innerHTML = ""
    goalsArr.forEach(function(e , index){
        goalArea.innerHTML += `<div class="goalslist">
                        <div class="goaltext">
                            <h2 style="font-size: larger; font-weight: normal;">${e.goalTitle}</h2>
                        </div>
                        <div class="delgoal">
                            <svg class="plannercross" data-index="${index}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30"
                                height="30" color="#000000" fill="none" stroke="currentColor" stroke-width="1"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 6L6.00081 17.9992M17.9992 18L6 6.00085"></path>
                            </svg>
                        </div>
                    </div>`
                })
    updateGoalCount()
}
renderGoalSection()

goalArea.addEventListener('click' , function(e){
    let goalDelIndex = e.target.dataset.index
    goalsArr.splice(goalDelIndex , 1)
    localStorage.setItem('goals' , JSON.stringify(goalsArr))
    renderGoalSection()
    updateGoalCount()
})

function updateGoalCount(){
    let numberOfGoals = goalsArr.length
    goalFooter.innerHTML = `<h4 style="font-size: 14px; font-weight: normal; opacity: 0.8; ">Total Goals - ${numberOfGoals}</h4>`
}
updateGoalCount()