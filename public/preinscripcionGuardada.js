var nombre = localStorage.getItem("nombre"); // E: eslint confi
var apellido = localStorage.getItem("apellido");
var evento = localStorage.getItem("evento");
var tipodocumento = localStorage.getItem("tipodocumento");
var numerodocumento = localStorage.getItem("numerodocumento");
var paquete = localStorage.getItem("id_paquete");
var correoelectronico = localStorage.getItem("correoelectronico")
// Haz lo que necesites con los datos en paquete.html
console.log(nombre);
console.log(apellido);
console.log(evento);
console.log(paquete);
console.log(tipodocumento);
console.log(numerodocumento);
console.log(correoelectronico);

function
sameevent() { // E: eslint configuration error (type :ALEDetail for more informa
  try {
    fetch("http://localhost:8080/Preinscribir", {
      method : "POST",
      body : JSON.stringify({
        nombre : nombre,
        apellido : apellido,
        tipodocumento : tipodocumento,
        numerodocumento : numerodocumento,
        evento : evento,
        paquete : paquete,
        correoelectronico : correoelectronico,
      }),
    })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          sessionStorage.setItem('id_usuario', data.id_usuario);
          /*
        if (data[0].success == true) {
          document.getElementById("show-error").style("color: green;");
          document.getElementById("show-error").innerText = "Evento Creado";
          window.location.href = "/Actividades.html";
        }
          */
        });
    // document.getElementById("crearEventoForm").addEventListener("submit",
    // sameevent);

  } catch (error) {
    console.error(error);
  }
}
