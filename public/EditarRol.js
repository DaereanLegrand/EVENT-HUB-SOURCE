// Obtener el ID del rol desde el almacenamiento local
const roleId = localStorage.getItem('roleId');

// Obtener referencia al formulario
const form = document.getElementById('edit-form');

// Manejar el evento de envío del formulario
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Evitar que el formulario se envíe automáticamente

  // Obtener el valor seleccionado del rol
  const selectedRole = document.getElementById('rol').value;

  // Crear el objeto de datos con el ID y el rol actualizado
  const updatedRole = {
    idRol: roleId,
    nuevoRol: selectedRole
  };

  // Realizar la solicitud POST al servidor para actualizar el rol
  fetch('http://localhost:8080/actualizarRol', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedRole)
  })
    .then(response => response.json())
    .then(data => {
      console.log('Rol actualizado:', data);
      // Redireccionar a la página de visualización de roles después de la actualización
      window.location.href = 'VerRoles.html';
    })
    .catch(error => console.error('Error al actualizar el rol:', error));
});

