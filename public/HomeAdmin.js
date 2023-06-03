document.addEventListener('DOMContentLoaded', function() {
  var botonEventos = document.getElementById('botonEventos');
  var botonPreInscripcion = document.getElementById('botonPreInscripcion');
  if (botonEventos) {
    botonEventos.addEventListener(
        'click', function() { window.location.href = "/Eventos.html"; });
  }
  if (botonPreInscripcion) {
    botonPreInscripcion.addEventListener(
        'click', function() { window.location.href = "/preins.html"; });
  }
});
