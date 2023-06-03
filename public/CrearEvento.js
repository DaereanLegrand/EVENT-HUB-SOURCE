function sameevent() {
  try {
    fetch("http://localhost:8080/crearEvento", {
      method : "POST",
      body : JSON.stringify({
        nombre : document.getElementById("nombre").value,
        lugar : document.getElementById("lugar").value,
        startdate : document.getElementById("start-date").value,
        enddate : document.getElementById("end-date").value,
        starttime : document.getElementById("start-time").value,
        endtime : document.getElementById("end-time").value,
        descripcion : document.getElementById("descripcion").value,
      }),
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            sessionStorage.setItem('id_evento', data.id_evento);
            /*
          if (data[0].success == true) {
            document.getElementById("show-error").style("color: green;");
            document.getElementById("show-error").innerText = "Evento Creado";
            window.location.href = "/Actividades.html";
          }
            */
        });
    //document.getElementById("crearEventoForm").addEventListener("submit", sameevent);

  } catch (error) {
    console.error(error);
  }
}
