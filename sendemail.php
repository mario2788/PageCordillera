<?php
        //En el destino colocar el correo alque quieres que lleguen los datos del contacto de tu formulario
 $destino = "secretaria@cordilleracountry.club";
    $nombre = $_POST["name"];
    $email = $_POST["email"];
    $numero = $_POST["phone"];
    $asunto = $_POST["subject"];
    $mensaje = $_POST["message"];
    $empresa = $_POST["company"];

    $contenido = "Nombre: " . $nombre . "\nCorreo: " . $email . "\nNúmero: " . $numero . "\nEmpresa: " . $empresa . "\nAsunto: " . $asunto .  "\nMensaje: " . $mensaje;
    mail($destino, "Contacto", $contenido);
    header("Location: enviado.php");
//Esto es opcional, aqui pueden colocar un mensaje de "enviado correctamente" o redireccionarlo a algun lugar
?>
