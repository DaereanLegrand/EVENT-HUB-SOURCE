function samepass() {
  var pass1 = document.getElementById("upass").value;
  var pass2 = document.getElementById("upassconf").value;


  if (pass1 !== pass2) {
    document.getElementById("show-error").innerText =
      "Error las contraseñas no coinciden.";
    return false;
  } else {
      fetch("http://localhost:8080/register", {
        method: "POST",
          body: JSON.stringify({
              usuario: document.getElementById("uname").value,
              mail: document.getElementById("umail").value,
              nombres: document.getElementById("nombres").value,
              apellidos: document.getElementById("apellidos").value,
              tipo: document.getElementById("inputState").value,
              documento: document.getElementById("numero-documento").value,
              contraseña: pass1
          })
      }) 
      .then(response => response.json())
        .then(data => {
            if (data[0].success == true) {
                document.getElementById("show-error").style("color: green;");
                document.getElementById("show-error").innerText = "Usted se registro correctamente.";
            }
        })
      document.getElementById("form-register").submit();
  }
}
