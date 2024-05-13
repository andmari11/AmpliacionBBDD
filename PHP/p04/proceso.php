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
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            // Acceder a las variables del formulario
            $nombre = $_POST['nom'];
            $tel= $_POST['tel'];
            $email = $_POST['mail'];

            // Hacer algo con las variables, como guardarlas en una base de datos o mostrarlas
            echo "Nombre: " . $nombre . "<br>";
            echo "Email: " . $email. "<br>";
            echo "Número: " . $tel. "<br>";

            $primero= $_POST['primero'];
            $segundo = $_POST['segundo'];

            echo "Primero: " . $primero . "<br>";
            echo "Segundo: " . $segundo . "<br>";

            $cafeote = $_POST['cafeote'];

            if($cafeote!='C' && $cafeote!='T'){

                echo "Sin bebida" . "<br>";
            }
            else{

                echo "Bebida: " . $cafeote . "<br>";
            }


            $obs=$_POST['obs'];

            if(empty($obs)){

                echo "Sin observaciones". "<br>";
            }
            else{

                echo $obs . "<br>";
            }


            $condi = $_POST['condi'];

            if($condi=="ok"){

                echo "Ha aceptado las condiciones" . "<br>";
            }
            else{

                echo "No aceptado las condiciones" . "<br>";
                
            }

        }
    ?>

    </body>

</html>