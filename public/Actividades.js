function crearActividad() {

    console.log(data);
    var evento_id = JSON.parse(sessionStorage.getItem('id_evento'));
    var title = document.getElementById("nombre").value;
    var fcomienzo = document.getElementById("start-date").value;
    var ffin = document.getElementById("end-date").value;
    var hcomienzo = document.getElementById("start-time").value;
    var hfin = document.getElementById("end-time").value;
    var description = document.getElementById("description").value;
    var exponame = document.getElementById("expo-name").value;

    fetch("http://localhost:8080/Actividades", {
        method: "POST",
        body: JSON.stringify({
            idevento : evento_id,
            nombre: title,
            fechaComienzo: fcomienzo,
            fechaFin: ffin,
            horaComienzo: hcomienzo,
            horaFin: hfin,
            descripcion: description,
            expositor: exponame
        })
    })
    .then(response => response.json())
        .then(data => {
            var buttonContinuar = document.createElement("button");

            buttonContinuar.className = "a w-50 btn btn-lg";
            buttonContinuar.innerText = "Actividades";
            buttonContinuar.addEventListener("click", function () {
            RedirectAmbientes(evento);
          });
            //if (data[0].success == true) {
            //}
        })
      document.getElementById("form-adapt").submit();
}


function RedirectAmbientes(evento) {
    console.log(data.id_actividad)
    sessionStorage.setItem("id_actividad", data.id_actividad);
    location.href = "/Ambientes.html";
  }
  
