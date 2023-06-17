function crearActividad() {

    
    //var evento_id = JSON.parse(sessionStorage.getItem('id_evento'));
    var title = document.getElementById("nombre").value;
    var fcomienzo = document.getElementById("start-date").value;
    var ffin = document.getElementById("end-date").value;
    var hcomienzo = document.getElementById("start-time").value;
    var hfin = document.getElementById("end-time").value;
    var description = document.getElementById("description").value;
    var exponame = document.getElementById("expo_name").value;

    console.log(title);
    fetch("http://localhost:8080/Actividades", {
        method: "POST",
        body: JSON.stringify({
            //idevento : evento_id,
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
    
          });
            //if (data[0].success == true) {
            //}
        
     
}



  
