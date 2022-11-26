var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
let arrayOfKeysAndValues = JSON.parse(localStorage.getItem('userInfo')) || [];
let arrayToStorage = JSON.parse(localStorage.getItem('userInfo')) || [];
let obj = {}


function setValueforName() {
    obj = {}
    let valueForName = document.getElementById("my-username").value;
    if (/\d/.test(valueForName)) {
        document.getElementById("username-warining").style.display = 'block';
        document.getElementById("username-accept").style.display = 'none';

    } else if (valueForName.match(format) || (valueForName.length <= 0)) {
        document.getElementById("username-warining").style.display = 'block';
        document.getElementById("username-accept").style.display = 'none';

    } else {
        document.getElementById("username-accept").style.display = 'block';
        document.getElementById("username-warining").style.display = 'none';
        obj['Name'] = valueForName;
        console.log(obj); 
    }

}
   

var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
let checkPasstoStorage = false;

function setValueforPassword() {
    let valueForPassword = document.getElementById("my-password").value;

    if (valueForPassword.length >= 8 && valueForPassword.match(passw) && valueForPassword.match(format)){
        document.getElementById("password-warining").style.display = 'none';
        document.getElementById("password-accept").style.display = 'block';
        checkPasstoStorage = true;
        obj['password'] = valueForPassword
        console.log(obj)
        
    } else {
        document.getElementById("password-warining").style.display = 'block';
        document.getElementById("password-accept").style.display = 'none';
        checkPasstoStorage = false;
    } 
}



let formEvent = document.getElementById("btn")     
formEvent.onclick = function (event) {

    arrayOfKeysAndValues.push(obj)
    console.log(obj);
    let checkName = document.getElementById("my-username").value;
    let checkPassword = document.getElementById("my-password").value;

    if (arrayOfKeysAndValues[arrayOfKeysAndValues.length - 1].Name != undefined && 
        arrayOfKeysAndValues[arrayOfKeysAndValues.length - 1].password != undefined && 
        checkName == arrayOfKeysAndValues[arrayOfKeysAndValues.length - 1].Name && 
        checkPassword == arrayOfKeysAndValues[arrayOfKeysAndValues.length - 1].password && 
        checkPasstoStorage ){

        arrayToStorage.push(obj)
       
        window.localStorage.setItem(`userInfo` , JSON.stringify(arrayToStorage))
        // window.sessionStorage.setItem(`userInfo` , JSON.stringify(arrayToStorage))
        window.location.href = './logIn/login.html'


    }else {
        alert(`You are missed at least one of required information to register. Please check your information again`);
        event.preventDefault()
    }

    
}



