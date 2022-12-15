function GetUser() {
    var userIdInputField = document.getElementById("user-id-input-field")
    var userId = userIdInputField.value
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


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.status == 200 && this.readyState == 4) {
        var allUsers = JSON.parse(this.responseText).data
        console.log(allUsers)
        var selectElement = document.createElement('select'),
            optionElement;

        for (let i = 0; i < allUsers.length; i++) {
            optionElement = document.createElement('option');
            optionElement.setAttribute('value', allUsers[i].id);
            optionElement.appendChild(document.createTextNode(allUsers[i].first_name));
            selectElement.appendChild(optionElement);
        }
        document.getElementsByTagName("body")[0].appendChild(selectElement)


    }
}
xhttp.open("GET", `https://reqres.in/api/users`, true);
xhttp.send();