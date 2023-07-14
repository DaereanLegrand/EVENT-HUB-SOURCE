function samepacket() {
  var data = JSON.parse(sessionStorage.getItem('paquete'));
  try {

    fetch("http://localhost:8080/editarPaquete", {
      method : "POST",
      body : JSON.stringify({
        id_paquete : data.id_paquete,
        nombre : document.getElementById("nombre").value,
        descripcion : document.getElementById("descripcion").value,
        precio: document.getElementById("precio").value,
      })
    })
        .then(response => response.json())
        .then(data => {
          if (data[0].success == true) {
            document.getElementById("show-error").style("color: green;");
            document.getElementById("show-error").innerText = "Paquete Creado";
          }
        })
    document.getElementById("editarPaqueteForm")
        .addEventListener("submit", sameevent);

  } catch (error) {
    console.error(error);
  }
}

function cargarPaquete() {
  var data = JSON.parse(sessionStorage.getItem('paquete'));
  console.log(data);

  document.getElementById("nombre").value = data.nombre;
  document.getElementById("descripcion").value = data.descripcion;
  document.getElementById("precio").value = data.precio;
}
