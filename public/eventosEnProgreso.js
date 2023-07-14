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
          var eventoInfoDiv = document.createElement("div");
          var buttonsDiv = document.createElement("div");
          var img = document.createElement("img");
          var h4 = document.createElement("h1");
          var buttonPaquetes = document.createElement("button");
          var buttonAmbientes = document.createElement("button");
          var buttonActividades = document.createElement("button");
          var buttonMateriales = document.createElement("button");
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
            
          buttonPaquetes.className = "btn2";
          buttonPaquetes.innerText = "Paquetes";
          buttonPaquetes.addEventListener("click", function () {
            RedirectPaquetes(evento);
          });

          buttonAmbientes.className = "btn2";
          buttonAmbientes.innerText = "Ambientes";
          buttonAmbientes.addEventListener("click", function () {
            RedirectAmbientes(evento);
          });

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

          buttonAdaptar.className = "btn2";
          buttonAdaptar.innerText = "Adaptar";
          buttonAdaptar.addEventListener("click", function () {
            RedirectAdaptar(evento);
          });

          buttonVer.className = "img-button ";
          buttonVer.src = "/images/ver.png";
          buttonVer.addEventListener("click", function () {
            RedirectVerEvento(evento);
          });

          buttonEditar.className = "img-button ";
          buttonEditar.src = "/images/editar.png";
          buttonEditar.addEventListener("click", function () {
            RedirectEditar(evento);
          
          });
          
          buttonEliminar.className = "img-button ";
          buttonEliminar.src = "/images/eliminar.png";
          buttonEliminar.addEventListener("click", function () {
            EliminarEvento(id_evento);
          });


          
          eventoInfoDiv.appendChild(img);
          eventoInfoDiv.appendChild(h4);
          buttonsDiv.appendChild(buttonPaquetes);
          buttonsDiv.appendChild(buttonAmbientes);
          buttonsDiv.appendChild(buttonActividades);
          buttonsDiv.appendChild(buttonMateriales);
       
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

function RedirectPaquetes(evento) {
  sessionStorage.setItem("evento", JSON.stringify(evento));
  location.href = "/VisualizarPaquetes.html";
}

function RedirectVerEvento(evento) {
  sessionStorage.setItem("evento", JSON.stringify(evento));
  location.href = "/VerEvento.html";
}

function RedirectAmbientes(evento) {
  sessionStorage.setItem("evento", JSON.stringify(evento));
  location.href = "/VisualizarAmbientes.html";
}

function RedirectActividades(evento) {
    sessionStorage.setItem("evento", JSON.stringify(evento));
    location.href = "/VisualizarActividades.html"; 
}

function RedirectMateriales(evento) {
    sessionStorage.setItem("evento", JSON.stringify(evento));
    // PROXIMAMENTE
    //location.href = "/editarAmbiente.html";
  }
function RedirectEditar(evento) {
  sessionStorage.setItem("evento", JSON.stringify(evento));
  location.href = "/editarEvento.html";
}

function RedirectAdaptar(evento) {
  sessionStorage.setItem("evento", JSON.stringify(evento));
  location.href = "/AdaptarEvento.html";
}
function EliminarEvento(id_evento) {
  fetch("http://localhost:8080/EliminarEvento", {
    method: "POST",
    
    body: JSON.stringify({ id : id_evento }),
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


