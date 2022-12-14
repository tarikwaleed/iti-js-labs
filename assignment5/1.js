function getData() {
    var userName = document.getElementById("user-name");
    var password = document.getElementById("password");
    var userNameData = localStorage.getItem("user-name")//localStorage.getItem("userData");
    var passwordData = localStorage.getItem("password")//localStorage.getItem("userData");
    userName.value = userNameData;
    password.value = passwordData;
    alert('Data Loaded');
}
function setData() {
    var userName= document.getElementById("user-name").value; 
    var password=document.getElementById("password").value

    // var data = {
    //     "firstName": "Ahmed",
    //     "lastName": "Mohamed",
    //     "age": 30
    // }
    localStorage.setItem("user-name", userName)
    localStorage.setItem("password", password)
    //  sessionStorage.setItem("userData",JSON.stringify(data))

    alert("Data Saved!!")
}
