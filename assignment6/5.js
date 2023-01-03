// document.onload = () => {
// }
document.addEventListener('DOMContentLoaded', function () {
    alert("welcome to the iti")
    var name = document.createTextNode(prompt("enter your name"))
    var dept = document.createTextNode(prompt("enter your dept"))
    var header1 = document.createElement("h1")
    var header2 = document.createElement("h2")
    header1.appendChild(name)
    header2.appendChild(dept)
    document.getElementsByTagName("body")[0].appendChild(header1)
    document.getElementsByTagName("body")[0].appendChild(header2)

});