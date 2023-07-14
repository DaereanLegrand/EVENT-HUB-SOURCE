function crearComite() {
  // Redireccionar a la página CrearComite.html
  window.location.href = "CrearComite.html";
}

function eliminarComite(idComite) {
  fetch("http://localhost:8080/eliminarComite", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ idComite }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        console.log("Comité eliminado exitosamente");
        // Volver a cargar la tabla de comités después de eliminar
        cargarComites();
      } else {
        console.error("Error al eliminar el comité:", data.error);
      }
    })
    .catch((error) => {
      console.error("Error al eliminar el comité:", error);
    });
}

function cargarComites() {
  const comitesTable = document.getElementById("comites-table");

  fetch("http://localhost:8080/comites")
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        const comites = data.comites;

        comites.forEach((comite) => {
          const row = document.createElement("tr");
          const idComiteCell = document.createElement("td");
          const eventoCell = document.createElement("td");
          const trabajadoresCell = document.createElement("td");
          const accionesCell = document.createElement("td");
          const eliminarButton = document.createElement("button");
          eliminarButton.textContent = "Eliminar";
          eliminarButton.classList.add("btn", "btn-danger");
          accionesCell.appendChild(eliminarButton);

          idComiteCell.textContent = comite.id;
          eventoCell.textContent = comite.evento;
          trabajadoresCell.textContent = comite.trabajadores.join(", ");

          eliminarButton.addEventListener("click", () => {
            eliminarComite(comite.id);
          });

          row.appendChild(idComiteCell);
          row.appendChild(eventoCell);
          row.appendChild(trabajadoresCell);
          row.appendChild(accionesCell);

          comitesTable.appendChild(row);
        });
      } else {
        console.error("Error al obtener los comités:", data.error);
      }
    })
    .catch((error) => {
      console.error("Error al obtener los comités:", error);
    });
}

document.addEventListener("DOMContentLoaded", function () {
  cargarComites();
});

