function sameambient() {
  try {
    fetch("http://localhost:8080/editarAmbiente", {
      method : "POST",
      body : JSON.stringify({
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
    document.getElementById("editarAmbienteForm")
        .addEventListener("submit", sameambient);

  } catch (error) {
    console.error(error);
  }
}


function cargarAmbiente() {
  var data = JSON.parse(sessionStorage.getItem('ambiente'));
  console.log(data);

  document.getElementById("nombre").value = data.nombre + "1";
  document.getElementById("ubicacion").value = data.ubicacion;
  document.getElementById("aforo-selector").value = data.aforo;
  document.getElementById("tamaño-selector").value = data.tamaño;
  document.getElementById("tipo").value = data.tipo;
  document.getElementById("description").value = data.descripcion;
}
