<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Mensajes</title>
</head>



<body>
	<?php
    session_start();


    if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
        $emisor=$_POST["emisor"];
        $receptor=$_POST["receptor"];
        $mensaje=$_POST["mensaje"];

        $conn = new mysqli('localhost', 'root', '', 'ABD');
        if($conn->query("INSERT INTO mensajes (emisor, receptor, text) VALUES ('$emisor', '$receptor', '$mensaje')")){
            echo("mensaje enviado");
        }
        else{
            echo ("<fieldset>mensaje no enviado</fieldset>");
        }
    }
    echo"<fieldset>";
    if(!isset($_SESSION["login"])){
        echo"vete a la porra, inicia sesion";
    }
    else{
        $conn = new mysqli('localhost', 'root', '', 'ABD');
        $result = $conn->query("SELECT * FROM mensajes WHERE receptor='{$_SESSION["nombre"]}'");

        if($result->num_rows==0){

            echo "No hay mensajes";
        }
        else{

            echo "<table border='1'>";
            echo "<tr><th>ID</th><th>Emisor</th><th>Texto</th></tr>";
            while ($row = $result->fetch_assoc()) {
                echo "<tr>";
                echo "<td>" . $row["id"] . "</td>";
                echo "<td>" . $row["emisor"] . "</td>";
                echo "<td>" . $row["text"] . "</td>";
                echo "</tr>";
            }
            echo "</table>";
        }
    }

	?>
	</fieldset>

	<form action="mensajes.php" method="post">
	<fieldset>
		<legend>Mandar mensaje</legend>
			Mandar a: <br> <select name="receptor" id="receptor">

			<?php
				$conn = new mysqli('localhost', 'root', '', 'ABD');
				if ($conn->connect_error){
					die("La conexión ha fallado" . $conn->connect_error);
				}
	
				$result = $conn->query("SELECT * FROM usuarios");

				while ($row = $result->fetch_assoc()) {
					echo "<option> {$row["nombre"]}</option>";
				}
			?>
			</select> <br>
			Mensaje:<br> <input type="text" name="mensaje" id="mensaje"><br>

            <?php
                
                echo "<input type='hidden' name='emisor' value='{$_SESSION['nombre']}'>";
                
            ?>

	</fieldset>
	<input type="submit" name="enviar">	
	</form>

</body>
</html>