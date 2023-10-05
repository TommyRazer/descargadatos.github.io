document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que el formulario se envíe de inmediato

    // Muestra la animación de carga
    document.getElementById('loading-container').style.display = 'flex';

    // Simula una carga de 2 segundos (ajusta el tiempo según tus necesidades)
    setTimeout(function () {
        window.location.href = 'dashboard.html'; // Redirige al usuario al dashboard
    }, 2000); // 2000 milisegundos (2 segundos)
});
