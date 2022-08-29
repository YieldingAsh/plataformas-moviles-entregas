//pair programmer - mod programmer
function suma(n1, n2){
    return n1 + n2;
}
console.log("suma(2,3): ", suma(2,3))

var elevarAlCuadrado = function(n){
    return n**3;
}
console.log("elevarAlCubo(3): ", elevarAlCubo(3))

var restoDivisionEntera = (dividendo,divisor) => {
    return dividendo % divisor;
}
console.log("restoDivisionEntera(3,2): ", restoDivisionEntera(3,2))

var numeroPi= () => {
    return Math.PI
}
console.log("numeroPi(): ", numeroPi())

var numeroRandom = () => {
    return Math.random()
}
console.log("numeroRandom(): ", numeroRandom())

var mejorNumeroRandom = (desde,hasta) => {
    return Math.floor(Math.random() * (hasta - desde + 1)) + desde;
};
console.log("mejorNumeroRandom(1,6): ", mejorNumeroRandom(1,6))

//Hacer
var transformarMayuscula = (palabra) => {
    return  palabra.toUpperCase();
}
console.log("transformarMayuscula(\"Plataforma\"): ", transformarMayuscula("Plataforma"))

var primeraLetra = (palabra) => {
    return palabra[0] 
}
console.log("primeraLetra(\"Plataforma\"): ", primeraLetra("Plataforma"))

var ultimaLetra = (palabra) => {
    return palabra[palabra.length -1] 
}
console.log("ultimaLetra(\"Plataforma\"): ", ultimaLetra("Plataforma"))

function primeraEnMayuscula(palabra){
    return palabra.charAt(0).toUpperCase() + palabra.slice(1);
}
console.log("Eso: ",primeraEnMayuscula("palabra"))

// Arreglado
function palabraInvertida(palabra){
    let resultadoPalabra = "";
    for(let i = palabra.length-1; i > 0; i--)
    {
        resultadoPalabra += palabra[i]
    }
    return resultadoPalabra;
}
console.log("palabraInvertida(\"plataforma\"): ", palabraInvertida("plataforma"))

function listadoDeLetrasAPalabra(listado){
    var palabraResultado = "";
    for(var i = 0; i< listado.length; i++)
    {
        palabraResultado += listado[i];
    }
    return palabraResultado;
}
console.log("listadoDeLetrasAPalabra([\"p\", \"l\", \"a\", \"t\", \"a\", \"f\", \"o\", \"r\", \"m\", \"a\"]): ", listadoDeLetrasAPalabra(["p", "l", "a", "t", "a", "f", "o", "r", "m", "a"]))


function palabraAlistaDeLetras(palabra){
    let listaResultado = [];
    for(var i = 0; i < palabra.length; i++)
    {
        listaResultado.push(palabra[i])
    }
    return listaResultado;
}
console.log("palabraAListaDeLetras(\"plataforma\"): ", palabraAListaDeLetras("plataforma"))

function deListadoAOracion(listado) {
    var oracionResultado = "";
    for(var i = 0; i<listado.length; i++){
        oracionResultado += listado[i];
        oracionResultado += " ";

        if(i < listado.length) {
            oracionResultado += "";
        }
     oracionResultado = primeraEnMayuscula
    }
}

