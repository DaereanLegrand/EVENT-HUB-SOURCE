document.getElementById('agregar-trabajador-btn').addEventListener('click', () => {
  window.location.href = 'AgregarTrabajador.html';
});

// Obtener referencia a la tabla
const table = document.getElementById('roles-table');

// Realizar la solicitud al servidor para obtener los roles
fetch('http://localhost:8080/roles')
  .then(response => response.json())
  .then(data => {
    // Iterar sobre los roles y crear filas en la tabla
    data.forEach(role => {
      const row = document.createElement('tr');
      const idCell = document.createElement('td');
      const nombreCell = document.createElement('td');
      const apellidoCell = document.createElement('td');
      const numeroDocumentoCell = document.createElement('td');
      const rolCell = document.createElement('td');
      const actionsCell = document.createElement('td');
      const editButton = document.createElement('button');
      const deleteButton = document.createElement('button'); // Nuevo botón de borrado

      idCell.textContent = role.id;
      nombreCell.textContent = role.nombres;
      apellidoCell.textContent = role.apellidos;
      numeroDocumentoCell.textContent = role.numero_documento;
      rolCell.textContent = role.rol;

      editButton.textContent = 'Editar';
      editButton.classList.add('btn', 'btn-primary');
      editButton.addEventListener('click', () => {
  	// Guardar el ID en el almacenamiento local
  	localStorage.setItem('roleId', role.id);

  	// Redireccionar a la página de edición
  	window.location.href = 'EditarRol.html';
      });

      deleteButton.textContent = 'Eliminar'; // Texto del botón de borrado
      deleteButton.classList.add('btn', 'btn-danger'); // Clases CSS del botón de borrado
      deleteButton.addEventListener('click', () => {
        // Obtener el ID del rol a eliminar
        const roleId = role.id;

        // Enviar la solicitud DELETE al servidor
        fetch(`http://localhost:8080/EliminarRol`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ id: roleId })
        })
          .then(response => response.json())
          .then(data => {
            console.log('Elemento eliminado:', data);
            // Actualizar la tabla después de eliminar el elemento
            table.querySelector('tbody').removeChild(row);
	   
          })
          .catch(error => console.error('Error al eliminar el elemento:', error));
      });

      // Agregar las celdas a la fila
      actionsCell.appendChild(editButton);
      actionsCell.appendChild(deleteButton);
      row.appendChild(idCell);
      row.appendChild(nombreCell);
      row.appendChild(apellidoCell);
      row.appendChild(numeroDocumentoCell);
      row.appendChild(rolCell);
      row.appendChild(actionsCell);

      // Agregar la fila a la tabla
      table.querySelector('tbody').appendChild(row);
    });
  })
  .catch(error => console.error('Error al obtener los roles:', error));

