
function rememberMe() {
    var rememberme = document.getElementById("remember-me")
    if (rememberme.checked) {
        var userName = document.getElementById("user-name").value;
        var password = document.getElementById("password").value
        // localStorage.setItem("user-name", userName)
        // localStorage.setItem("password", password)

        document.cookie = `username=${userName}; expires=Thu, 18 Dec 2030 12:00:00 UTC`;
        document.cookie = `password=${password}; expires=Thu, 18 Dec 2030 12:00:00 UTC`;

        // alert("Data Saved!!")
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
        // localStorage.clear()
        document.cookie = `userName+'=; Max-Age=-99999999;'`;  
        document.cookie = password+'=; Max-Age=-99999999;';  
        // alert("Data Removed")



    }

}