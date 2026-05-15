function pick(el) {

  // Quitar clase activa de todos los botones
  document.querySelectorAll('.btn').forEach(function(b) {
    b.classList.remove('active');
  });

  // Marcar el botón clickeado como activo
  el.classList.add('active');

  // Leer imagen y nombre desde los atributos del botón
  var img  = el.getAttribute('data-img');
  var name = el.getAttribute('data-name');

  // Cambiar imagen de fondo con efecto fade
  var bg = document.getElementById('bg');
  bg.style.opacity = '0';

  setTimeout(function() {
    bg.style.backgroundImage = "url('" + img + "')";
    bg.style.opacity = '1';
  }, 250);

  // Mostrar nombre con efecto fade
  var pname = document.getElementById('pname');
  pname.classList.remove('visible');

  setTimeout(function() {
    pname.textContent = name;
    pname.classList.add('visible');
  }, 300);

}
