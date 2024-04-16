<!DOCTYPE html>
<html>
    <head>

        <meta charset="utf-8">
        <title>Práctica 3</title>
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

            echo "<table>";
            for($i=1; $i <= 10; $i++){

                echo "<tr>";
                for($j=1; $j<=10;$j++){

                    $prod=$i*$j;
                    echo "<th> " . $prod . "</th>";
                }
                echo "</tr>";

            }
            echo "</table>";

        ?>
    </body>

</html>