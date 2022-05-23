let cuadrados = document.querySelectorAll(".square");

let container = document.querySelector(".container")

let h1 = document.querySelector("h1")

let body = document.querySelector(".body")

let mensaje = document.getElementById("#message")

let colors = generateRandomColor(6)

let span = document.querySelector(".span")

let pickedColor = colors[getRandomInt(0, 6)];

let colorDisplay = document.querySelector("#colorDisplay").textContent = pickedColor

let clikerColor;

let hard = document.querySelector("#hard")

let botonr = document.querySelector("#botonr")

hard.addEventListener('click', function() {
    hard.classList.add("selected"),
    easy.classList.remove("selected"),
    botonr = document.querySelector("#botonr").textContent = "Nuevos colores",
    mensaje = document.querySelector("#message").textContent = "",
    colors = generateRandomColor(6),
    h1.classList.add("color"),
    pickedColor = colors[getRandomInt(0, 6)];
    colorDisplay = document.querySelector("#colorDisplay").textContent = pickedColor;
    for (let i = 0; i < cuadrados.length; i++) {
        cuadrados[i].style.backgroundColor = colors[i];
    }
});

let easy = document.querySelector("#easy")

easy.addEventListener("click", function(){
    easy.classList.add("selected"),
    hard.classList.remove("selected"),
    botonr = document.querySelector("#botonr").textContent = "Nuevos colores",
    mensaje = document.querySelector("#message").textContent = "",
    colors = generateRandomColor2(3),
    h1.classList.add("color"),
    pickedColor = colors[getRandomInt(0,3)];
    colorDisplay = document.querySelector("#colorDisplay").textContent = pickedColor;
    for (let i = 0; i < cuadrados.length; i++) {
        cuadrados[i].style.backgroundColor = colors[i];
    }
});

document.querySelector("#reset").addEventListener( "click" , function reinicio (){
    botonr = document.querySelector("#botonr").textContent = "Nuevos colores"
    mensaje = document.querySelector("#message").textContent = ""
    h1.classList.add("color")
    if (hard.classList.contains("selected"))
        colors = generateRandomColor(6),
        pickedColor = colors[getRandomInt(0, 6)],
        colorDisplay = document.querySelector("#colorDisplay").textContent = pickedColor;
    else
        colors = generateRandomColor2(3),
        pickedColor = colors[getRandomInt(0,3)],
        colorDisplay = document.querySelector("#colorDisplay").textContent = pickedColor;
    
    for (let i = 0; i < cuadrados.length; i++) {
        cuadrados[i].style.backgroundColor = colors[i];
    }
});

for (let i = 0; i < cuadrados.length; i++) {
    h1.classList.add("color"),
    cuadrados[i].style.backgroundColor = colors[i];
    cuadrados[i].addEventListener("click", function () {
        clikerColor = this.style.backgroundColor;
        if (pickedColor != clikerColor)
            this.style.backgroundColor = "#232323",
                mensaje = document.querySelector("#message").textContent = "Try again";
        else
            mensaje = document.querySelector("#message").textContent = "Correct",h1.classList.remove("color"), h1.style.backgroundColor=pickedColor, changeColor(), botonr = document.querySelector("#botonr").textContent = "Try again?";
    })
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function changeColor (){for (let i = 0; i < cuadrados.length; i++) {
    cuadrados[i].style.backgroundColor = pickedColor;}    
}

function randomColor() {
   return "rgb" + "(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
}

function generateRandomColor2(num) {
    // for (let i = 0; i < array.length; i++) {
    //     const element = array[i];
    let arr = []
    for (let i = 0; i < num; i++) {
        arr.push(randomColor())
    }
    for (let i = 3; i < 6; i++) {
        cuadrados[i].classList.add("hidden")
    }
    return arr
}

function generateRandomColor(num) {
    // for (let i = 0; i < array.length; i++) {
    //     const element = array[i];
    let arr = []
    for (let i = 0; i < num; i++) {
        arr.push(randomColor())
    }
    for (let i = 3; i < 6; i++) {
        cuadrados[i].classList.remove("hidden")
    }
    return arr
}