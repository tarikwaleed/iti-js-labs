// window.onload = () => {
var heading = document.createElement("h1")
heading.innerHTML = "Colored Array"
document.body.appendChild(heading)
var colorArray = ['red', 'green', 'blue', 'orange', 'yellow', 'brown', 'gray', 'lightgray', 'gold']
for (let i = 0; i < 7; i++) {
    var randomNumber = Math.floor(Math.random() * 10)
    var div = document.createElement("div")
    div.style.backgroundColor = colorArray[randomNumber]
    div.style.width = "100px"
    div.style.height = "100px"
    div.style.float = "left"
    document.body.appendChild(div)
}
// };

