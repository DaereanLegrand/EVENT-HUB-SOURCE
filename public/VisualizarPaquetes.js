function obtenerTodosLosPaquetes() {
    var preData = JSON.parse(sessionStorage.getItem('evento'));
    
    fetch("http://localhost:8080/VisualizarPaquetes", {
      method: "POST",
      body : JSON.stringify({
        id_evento : preData.id_evento,
      })
    })
      .then(response => response.json())
      .then(data => {
        
        const paquetes = data;
        const listaPaquetes = document.getElementById("paquetes-list");
  
        paquetes.forEach(paquete => {
          const {id_paquete, nombre } = paquete;
          const listItem = document.createElement("li");

          var mpaquete = document.createElement("div");
          var paqueteInfoDiv = document.createElement("div");
          var buttonsDiv = document.createElement("div");
          var img = document.createElement("img");
          var h4 = document.createElement("h1");
          var buttonAdaptar = document.createElement("button");
          var buttonEditar = document.createElement("img");
          var buttonVer = document.createElement("img");
          var buttonEliminar = document.createElement("img");
          

          mpaquete.className = "mpaquete";

          paqueteInfoDiv.className = "paqueteInfo";

          buttonsDiv.className = "buttonsContainer"

          img.className = "img-paquete";
          img.src = "/images/fiesta.png";
          
          h4.className = "name-paquete";
          h4.innerText = nombre;

          buttonAdaptar.className = "btn2";
          buttonAdaptar.innerText = "Adaptar";
          buttonAdaptar.addEventListener("click", function () {
            RedirectAdaptar(paquete);
          });

          buttonVer.className = "img-button ";
          buttonVer.src = "/images/ver.png";
          buttonVer.addEventListener("click", function () {
            RedirectVerPaquete(paquete);
          });

          buttonEditar.className = "img-button ";
          buttonEditar.src = "/images/editar.png";
          buttonEditar.addEventListener("click", function () {
            RedirectEditar(paquete);
          
          });
          
          buttonEliminar.className = "img-button ";
          buttonEliminar.src = "/images/eliminar.png";
          buttonEliminar.addEventListener("click", function () {
            EliminarPaquete(id_paquete);
          });


          
          paqueteInfoDiv.appendChild(img);
          paqueteInfoDiv.appendChild(h4);
       
          buttonsDiv.appendChild(buttonAdaptar);
          buttonsDiv.appendChild(buttonVer);
          buttonsDiv.appendChild(buttonEditar);
          buttonsDiv.appendChild(buttonEliminar);
        
          mpaquete.appendChild(paqueteInfoDiv);
          mpaquete.appendChild(buttonsDiv);

          listItem.appendChild(mpaquete);
          listaPaquetes.appendChild(listItem); 
        });
      })
      .catch(error => {
        console.error("Error al obtener los paquetes:", error);
      });
  }

function RedirectVerPaquete(paquete) {
  sessionStorage.setItem("paquete", JSON.stringify(paquete));
  location.href = "/VerPaquete.html";
}

function RedirectEditar(paquete) {
  sessionStorage.setItem("paquete", JSON.stringify(paquete));
  location.href = "/EditarPaquete.html";
}

function RedirectAdaptar(paquete) {
  sessionStorage.setItem("paquete", JSON.stringify(paquete));
  location.href = "/AdaptarPaquete.html";
}
function EliminarPaquete(id_paquete) {
  fetch("http://localhost:8080/EliminarPaquete", {
    method: "POST",
    
    body: JSON.stringify({ id : id_paquete }),
  })
    .then(response => response.json())
    .then(data => {
      console.log("El paquete se ha eliminado correctamente:", data);
      
    })
    .catch(error => {
      console.error("Error al eliminar el paquete:", error);
    });
    location.reload();
}


