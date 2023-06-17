var nombre = localStorage.getItem("nombre");
var apellido = localStorage.getItem("apellido");
var evento = localStorage.getItem("evento");
var tipodocumento = localStorage.getItem("tipodocumento");
var numerodocumento = localStorage.getItem("numerodocumento");
var correoelectronico = localStorage.getItem("correoelectronico");
// Haz lo que necesites con los datos en paquete.html
console.log(nombre);
console.log(apellido);
console.log(evento);
console.log(tipodocumento);
console.log(numerodocumento);
console.log(correoelectronico);

var json = JSON.stringify({evento : parseInt(evento)});
console.log(json);

fetch("http://localhost:8080/paquetesPorEvento", {
  method : "POST",
  headers : {
    "Content-Type" : "application/json",
    //'Accept' : 'application/json, text/plain, */*',
  },

  body : JSON.stringify({
    "evento" : parseInt(evento)
  }), // Envía el identificador del evento al servidor
})
    .then(response => response.json())
    .then(data => {
      const paquetes = data;

      const paquetesContainer = document.getElementById("paquetes-container");

      // Recorre los paquetes y crea elementos en el contenedor para mostrarlos
      paquetes.forEach(paquete => {
        const {id_paquete, nombre, descripcion, precio} = paquete;
        const listItem = document.createElement("li");

        var mpaquete = document.createElement("div");
        var img = document.createElement("img");
        var h4 = document.createElement("h1");
        var buttonElegir = document.createElement("button");

        mpaquete.className = "mpaquete";
        img.className = "img-paquete";
        img.src = "/images/fiesta.png";

        h4.className = "name-paquete";
        h4.innerText = nombre;

        buttonElegir.className = "btn btn-primary";
        buttonElegir.innerText = "Elegir";
        buttonElegir.addEventListener("click", function() { Elegir(paquete); });

        mpaquete.appendChild(img);
        mpaquete.appendChild(h4);
        mpaquete.appendChild(buttonElegir);

        listItem.appendChild(mpaquete);
        paquetesContainer.appendChild(listItem);
        /*
                const paqueteElement = document.createElement("div");
                paqueteElement.className = "box";

                // Agrega el contenido del paquete al elemento creado
                paqueteElement.innerHTML = `
                <h2 style="font-weight: bold; font-size: 40px; text-align:
           center;">${ nombre}</h2> <div class="row align-items-center"> <p
           style="text-align: justify;">${descripcion}</p> <p style="text-align:
           center;">Precio: ${precio}</p> <button class="btn btn-primary"
           onclick="elegirPaquete(${ id_paquete})">Elegir</button>
                </div>
              `;

                // Agrega el elemento del paquete al contenedor
                paquetesContainer.appendChild(paqueteElement);
                */
      });
      showEvent(0);
    })
    .catch(
        error => { console.error("Error al obtener los paquetes:", error); });

function Elegir(paquete) {
  const id_paquete = paquete.id_paquete;
  localStorage.setItem("id_paquete", id_paquete);
  location.href = "/preinscripcionGuardada.html";
}

let currentIndex = 0;
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

function showEvent(index) {
  const paquetes = document.querySelectorAll("#paquetes-container > li");
  paquetes.forEach(
      (paquete,
       i) => { paquete.style.display = i === index ? "block" : "none"; });

  currentIndex = index;
  updateButtons();
}

function updateButtons() {
  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === paquetes.length - 1;
}

prevButton.addEventListener("click", function() {
  currentIndex--;
  showEvent(currentIndex);
});

nextButton.addEventListener("click", function() {
  currentIndex++;
  showEvent(currentIndex);
});
