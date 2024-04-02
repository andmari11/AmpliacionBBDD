<!DOCTYPE html>
<html>
    <head>

        <meta charset="utf-8">
        <title>Práctica 2</title>

    </head>

    <body>

        <?php
    
            $dias= array(

                "L" => "Lunes", 
                "M" => "Martes",
                "X" => "Miércoles",
                "J" => "Jueves",
                "V" => "viernes", 
                "S" => "Sábado",
                "D" => "Domingo"

            );
            
            $seleccionados =array("L", "M", "X", "J", "V");
            
            foreach($seleccionados as $dia){

                echo $dias[$dia] . "<br>";
            }
        ?>

    </body>

</html>