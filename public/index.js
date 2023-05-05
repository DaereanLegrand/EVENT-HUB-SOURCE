window.addEventListener("DOMContentLoaded", function() {
    const bflogin = document.getElementById("submit-bt");
    bflogin.addEventListener("click", validateCredentials);
})


function validateCredentials(event) {
    event.preventDefault();
    var uname = document.getElementById("floatingInput").value;
    var upass = document.getElementById("floatingPassword").value;

    //console.log("IN FUNCTION");
    //console.log(uname);
    //console.log(upass);

    fetch("http://localhost:8080/login", {
        method: "POST",
        body: JSON.stringify({
            usuario: uname,
            contraseña: upass
        })
    })
    .then(response => response.json())
        .then(data => {
            if (data[0].count == 1) {
                document.getElementById("form-signin-true").submit();
            } else {
                document.getElementById("show-error").innerText = "Error credenciales inválidas.";
                return false;
            }
        })
}
