const button = document.querySelector(".button")
let com = 0;

button.addEventListener("click", function () {

    button.style.backgroundColor = "green"


    if (com === 0) {
        button.innerHTML = "turn On"
        let img = document.querySelector("#image")
        img.setAttribute("src", "bulb-on.png")
        com = 1

    } else {
        button.innerHTML = "turn Off "
        button.style.backgroundColor = "white"
        let img = document.querySelector("#image")
        img.setAttribute("src", "bulb-off.png")
        com = 0
    }
})