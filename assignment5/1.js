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
    localStorage.setItem("user-name", userName)
    localStorage.setItem("password", password)
    alert("Data Saved!!")
}


function setCockie() {
    var userName= document.getElementById("user-name").value; 
    var password=document.getElementById("password").value
    document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";
    alert("Cockies Set Successfully")
}