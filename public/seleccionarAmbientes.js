function obtenerTodosLosAmbientes() {
    fetch("http://localhost:8080/seleccionarAmbientes", {
      method: "POST"
    })
      .then(response => response.json())
      .then(data => {
        const nombresAmbientes = data.map(ambiente => ambiente.nombre);
        const listaAmbientes = document.getElementById("ambientes-list");
  
        nombresAmbientes.forEach(nombre => {
          const listItem = document.createElement("li");
          listItem.innerHTML = `
            <div class="mevento">
              <img class="img-evento" src="/images/fiesta.png" alt="..." />
              <h1 class="name-evento">${nombre}</h1>
              <button class="btn2" onclick="location.href='/visualizador.html'">Modificar</button>
              <button class="btn2" onclick="location.href='/visualizador.html'">Adaptar</button>
              <button class="btn2" onclick="location.href='/visualizador.html'">Eliminar</button>
            </div>
          `;
          listaAmbientes.appendChild(listItem);
        });
      })
      .catch(error => {
        console.error("Error al obtener los ambientes:", error);
      });
  }
