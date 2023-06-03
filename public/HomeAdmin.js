document.addEventListener('DOMContentLoaded', function() {
  var botonEventos = document.getElementById('botonEventos');
  var botonPreInscripcion = document.getElementById('botonPreInscripcion');
  var botonAmbiente = document.getElementById('botonAmbiente');
  if (botonEventos) {
    botonEventos.addEventListener(
        'click', function() { window.location.href = "/Eventos.html"; });
  }
  if (botonPreInscripcion) {
    botonPreInscripcion.addEventListener(
        'click', function() { window.location.href = "/preins.html"; });
  }
  if (botonAmbiente) {
    botonAmbiente.addEventListener(
        'click', function() { window.location.href = "/Ambientes.html"; });
  }
});
