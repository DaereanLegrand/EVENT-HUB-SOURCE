function samepass(event) {
  event.preventDefault();
  var pass1 = document.getElementById("upass").value;
  var pass2 = document.getElementById("upassconf").value;
    
  if (pass1 !== pass2) {
    console.log("Las contraseñas no coinciden");
    return false;
  }

  document.getElementById("form-register").submit();
}
