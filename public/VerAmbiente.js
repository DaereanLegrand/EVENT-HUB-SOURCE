function cargarAmbiente() {
    var data = JSON.parse(sessionStorage.getItem('ambiente'));
    console.log(data);

    document.getElementById("nombre").innerText = data.nombre;
    document.getElementById("ubicacion").innerText = data.ubicacion;
    document.getElementById("aforo-selector").innerText = data.aforo;
    document.getElementById("tamaño-selector").innerText = data.tamaño;
    document.getElementById("tipo").innerText = data.tipo;
    document.getElementById("description").innerText = data.descripcion;
}
