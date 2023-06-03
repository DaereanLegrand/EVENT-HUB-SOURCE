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

  document.getElementById("nombre").value = data.nombre;
  document.getElementById("lugar").value = data.lugar;
  document.getElementById("start-date").value = data.fcomienzo;
  document.getElementById("end-date").value = data.ffin;
  document.getElementById("start-time").value = data.hcomienzo;
  document.getElementById("end-date").value = data.hfin;
  document.getElementById("description").value = data.descripcion;
}
