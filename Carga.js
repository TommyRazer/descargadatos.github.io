// Procesa el formulario
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Comprueba las credenciales ingresadas
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "Tommy" && password === "admin") {
        // Credenciales válidas, redirige al usuario al dashboard
        window.location.href = 'dashboard.html';
    } else {
        // Credenciales incorrectas, muestra el mensaje de error
        document.getElementById('error-message').style.display = 'block';
        
        // Oculta la pantalla de carga
        document.getElementById('loading-screen').classList.add('hidden');
    }
});
