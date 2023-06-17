function cargarDatosEvento() {
    

    var data =  JSON.parse(sessionStorage.getItem('evento'));
    console.log(data);

    document.getElementById("nombre").innerText = data.nombre;
    document.getElementById("lugar").innerText = data.lugar;
    document.getElementById("start-date").innerText = data.fcomienzo.substring(0,10);
    document.getElementById("end-date").innerText = data.ffin.substring(0,10);
    document.getElementById("start-time").innerText = data.hcomienzo;
    document.getElementById("end-time").innerText = data.hfin;
    document.getElementById("descripcion").innerText = data.descripcion;
    
    var comite = SeleccionarComites(data.id_comite);
}

function SeleccionarComites(id_comite) {
    fetch("http://localhost:8080/SeleccionarComites")
    .then(response => response.json())
        .then(data => {
            console.log(data);
            var select = document.getElementById("select");
            for (let i in data) {
                if(data[i].id_comite == id_comite)
                {
                    document.getElementById("select").innerText = data[i].comite;
                }
            }
        })
}
