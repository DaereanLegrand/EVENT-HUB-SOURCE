function cargarDatosEvento() {
    SeleccionarComites();

    var data =  JSON.parse(sessionStorage.getItem('evento'));
    console.log(data);

    document.getElementById("nombre").value = data.nombre;
    document.getElementById("lugar").value = data.lugar;
    document.getElementById("start-date").value = data.fcomienzo;
    document.getElementById("end-date").value = data.ffin;
    document.getElementById("start-time").value = data.hcomienzo;
    document.getElementById("end-date").value = data.hfin;
    document.getElementById("description").value = data.descripcion;
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
