// Después de verificar las credenciales en index.html
if (credencialesSonCorrectas) {
    const nombreUsuario = "Tommy"; // Aquí obtén el nombre de usuario de tu lógica de autenticación
    window.location.href = 'dashboard.html?username=Tommy' + encodeURIComponent(nombreUsuario);
}
    