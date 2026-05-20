// Variables para seleccionar los elementos del HTML
var fondo    = document.getElementById("fondo");
var nombre   = document.getElementById("nombre");

var btnJordan = document.getElementById("btn-jordan");
var btnLebron = document.getElementById("btn-lebron");
var btnKobe   = document.getElementById("btn-kobe");
var btnCurry  = document.getElementById("btn-curry");
var btnLamelo = document.getElementById("btn-lamelo");

// Funcion que cambia la imagen y el nombre segun el jugador
function cambiarJugador(jugador) {

  if (jugador == "jordan") {
    fondo.src        = "imagenes/jordan.jpg";
    nombre.textContent = "Michael Jordan";
  }

  if (jugador == "lebron") {
    fondo.src        = "imagenes/lebron.jpg";
    nombre.textContent = "LeBron James";
  }

  if (jugador == "kobe") {
    fondo.src        = "imagenes/kobe.jpg";
    nombre.textContent = "Kobe Bryant";
  }

  if (jugador == "curry") {
    fondo.src        = "imagenes/curry.jpg";
    nombre.textContent = "Stephen Curry";
  }

  if (jugador == "lamelo") {
    fondo.src        = "imagenes/lamelo.jpg";
    nombre.textContent = "LaMelo Ball";
  }

}

// Eventos click para cada boton
btnJordan.addEventListener("click", function() { cambiarJugador("jordan"); });
btnLebron.addEventListener("click", function() { cambiarJugador("lebron"); });
btnKobe.addEventListener("click",   function() { cambiarJugador("kobe");   });
btnCurry.addEventListener("click",  function() { cambiarJugador("curry");  });
btnLamelo.addEventListener("click", function() { cambiarJugador("lamelo"); });
