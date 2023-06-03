function obtenerTodosLosAmbientes() {
  fetch("http://localhost:8080/seleccionarAmbientes", {
    method : "POST",
    headers : {
      "Content-Type" :
          "application/json", // Establece el tipo de contenido como JSON
    },
  })
      .then((response) => response.json()) // Parsea la respuesta como JSON
      .then((data) => {
        const ambientes = data; // Obtiene los datos como un objeto JavaScript
        const listaAmbientes = document.getElementById("ambientes-list");

        ambientes.forEach((ambiente) => {
          // const { id_ambiente, id_actividad ,nombre, descripcion, horario } =
          // ambiente;
          const {id_ambiente, nombre} = ambiente;
          const listItem = document.createElement("li");
          var mevento = document.createElement("div");
          var img = document.createElement("img");
          var h1 = document.createElement("h1");
          var buttonModificar = document.createElement("button");
          var buttonAdaptar = document.createElement("button");
          var buttonEliminar = document.createElement("button");

          mevento.className = "mevento";

          img.className = "img-evento";
          img.src = "/images/fiesta.png";

          h1.className = "name-evento";
          h1.innerText = nombre;

          buttonModificar.className = "btn2";
          buttonModificar.addEventListener(
              "click", function() { RedirectModificar(ambiente); });
          buttonModificar.innerText = "Modificar";

          buttonAdaptar.className = "btn2";
          buttonAdaptar.addEventListener(
              "click", function() { RedirectAdaptar(ambiente); });
          buttonAdaptar.innerText = "Adaptar";

          buttonEliminar.className = "btn2";
          buttonAdaptar.addEventListener(
              "click", function() { EliminarAmbiente(id_ambiente); });
          buttonEliminar.innerText = "Eliminar";

          mevento.appendChild(img);
          mevento.appendChild(h1);
          mevento.appendChild(buttonModificar);
          mevento.appendChild(buttonAdaptar);
          mevento.appendChild(buttonEliminar);

          listItem.appendChild(mevento);
          listaAmbientes.appendChild(listItem);
        });
      })
      .catch((error) => {
        console.error("Error al obtener los ambientes:", error);
      });
}

function RedirectModificar(ambiente) {
  sessionStorage.setItem("ambiente", JSON.stringify(ambiente));
  location.href = "/editarAmbiente.html";
}

function RedirectAdaptar(ambiente) {
  sessionStorage.setItem("ambiente", JSON.stringify(ambiente));
  location.href = "/AdaptarEvento.html";
}

function EliminarAmbiente(id_ambiente) {}
