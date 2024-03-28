<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Filtrar</title>
</head>



<body>
	<fieldset>
	<?php

	if ($_SERVER["REQUEST_METHOD"] == "POST") {

		$categoria = $_POST['categoria'];
		$precio_min = $_POST['min'];
		$precio_max = $_POST['max'];

		if(!$precio_max){
			$precio_max=1000;
		}
		if(!$precio_min){
			$precio_min=0;
		}

		$conn = new mysqli('localhost', 'root', '', 'ABD');
		$result = $conn->query("SELECT * FROM Libros WHERE categoria='$categoria' AND precio BETWEEN $precio_min AND $precio_max");
    	if ($result->num_rows > 0) {
        	echo "<h2>Libros encontrados:</h2>";
        	echo "<table border='1'>";
        	echo "<tr><th>Título</th><th>Categoría</th><th>Precio</th></tr>";
        	while ($row = $result->fetch_assoc()) {
            	echo "<tr><td>" . $row["titulo"] . "</td><td>" . $row["categoria"] . "</td><td>" . $row["precio"] . "</td></tr>";
        	}
        	echo "</table>";
    	} else {

        	echo "No se encontraron libros para la categoría seleccionada y el rango de precio especificado.";
    	}	


	}

	?>
	</fieldset>
	<form action="filtrar.php" method="post">
	<fieldset>
		<legend>Datos</legend>
			Categorias: <br> <select name="categoria" id="categoria">

			<?php
				$conn = new mysqli('localhost', 'root', '', 'ABD');
				if ($conn->connect_error){
					die("La conexión ha fallado" . $conn->connect_error);
				}
	
				$result = $conn->query("SELECT * FROM Categorias");

				while ($row = $result->fetch_assoc()) {
					echo "<option> {$row["categoria"]}</option>";
				}
			?>
			</select> <br>
			PrecioMax:<br> <input type="text" name="max"><br>
			PrecioMin: <br> <input type="text" name="min"><br>
	</fieldset>
	<input type="submit" name="aceptar">	
	</form>

</body>
</html>