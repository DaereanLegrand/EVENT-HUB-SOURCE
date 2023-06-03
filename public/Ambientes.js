document.addEventListener('DOMContentLoaded', function() {
  var botonnuevoAmbiente = document.getElementById('nuevoAmbiente');
  var botonadaptarAmbiente = document.getElementById('adaptarAmbiente');
  if (botonnuevoAmbiente) {
    botonnuevoAmbiente.addEventListener(
        'click', function() { window.location.href = "/CrearAmbiente.html"; });
  }
  if (botonadaptarAmbiente) {
    botonadaptarAmbiente.addEventListener(
        'click',
        function() { window.location.href = "/seleccionarAmbientes.html"; });
  }
});
