console.log(window.outerWidth+"-"+window.outerHeight)

window.open("https://www.google.com")

console.log(window.screen.width+" - "+window.screen.height);
console.log(window.screen.availWidth+" - "+ window.screen.availHeight);

console.log(window.navigator.userAgent);

var variable = "Hola";
console.log(window.variable);
console.log(history.length);

window.navigator.geolocation.getCurrentPosition(function (posicion){
    console.log("Latitud:  :"+posicion.coords.latitude+
            " Longitud: "+posicion.coords.longitude
    )
})