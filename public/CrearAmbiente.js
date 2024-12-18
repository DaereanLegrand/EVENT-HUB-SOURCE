function sameambient() {
  try {
    var data = JSON.parse(sessionStorage.getItem('ambiente'));
    console.log(data.id_evento);
    fetch("http://localhost:8080/crearAmbiente", {
      method : "POST",
      body : JSON.stringify({
        id_evento : data.id_evento,//ARREGLAR
        nombre : document.getElementById("nombre").value,
        ubicacion : document.getElementById("ubicacion").value,
        aforo : document.getElementById("aforo-selector").value,
        tamaño : document.getElementById("tamaño-selector").value,
        tipo : document.getElementById("tipo").value,
        descripcion : document.getElementById("description").value,
      })
    })
        .then(response => response.json())
        .then(data => {
          if (data[0].success == true) {
            document.getElementById("show-error").style("color: green;");
            document.getElementById("show-error").innerText = "Evento Creado";
          }
        })
    document.getElementById("crearAmbienteForm")
        .addEventListener("submit", sameambient);

  } catch (error) {
    console.error(error);
  }
}
