function validateCredentials() {
    var uname = document.getElementById("floatingInput").value;
    var upass = document.getElementById("floatingPassword").value;

    fetch("http://localhost:8080/login", {
        method: "POST",
        body: JSON.stringify({
            usuario: uname,
            contraseña: upass
        })
    })
    .then(response => response.json())
        .then(data => {
            if (data[0].count != 0) {
                document.getElementById("form-signin-true").submit();
            } else {
                document.getElementById("show-error").innerText = "Error credenciales inválidas.";
                return false;
            }
        })
}
