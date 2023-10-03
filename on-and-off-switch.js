let btn = document.querySelector("#button")
let vlu = 0;
button.addEventListener('click', function () {
    if (vlu === 0) {
        button.innerHTML = "Trun On"
        button.style.backgroundColor = "green"
        vlu = 1;
    }
    else {
        button.innerHTML = "Trun Off"
        button.style.backgroundColor = "white"
        vlu = 0;

    }
})








