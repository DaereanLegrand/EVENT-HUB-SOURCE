function sameevent() {
  try {
    fetch("http://localhost:8080/crearEvento", {
      method : "POST",
      body : JSON.stringify({
        nombre : document.getElementById("nombre").value,
        lugar : document.getElementById("lugar").value,
        direccion : document.getElementById("direccion").value,
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
    document.getElementById("crearEventoForm")
        .addEventListener("submit", sameevent);

  } catch (error) {
    console.error(error);
  }
}
