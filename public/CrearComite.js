function crearComite() {
  // Redireccionar a la página CrearComite.html
  window.location.href = "VerComites.html";
}
// Obtener referencia al formulario y a los elementos del DOM
const form = document.getElementById('crear-comite-form');
const eventoSelect = document.getElementById('evento');
const trabajadoresCheckboxes = document.getElementById('trabajadores-checkboxes');

// Función para cargar los eventos en el select
function cargarEventos() {
  // Realizar la solicitud al servidor para obtener los eventos
  fetch('http://localhost:8080/eventos')
    .then(response => response.json())
    .then(data => {
      // Iterar sobre los eventos y crear opciones en el select
      data.forEach(evento => {
        const option = document.createElement('option');
        option.value = evento.id;
        option.textContent = evento.nombre;
        eventoSelect.appendChild(option);
      });
    })
    .catch(error => console.error('Error al obtener los eventos:', error));
}

// Función para cargar los trabajadores como checkboxes
function cargarTrabajadores() {
  // Realizar la solicitud al servidor para obtener los trabajadores
  fetch('http://localhost:8080/roles')
    .then(response => response.json())
    .then(data => {
      // Iterar sobre los trabajadores y crear checkboxes
      data.forEach(trabajador => {
        const checkboxDiv = document.createElement('div');
        checkboxDiv.classList.add('form-check');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = trabajador.id;
        checkbox.name = 'trabajador';
        checkbox.classList.add('form-check-input');

        const label = document.createElement('label');
        label.classList.add('form-check-label');
        label.textContent = `${trabajador.nombres} ${trabajador.apellidos}`;

        checkboxDiv.appendChild(checkbox);
        checkboxDiv.appendChild(label);
        trabajadoresCheckboxes.appendChild(checkboxDiv);
      });
    })
    .catch(error => console.error('Error al obtener los trabajadores:', error));
}

// Función para enviar el formulario
function enviarFormulario(event) {
  event.preventDefault();

  // Obtener el ID del evento seleccionado
  const eventoId = eventoSelect.value;

  // Obtener los IDs de los trabajadores seleccionados
  const trabajadoresSeleccionados = Array.from(form.elements['trabajador'])
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.value);

  // Crear el objeto de datos a enviar al servidor
  const datos = {
    eventoId,
    trabajadores: trabajadoresSeleccionados,
  };

  // Enviar la solicitud al servidor para crear el comité
  fetch('http://localhost:8080/crearComite', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(datos),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Comité creado:', data);
      // Restablecer el formulario después de crear el comité
      form.reset();
      // Mostrar un mensaje de éxito o redireccionar a otra página
    })
    .catch(error => console.error('Error al crear el comité:', error));
}

// Cargar los eventos y los trabajadores al cargar la página
cargarEventos();
cargarTrabajadores();

// Agregar el evento submit al formulario
form.addEventListener('submit', enviarFormulario);

