document.addEventListener("DOMContentLoaded", function () {
  const agregarTrabajadorForm = document.getElementById("trabajador-form");

  agregarTrabajadorForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombres = document.getElementById("nombres").value;
    const apellidos = document.getElementById("apellidos").value;
    const numeroDocumento = document.getElementById("numero-documento").value;
    const correoElectronico = document.getElementById("correo-electronico").value;
    const rol = document.getElementById("rol").value;

    const trabajador = {
      nombres: nombres,
      apellidos: apellidos,
      numeroDocumento: numeroDocumento,
      correoElectronico: correoElectronico,
      rol: rol
    };

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8080/agregarTrabajador");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          window.location.href = "VerRoles.html";
        } else {
          alert("Error de conexión");
        }
      }
    };
    xhr.send(JSON.stringify(trabajador));
  });
});

