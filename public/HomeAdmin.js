// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
  // Obtiene el botón "Administrar Eventos" por su ID
  var botonEventos = document.getElementById('botonEventos');
  var botonPreInscripcion = document.getElementById('botonPreInscripcion');
  // Verifica si el elemento existe antes de agregar el controlador de eventos
  if (botonEventos) {
    // Agrega un controlador de eventos al botón
    botonEventos.addEventListener('click', function() {
      // Redirige al usuario a la página "/CrearEventos.html"
      window.location.href = "/Eventos.html";
    });
  }
  if (botonPreInscripcion) {
    // Agrega un controlador de eventos al botón
    botonPreInscripcion.addEventListener('click', function() {
      // Redirige al usuario a la página "/CrearEventos.html"
      window.location.href = "/preins.html";
    });
  }
});
