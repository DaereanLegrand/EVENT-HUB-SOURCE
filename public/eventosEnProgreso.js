function obtenerTodosLosEventos() {
    
    fetch("http://localhost:8080/eventosEnProgreso", {
      method: "POST"
    })
      .then(response => response.json())
      .then(data => {
        
        const nombresEventos = data.map(evento => evento.nombre);
        const listaEventos = document.getElementById("eventos-list");
  
        nombresEventos.forEach(nombre => {
          const listItem = document.createElement("li");
          listItem.innerHTML = `
            <div class="mevento">
                  <img class="img-evento" src="/images/fiesta.png" alt="..." />
                  <h4 class="name-evento">
                    ${nombre}
                  </h4>
                  <button class="btn2" onclick="location.href='/visualizador.html'">
                    Actividades
                  </button>
                  <button class="btn2" onclick="location.href='/visualizador.html'">
                    Materiales
                  </button>
                  <button class="btn2" onclick="location.href='/visualizador.html'">
                    Modificar
                  </button>
                  <button class="btn2" onclick="location.href='/visualizador.html'">
                    Adaptar
                  </button>
                  <button class="btn2" onclick="location.href='/visualizador.html'">
                    Eliminar
                  </button>
                </div>
          `;
          listaEventos.appendChild(listItem);
        });
      })
      .catch(error => {
        console.error("Error al obtener los eventos:", error);
      });
  }
