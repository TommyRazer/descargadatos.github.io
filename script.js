document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que el formulario se envíe

        // Aquí puedes agregar la lógica de validación y autenticación

        alert("Formulario enviado. Agrega tu lógica de autenticación aquí.");
    });
});
gapi.load('auth2', function() {
    gapi.auth2.init({
        client_id: '331705884456-qrcc33840t7seuah8l1ap06hr4vv2mbe.apps.googleusercontent.com'
    });
});
function onSignIn(googleUser) {
    // Aquí puedes manejar la información del usuario, como el nombre y el correo electrónico.
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Nombre: ' + profile.getName());
    console.log('Correo electrónico: ' + profile.getEmail());
}

