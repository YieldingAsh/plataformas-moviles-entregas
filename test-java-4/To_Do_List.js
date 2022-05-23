let boton = document.querySelector(".boton-agregar");

let con = document.querySelector("#container");

let i = document.querySelector("#item");

boton.addEventListener('click', function crearDiv() {
    var val = document.querySelector('input').value;
    var inpu = document.querySelector('input');
    console.log(inpu);
    console.log(val);
    if (inpu && inpu.value) {
        var newInput = document.createElement("input");
        newInput.setAttribute("type","text");
        newInput.setAttribute("disabled", "true");
        newInput.classList.add("item-input");
        newInput.setAttribute("value", val);
        val = document.querySelector('input').value = '';
        var micapa = document.getElementById('container');
        var nuevoDiv = document.createElement("div");
        nuevoDiv.setAttribute("id", "item");
        micapa.appendChild(nuevoDiv);       
        console.log(nuevoDiv);
        nuevoDiv.appendChild(newInput);
        console.log(newInput);
        var botoncandado = document.createElement("button");
        botoncandado.setAttribute("class", "boton-editar");
        botoncandado.innerHTML = "🔒";
        botoncandado.addEventListener('click', function editar() {
            newInput.toggleAttribute("disabled");
            if (newInput.hasAttribute("disabled"))
                botoncandado.innerHTML = "🔒";
            else
                botoncandado.innerHTML = "🔓";
        });
        let botonremover = document.querySelector(".boton-remover");
        nuevoDiv.appendChild(botoncandado);
        console.log(botoncandado);
        var botoneliminar = document.createElement("button");
        botoneliminar.setAttribute("class", "boton-remover");
        botoneliminar.innerHTML = "🗑️";
        nuevoDiv.appendChild(botoneliminar);
        console.log(botoneliminar);
        botoneliminar.addEventListener('click', function borrar(){
            micapa.removeChild(nuevoDiv);
            console.log(nuevoDiv);
        })}
    else
        {
            window.alert("Tiene que escribir una tarea")
        }
});

let botonmodificar = document.querySelector(".boton-editar");

botonmodificar.addEventListener('click', function editar() {
    var input = document.querySelector(".item-input");
    input.toggleAttribute("disabled");
    if (input.hasAttribute("disabled"))
        botonmodificar.innerHTML = "🔒";
    else
        botonmodificar.innerHTML = "🔓";
});

let botonremover = document.querySelector(".boton-remover");

botonremover.addEventListener('click', function borrar(){
    con.removeChild(i);
    console.log(i);
})