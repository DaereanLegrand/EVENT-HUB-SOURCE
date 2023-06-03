document.addEventListener('DOMContentLoaded', function() {
  var botonnuevoEvento = document.getElementById('nuevoEvento');
  var botoneventosProgreso = document.getElementById('eventosProgreso');
  var botonadaptarEvento = document.getElementById('adaptarEvento');
  if (botonnuevoEvento) {
    botonnuevoEvento.addEventListener(
        'click', function() { window.location.href = "/CrearEvento.html"; });
  }
  if (botoneventosProgreso) {
    botoneventosProgreso.addEventListener(
        'click',
        function() { window.location.href = "/eventosEnProgreso.html"; });
  }
  if (botonadaptarEvento) {
    botonadaptarEvento.addEventListener(
        'click', function() { window.location.href = "/AdaptarEvento.html"; });
  }
});
