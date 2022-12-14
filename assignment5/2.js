
function rememberMe() {
    var rememberme = document.getElementById("remember-me")
    if (rememberme.checked) {
        var userName = document.getElementById("user-name").value;
        var password = document.getElementById("password").value
        localStorage.setItem("user-name", userName)
        localStorage.setItem("password", password)
        alert("Data Saved!!")
    }
    else {
        // one by one
        // localStorage.removeItem("user-name");
        // localStorage.removeItem("password");

        // var userNameField = document.getElementById("user-name");
        // var passwordField = document.getElementById("password");
        // userNameField.value = ""
        // passwordField.value = ""
        
        // all at once
        localStorage.clear()
        alert("Data Removed")



    }

}