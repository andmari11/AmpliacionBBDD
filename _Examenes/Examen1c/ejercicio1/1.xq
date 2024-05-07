xquery version "3.1";

for $x in doc("academia.xml")/academia/alumno
return 
<alumno>
<nif>{data($x/@nif)}</nif>
<num-asig>{count($x/asignatura)}</num-asig>
</alumno>


for $x in doc("academia.xml")/academia/alumno
where every $y in $x/asignatura/nota satisfies $y>=5
return 
<alumno-apto>
<nif>{data($x/@nif)}</nif>
</alumno-apto>


for $x in doc("academia.xml")/academia/alumno
return 
<alumno>
    <nif>{data($x/@nif)}</nif>
    <profesores>
        {for $y in doc("asignaturas.xml")//asignatura
        where $y/@cod=$x/asignatura/@cod
        return $y/profesor}
    </profesores>    
</alumno>

