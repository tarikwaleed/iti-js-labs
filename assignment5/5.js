function GetUser() {
    var userIdInputField = document.getElementById("user-id-input-field")
    var userId = userIdInputField.value
    console.log(userId)
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {
            var avatar = document.getElementById("avatar")
            avatar.src = JSON.parse(this.responseText).data.avatar


        }
    }
    xhttp.open("GET", `https://reqres.in/api/users/${userId}`, true);
    xhttp.send();
}