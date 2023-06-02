function AdaptarEvento() {
    var title = document.getElementById("titulo").value;
    var lugar = document.getElementById("lugar").value;
    var categoria = document.getElementById("categoria").value;
    var fcomienzo = document.getElementById("start-date").value;
    var ffin = document.getElementById("end-date").value;
    var hcomienzo = document.getElementById("start-time").value;
    var hfin = document.getElementById("end-time").value;
    var description = document.getElementById("description").value;
    var comite = document.getElementById("select").value;
    var image = document.getElementById("image-upload").value;

    fetch("http://localhost:8080/AdaptarEvento", {
        method: "POST",
        body: JSON.stringify({
            nombre: title,
            categoria: categoria,
            fechaComienzo: fcomienzo,
            fechaFin: ffin,
            horaComienzo: hcomienzo,
            horaFin: hfin,
            lugar: lugar,
            descripcion: description,
            comite: comite,
            image: image,
        })
    })
    .then(response => response.json())
        .then(data => {
            if (data[0].success == true) {
            }
        })
      document.getElementById("form-adapt").submit();
}

function SeleccionarComites() {
    fetch("http://localhost:8080/SeleccionarComites")
    .then(response => response.json())
        .then(data => {
            console.log(data);
            var select = document.getElementById("select");
            for (let i in data) {
                let opt = document.createElement("option");
                opt.value = data[i].id_comite;
                opt.innerHTML = data[i].comite;
                select.appendChild(opt);
            }
        })
}
