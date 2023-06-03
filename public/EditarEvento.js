function sameevent() {
  try {
    fetch("http://localhost:8080/editarEvento", {
      method : "POST",
      body : JSON.stringify({
        nombre : document.getElementById("nombre").value,
        lugar : document.getElementById("lugar").value,
        categoria : document.getElementById("categoria").value,
        startdate : document.getElementById("start-date").value,
        enddate : document.getElementById("end-date").value,
        starttime : document.getElementById("start-time").value,
        endtime : document.getElementById("end-time").value,
        descripcion : document.getElementById("descripcion").value,
      })
    })
        .then(response => response.json())
        .then(data => {
          if (data[0].success == true) {
            document.getElementById("show-error").style("color: green;");
            document.getElementById("show-error").innerText = "Evento Creado";
          }
        })
    document.getElementById("editarEventoForm")
        .addEventListener("submit", sameevent);

  } catch (error) {
    console.error(error);
  }
}

function cargarEvento() {
  var data = JSON.parse(sessionStorage.getItem('evento'));
  console.log(data);

  document.getElementById("titulo").value = data.nombre + "1";
  document.getElementById("lugar").value = data.ubicacion;
  document.getElementById("categoria").value = data.aforo;
  document.getElementById("start-date").value = data.tamaño;
  document.getElementById("end-date").value = data.tipo;
  document.getElementById("start-time").value = data.descripcion;
  document.getElementById("end-time").value = data.descripcion;
  document.getElementById("description").value = data.descripcion;
  document.getElementById("select").value = data.descripcion;
  document.getElementById("image-upload").value = data.descripcion;
}
