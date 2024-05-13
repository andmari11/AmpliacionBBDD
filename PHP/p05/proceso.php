<!DOCTYPE html>
<html>
    <head>

        <meta charset="utf-8">
        <title>Práctica 4</title>
        <style>

        th {

            border: 1px solid grey;
        }
        table{

            border: 2px solid black;
        }
        </style>
    
    </head>

    <body>

    <?php

        $array_user= array(
            "user"=>"1234",
            "admin"=>"admin"
        );

        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            // Acceder a las variables del formulario
            $pass = $_POST['pass'];
            $mail= $_POST['mail'];

            if(array_key_exists($mail, $array_user)){

                echo "Usuario ya existente <br>";
            }
            else{

               $array_user[$mail]=$pass; 

                echo "<table>";

                foreach ($array_user as $clave => $valor) {
                    echo "<tr>";
                    echo "<th>$clave</th>";
                    echo "<th>$valor</th>";
                    echo "</tr>";
                }
                echo "</table>";
            }
        }
    ?>
    </body>

</html>