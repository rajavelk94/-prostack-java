function validate() {
    let u = document.getElementById('userName').value
    let e = document.getElementById('email').value
    let p = document.getElementById('password').value
    let cp = document.getElementById('cpassword').value
    if (u == " " || u.length < 5) {
        document.getElementById('usernamemessage').innerHTML = "please enter the valid user name"
    }
    if (e == "") {
        document.getElementById('emailMessage').innerHTML = "Please Enter Email Id"
    }
    if (p != cp) {
        document.getElementById('cpMessage').innerHTML = "Password and Confirm password should be same"
    }
    return false
}