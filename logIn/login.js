var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
let arrayOfKeysAndValues = JSON.parse(localStorage.getItem('userInfo')) || [];
let obj = {};


let formLogInEvent = document.getElementById("btn-log")
formLogInEvent.onclick = function (event) {

    let valueFromNameLog = document.getElementById("login-Name").value
    let valueFromPasswordLog = document.getElementById("login-password").value

    for ( i=0 ; i<arrayOfKeysAndValues.length ; i++ ){
        if (valueFromNameLog.toUpperCase() == arrayOfKeysAndValues[i].Name.toUpperCase()){
            if (valueFromPasswordLog == arrayOfKeysAndValues[i].password) {
                let objectFindUser = arrayOfKeysAndValues[i];
                localStorage.setItem('current-user', JSON.stringify(objectFindUser))
                window.location.href ="../Home/home.html"
                break  
            }
            else {
                event.preventDefault()
            }
        } else {
            document.getElementById("login-password-warining").style.display = 'block' 
            document.getElementById("login-password-accept").style.display = 'none'
            document.getElementById("login-Name-warining").style.display = 'block'
            document.getElementById("login-Name-accept").style.display = 'none'
            console.log(false);
            event.preventDefault()

        }
    }
}

