function getUserName() {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    var userName=urlParams.get("user-name")
    document.getElementById("welcome").innerHTML=`Welcome ${userName}` 
}