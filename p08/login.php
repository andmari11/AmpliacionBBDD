<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Inicio Sesión</title>
</head>
<body>


<?php
    session_start();

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Acceder a las variables del formulario
        $pass = $_POST['password'];
        $nombre= $_POST['nombre'];

        $conn = new mysqli('localhost', 'root', '', 'ABD');
        $result = $conn->query("SELECT * FROM usuarios WHERE nombre='$nombre'");
        
        if($result->num_rows>0 && $result->fetch_assoc()['password']==$pass){

            $_SESSION["login"]=true;
            $_SESSION["nombre"]=$nombre;
            header("Location: mensajes.php");
            exit();
        }
        else{

        echo " Contraseña o usuario incorrectos";
        }
    }
    ?>

	<form action="login.php" method="post">
	<fieldset>
		<legend>Datos personales</legend>
			Nombre:<br> <input type="text" name="nombre"><br>
			Password: <br> <input type="password" name="password"><br>
	</fieldset>
	
	<input type="submit" name="aceptar">	
	</form>



</body>
</html>