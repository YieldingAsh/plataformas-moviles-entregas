let boton = document.querySelector("button");

boton.addEventListener("click", function llamarCiudad()
{
    var inpu = document.querySelector("input")
    if (inpu && inpu.value) {
        var ciudad = document.querySelector("input").value;
        $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + ciudad +"&appid=95176c8edea30e33338e0eaddd53a916", function(data) {
        console.log(data)
        console.log(data.main.temp)
        console.log(data.name)
        console.log(data.weather[0].main)
        console.log(data.weather[0].description)
        document.querySelector(".container").style.visibility = "visible";
        document.querySelector("#ciudad").textContent = data.name;
        document.querySelector("#temperatura").textContent = data.main.temp;
        document.querySelector("#grados").innerHTML = "<sup>°C</sup>";
        document.querySelector("#descripcion").textContent = data.weather[0].main;
        if (data.weather[0].description == "few clouds")
            codigo = "http://openweathermap.org/img/wn/02d@2x.png"
        else if (data.weather[0].description == "clear sky")
            codigo = "http://openweathermap.org/img/wn/01d@2x.png"
        else if (data.weather[0].description == "scattered clouds")
            codigo = "http://openweathermap.org/img/wn/03d@2x.png"
        else if (data.weather[0].description == "broken clouds")
            codigo = "http://openweathermap.org/img/wn/04d@2x.png"
        else if (data.weather[0].description == "shower rain")
            codigo = "http://openweathermap.org/img/wn/09d@2x.png"
        else if (data.weather[0].description == "rain")
            codigo = "http://openweathermap.org/img/wn/10d@2x.png"
        else if (data.weather[0].description == "thunderstorm")
            codigo = "http://openweathermap.org/img/wn/11d@2x.png"
        else if (data.weather[0].description == "snow")
            codigo = "http://openweathermap.org/img/wn/13d@2x.png"
        else if (data.weather[0].description == "mist")
            codigo = "http://openweathermap.org/img/wn/50d@2x.png"   
        document.querySelector("#wicon").setAttribute("src", codigo);
        document.querySelector('input').value = '';
    })
    }
    else
    {
        window.alert("Tiene que escribir un nombre") 
    }
}
);