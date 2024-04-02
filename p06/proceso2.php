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
            $pass2 = $_POST['pass2'];
            $mail= $_POST['mail'];

            if($pass==$pass2 && !array_key_exists($mail, $array_user)){

                $array_user[$mail]=$pass; 
                echo "Usuario creado";

            }
            else{

                echo "Error";
            }
        }
    ?>
    </body>

</html>