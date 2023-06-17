var evento = localStorage.getItem("evento");
console.log(evento);
document.getElementById("FormularioPre")
    .addEventListener("submit", function(event) {
      event.preventDefault(); // Evita el envío del formulario por defecto

      // Obtiene los valores de los campos del formulario
      var nombre = document.getElementById("nombres").value;
      var apellido = document.getElementById("apellidos").value;
      // var evento = document.getElementById("id-evento").value;
      var tipodocumento = document.getElementById("inputState").value;
      var numerodocumento = document.getElementById("numero-documento").value;
      var correoelectronico = document.getElementById("umail").value;
      // Almacena los datos en el almacenamiento local del navegador
      localStorage.setItem("nombre", nombre);
      localStorage.setItem("apellido", apellido);
      // localStorage.setItem("evento", evento);
      localStorage.setItem("tipodocumento", tipodocumento);
      localStorage.setItem("numerodocumento", numerodocumento);
      localStorage.setItem("correoelectronico", correoelectronico);

      // Redirige a paquete.html
      window.location.href = "/prepaquete.html";
    });

function cargarEvento() {
  var data = JSON.parse(sessionStorage.getItem('evento'));
  console.log(data);

  document.getElementById("id-evento").value = data.id_evento;
}
