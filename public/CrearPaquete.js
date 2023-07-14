function sameevent() {
  try {
    var preData = JSON.parse(sessionStorage.getItem('evento'));
    fetch("http://localhost:8080/crearPaquete", {
      method : "POST",
      body : JSON.stringify({
        id_evento: preData.id_evento,
        nombre : document.getElementById("nombre").value,
        descripcion : document.getElementById("descripcion").value,
        precio: document.getElementById("precio").value,
      }),
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            sessionStorage.setItem('id_paquete', data.id_paquete);
            /*
          if (data[0].success == true) {
            document.getElementById("show-error").style("color: green;");
            document.getElementById("show-error").innerText = "Paquete Creado";
            window.location.href = "/Actividades.html";
          }
            */
        });
    //document.getElementById("crearPaqueteForm").addEventListener("submit", sameevent);

  } catch (error) {
    console.error(error);
  }
}
