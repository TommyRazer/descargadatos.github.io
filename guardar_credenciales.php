<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];
    
    // Compara el usuario y la contraseña ingresados con los valores esperados
    if ($username === "Tommy" && $password === "admin") {
        // Credenciales válidas, redirige al usuario al dashboard
        header("Location: dashboard.html");
        exit;
    } else {
        // Credenciales incorrectas, muestra un mensaje de error
        echo "Usuario o contraseña incorrectos.";
    }
} else {
    echo "Acceso no autorizado.";
}
?>
