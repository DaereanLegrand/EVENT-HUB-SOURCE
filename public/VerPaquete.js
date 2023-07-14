function cargarDatosPaquete() {
    var data =  JSON.parse(sessionStorage.getItem('paquete'));
    console.log(data);

    document.getElementById("nombre").innerText = data.nombre;
    document.getElementById("descripcion").innerText = data.descripcion;
    document.getElementById("precio").value = data.precio;
}
