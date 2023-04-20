
window.addEventListener("DOMContentLoaded", function() {
    const bflogin = document.getElementById("submit-bt");
    bflogin.addEventListener("click", validateCredentials);
})


function validateCredentials() {
    var uname = document.getElementById("floatingInput").value;
    var upass = document.getElementById("floatingPassword").value;

    console.log("IN FUNCTION");
    console.log(uname);
    console.log(upass);

    fetch("http://localhost:8080/login", {
        method: "POST",
        body: JSON.stringify({
            usuario: uname,
            contraseña: upass
        })
    })
    .then(response => response.json())
        .then(data => {
            if (JSON.stringify(data.success) === "true") {
                tres.textContent = "Datos ingresados correctamente!";
            } else {
                tres.textContent = "Hubo un error al ingresar los datos!";
            }
        })
}
