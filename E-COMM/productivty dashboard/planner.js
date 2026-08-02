let plannerBtn = document.querySelector('.planner')
let afterplannerclickinterface = document.querySelector('.afterplannerclickinterface')
let plannerCross = document.querySelector('.plannercross')
let plannerForm = document.querySelector('.plannerform')
let timePicker = document.querySelector('.timepicker')
let eventInput = document.querySelector('.eventinput')
let evenList = document.querySelector('.eventlist')
let delEvent = document.querySelector(".delevent")

plannerBtn.addEventListener('click', function () {
    afterplannerclickinterface.style.display = 'flex'
})

plannerCross.addEventListener('click', function () {
    afterplannerclickinterface.style.display = 'none'

})

let eventsArr = JSON.parse(localStorage.getItem('event')) ?? []

function convertTime(time) {
    let [hours, minutes] = time.split(":");

    hours = Number(hours);

    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;

    return `${hours}:${minutes} ${ampm}`;
}

plannerForm.addEventListener('submit', function (e) {
    e.preventDefault()

   let timePickerVal = convertTime(timePicker.value);
    let eventInputVal = eventInput.value

    if (timePickerVal.trim() === "" || eventInputVal.trim() === "") {
        alert("Please fill both the inputs")
        return
    }

    let event = {
        time: timePickerVal,
        eventname: eventInputVal
    }

    eventsArr.push(event)
    localStorage.setItem('event', JSON.stringify(eventsArr))
    plannerForm.reset()
    renderEventlist()
})

function renderEventlist() {
    evenList.innerHTML = ""

    eventsArr.forEach(function (event, index) {
        evenList.innerHTML += `  <div class="event">
        <div class="eventtime">${event.time}</div>
        <div class="eventname">${event.eventname}</div>
        <div class="delevent" >
                            <svg data-index="${index}" class="deleteevent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30"
                                height="30" color="#000000" fill="none" stroke="currentColor" stroke-width="1"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 6L6.00081 17.9992M17.9992 18L6 6.00085"></path>
                            </svg>
                        </div>
        </div>`
    })

    
}
renderEventlist()

// let delEventIndex = 
evenList.addEventListener('click', function (e) {
    if (e.target.classList.contains("deleteevent")) {
        let delEventIndex = e.target.dataset.index
        eventsArr.splice(delEventIndex, 1)
        localStorage.setItem('event', JSON.stringify(eventsArr))
        renderEventlist()

    }
})