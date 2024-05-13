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
            $pass = $_POST['password'];
            $mail= $_POST['mail'];

            if(array_key_exists($mail, $array_user) && $array_user[$mail]==$pass){

                echo "Sesión iniciada <br>";
            }
            else{

               echo"
               <form action='proceso2.php' method='post'>
               <fieldset>
                   <legend>Datos personales</legend>
                       E-mail:<br> <input type='text' name='mail'><br>
                       Password: <br> <input type='password' name='pass'><br>
                       Repite Password:<br> <input type='password' name='pass2'><br>
               </fieldset>
               
               <input type='submit' name='aceptar'>	
               </form>
               ";
            }
        }
    ?>
    </body>

</html>