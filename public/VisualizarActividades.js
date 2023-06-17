function obtenerTodosLosAmbientes() {
    var preData = JSON.parse(sessionStorage.getItem('evento'));
    document.getElementById("ambiente-name").innerText = `Actividades de ${preData.nombre}`;
    fetch("http://localhost:8080/VisualizarActividades", {
      method: "POST",
      
      body : JSON.stringify({
        id_evento : preData.id_evento,
      })
      
    })
      .then(response => response.json())
      .then(data => {
        
        const eventos = data;
        const listaEventos = document.getElementById("eventos-list");
  
        eventos.forEach(evento => {
          const {id_ambiente, nombre } = evento;
          const listItem = document.createElement("li");

          var mevento = document.createElement("div");
          var eventoInfoDiv = document.createElement("div");
          var buttonsDiv = document.createElement("div");
          var img = document.createElement("img");
          var h4 = document.createElement("h1");
          var buttonAdaptar = document.createElement("button");
          var buttonEditar = document.createElement("img");
          var buttonVer = document.createElement("img");
          var buttonEliminar = document.createElement("img");
          
          

          mevento.className = "mevento";

          eventoInfoDiv.className = "eventoInfo";

          buttonsDiv.className = "buttonsContainer"

          img.className = "img-evento";
          img.src = "/images/fiesta.png";
          
          h4.className = "name-evento";
          h4.innerText = nombre;

          buttonAdaptar.className = "btn2";
          buttonAdaptar.innerText = "Adaptar";
          buttonAdaptar.addEventListener("click", function () {
            RedirectAdaptar(evento);
          });

          buttonVer.className = "img-button ";
          buttonVer.src = "/images/ver.png";
          buttonVer.addEventListener("click", function () {
            RedirectVer(evento);
          });

          buttonEditar.className = "img-button ";
          buttonEditar.src = "/images/editar.png";
          buttonEditar.addEventListener("click", function () {
            //EliminarEvento(id_evento);
          });
          
          buttonEliminar.className = "img-button ";
          buttonEliminar.src = "/images/eliminar.png";
          buttonEliminar.addEventListener("click", function () {
            EliminarActividad(evento.id_actividad);
          });


          
          eventoInfoDiv.appendChild(img);
          eventoInfoDiv.appendChild(h4);
          buttonsDiv.appendChild(buttonAdaptar);
          buttonsDiv.appendChild(buttonVer);
          buttonsDiv.appendChild(buttonEditar);
          buttonsDiv.appendChild(buttonEliminar);
        
          mevento.appendChild(eventoInfoDiv);
          mevento.appendChild(buttonsDiv);

          listItem.appendChild(mevento);
          listaEventos.appendChild(listItem); 
        });
      })
      .catch(error => {
        console.error("Error al obtener los eventos:", error);
      });
  }


  function RedirectVer(evento) {
    sessionStorage.setItem("evento", JSON.stringify(evento));
    location.href = "/VerAmbiente.html"; 
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
function EliminarActividad(id_actividad) {
  fetch("http://localhost:8080/EliminarActividad", {
    method: "POST",
    
    body: JSON.stringify({ id : id_actividad }),
  })
    .then(response => response.json())
    .then(data => {
      console.log("El evento se ha eliminado correctamente:", data);
      
    })
    .catch(error => {
      console.error("Error al eliminar el evento:", error);
    });
    location.reload();
}


