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
