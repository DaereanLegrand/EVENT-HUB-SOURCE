document.addEventListener("DOMContentLoaded", function() {
    // Obtener el parámetro "ambiente" de la URL
    const params = new URLSearchParams(window.location.search);
    const ambienteJson = params.get("ambiente");
  
    if (ambienteJson) {
      // Convertir el JSON recibido a un objeto JavaScript
      const ambiente = JSON.parse(ambienteJson);
  
      // Hacer algo con los datos del ambiente
      console.log("Datos del ambiente recibidos:");
      console.log(ambiente);
    } else {
      console.error("No se encontraron datos del ambiente");
    }
  });
  