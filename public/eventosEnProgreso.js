function obtenerTodosLosEventos() {
    
    fetch("http://localhost:8080/eventosEnProgreso", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Establece el tipo de contenido como JSON
      },
    })
      .then(response => response.json())
      .then(data => {
        
        const eventos = data;
        const listaEventos = document.getElementById("eventos-list");
  
        eventos.forEach(evento => {
          const {id_evento, nombre } = evento;
          const listItem = document.createElement("li");

          var mevento = document.createElement("div");
          var img = document.createElement("img");
          var h4 = document.createElement("h1");
          var buttonActividades = document.createElement("button");
          var buttonMateriales = document.createElement("button");
          var buttonModificar = document.createElement("button");
          var buttonAdaptar = document.createElement("button");
          var buttonEliminar = document.createElement("button");

          mevento.className = "mevento";
          img.className = "img-evento";
          img.src = "/images/fiesta.png";
          
          h4.className = "name-evento";
          h4.innerText = nombre;

          buttonActividades.className = "btn2";
          buttonActividades.innerText = "Actividades";
          buttonActividades.addEventListener("click", function () {
            RedirectActividades(evento);
          });

          buttonMateriales.className = "btn2";
          buttonMateriales.innerText = "Materiales";
          buttonMateriales.addEventListener("click", function () {
            RedirectMateriales(evento);
          });

          buttonModificar.className = "btn2";
          buttonModificar.innerText = "Modificar";
          buttonModificar.addEventListener("click", function () {
            RedirectModificar(evento);
          });

          buttonAdaptar.className = "btn2";
          buttonAdaptar.innerText = "Adaptar";
          buttonAdaptar.addEventListener("click", function () {
            RedirectAdaptar(evento);
          });

          buttonEliminar.className = "btn2";
          buttonEliminar.innerText = "Eliminar";
          buttonEliminar.addEventListener("click", function () {
            EliminarEvento(id_evento);
          });



          mevento.appendChild(img);
          mevento.appendChild(h4);
          mevento.appendChild(buttonActividades);
          mevento.appendChild(buttonMateriales);
          mevento.appendChild(buttonModificar);
          mevento.appendChild(buttonAdaptar);
          mevento.appendChild(buttonEliminar);
        
          listItem.appendChild(mevento);
          listaEventos.appendChild(listItem);
        });
      })
      .catch(error => {
        console.error("Error al obtener los eventos:", error);
      });
  }

function RedirecActividades(evento) {
    sessionStorage.setItem("evento", JSON.stringify(evento));
    // PROXIMAMENTE
    //location.href = "/editarAmbiente.html"; 
  }

function RedirectMateriales(evento) {
    sessionStorage.setItem("evento", JSON.stringify(evento));
    // PROXIMAMENTE
    //location.href = "/editarAmbiente.html";
  }
function RedirectModificar(evento) {
  sessionStorage.setItem("evento", JSON.stringify(evento));
  location.href = "/editarEvento.html";
}

function RedirectAdaptar(evento) {
  sessionStorage.setItem("evento", JSON.stringify(evento));
  location.href = "/AdaptarEvento.html";
}

function EliminarEvento(id_ambiente){

} 
