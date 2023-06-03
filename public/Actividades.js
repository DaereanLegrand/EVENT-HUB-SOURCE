function crearActividad() {

    var data =  JSON.parse(sessionStorage.getItem('evento'));
    console.log(data);
    var evento_id = data.id_evento;
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

            var mevento = document.createElement("div");
            var buttonContinuar = document.createElement("button");

            mevento.className = "mevento";
            buttonContinuar.className = "btn2";
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
    sessionStorage.setItem("idActividad", JSON.stringify(evento));
    location.href = "/editarEvento.html";
  }
  
