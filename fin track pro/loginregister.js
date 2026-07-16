let registerSection = document.querySelector('.registersection')
let loginSection = document.querySelector('.loginsection')
let mainSection = document.querySelector('.mainsection')

let show = true

function updateUI() {

    if (show) {
        mainSection.style.display = 'none'
        registerSection.style.display = 'flex'
    } else {
        mainSection.style.display = 'none'
        registerSection.style.display = 'none'
        loginSection.style.display = 'flex'
    }
}
updateUI()

let isLogged = false
function showMainsection() {
    if (!isLogged) {
        mainSection.style.display = 'none'
    } else {
        loginSection.style.display = 'none'
        registerSection.style.display = 'none'
        mainSection.style.display = 'initial'

    }
    
}
showMainsection()

let registerHereBtn = document.querySelector('.registerherebtn')
registerHereBtn.addEventListener('click' , function(){
        loginSection.style.display = 'none'
        registerSection.style.display = 'flex'

})

let registerForm = document.querySelector('.registerform')
let usernameInput = document.querySelector('.usenameinput')
let passwordInput = document.querySelector('.passwordinput')
let emailadressInput = document.querySelector('.emailadressinput')

let userRegisterDetailsArr = JSON.parse(localStorage.getItem('userData')) ?? []
let loginDetailsArr = JSON.parse(localStorage.getItem('loginDetails')) ?? []

registerForm.addEventListener('submit', function (e) {
    e.preventDefault()

    let usernameInputVal = usernameInput.value
    let passwordInputVal = passwordInput.value
    let emailadressInputVal = emailadressInput.value

    if (usernameInputVal.trim() === "" || passwordInputVal.trim() === "" || emailadressInputVal.trim() === "") {
        alert("All fields should be filled")
        return
    }

    if (passwordInputVal.length < 6) {
        alert('Password should contain more then six digits')
        return
    }

    let userDetailsObj = {
        password: passwordInputVal,
        username: usernameInputVal,
        email: emailadressInputVal
    }

    userRegisterDetailsArr.push(userDetailsObj)
    localStorage.setItem('userData', JSON.stringify(userRegisterDetailsArr))
    registerForm.reset()
    show = false;
    updateUI();
})

let last = document.querySelector('.last')
if (userRegisterDetailsArr.length > 0) {
    show = false
    updateUI()
} else {
    show = true
    updateUI()
}

let loginHereBtn = document.querySelector('.loginherebtn')

loginHereBtn.addEventListener('click', function () {
    show = false
    updateUI()
})

let loginForm = document.querySelector('.loginform')
let loginUserNameInput = document.querySelector('.loginusernameinput')
let loginPassInput = document.querySelector('.loginpassinput')

loginForm.addEventListener('submit', function (e) {
    e.preventDefault()

    let loginUserNameInputVal = loginUserNameInput.value
    let loginPassInputVal = loginPassInput.value

    if (loginUserNameInputVal.trim() === "" || loginPassInputVal.trim() === "") {
        alert('all inputs should be filled')
        return
    }

    let user = userRegisterDetailsArr.find(function (detail) {
        return detail.username === loginUserNameInputVal;
    });

    if (!user) {
        alert("Incorrect Username");
        return;
    }

    if (user.password !== loginPassInputVal) {
        alert("Incorrect Password");
        return;
    }

    alert("You are logged in 👍");
    let loginDetailsObj = {
        username: loginUserNameInputVal,
        loginpassword: loginPassInputVal
    }


    loginDetailsArr = [loginDetailsObj]
    localStorage.setItem('loginDetails', JSON.stringify(loginDetailsArr))

    isLogged = true
    showMainsection()
    loginForm.reset()
})

if(loginDetailsArr.length > 0){
    isLogged = true
    showMainsection()

}

let userNameHTML = document.querySelector('.username')

if(loginDetailsArr.length > 0){
    userNameHTML.textContent = loginDetailsArr[0].username;
}

let logoutBtn = document.querySelector('.logout')
logoutBtn.addEventListener('click', function () {

    localStorage.removeItem('loginDetails');
    loginDetailsArr = [];
    isLogged = false;
    mainSection.style.display = 'none';
    show = false;
    updateUI();

});

let changeNameInput = document.querySelector('.changenameinput')
let saveChangesBtn = document.querySelector('.savechange')

function updateFullName(){

    saveChangesBtn.addEventListener('click', function(e){
        e.preventDefault();

        let changeNameInputVal = changeNameInput.value;
        if(changeNameInputVal.trim() === ""){
            alert("Please fill the field");
            return;
        }
        let oldUsername = loginDetailsArr[0].username;
        let user = userRegisterDetailsArr.find(function(detail){
            return detail.username === oldUsername;
        });
        if(user){
            user.username = changeNameInputVal;
        }

        loginDetailsArr[0].username = changeNameInputVal;
        localStorage.setItem("userData",JSON.stringify(userRegisterDetailsArr));
        localStorage.setItem("loginDetails",JSON.stringify(loginDetailsArr));
        
        userNameHTML.textContent = changeNameInputVal;
        changeNameInput.value = "";
        alert("Username updated successfully!");
    });
}

updateFullName();