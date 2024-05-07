xquery version "3.1";

for $x in doc("academia.xml")academia/alumno/
return 
<alumno>
<nif>{data($x/@nif)}</nif>
<num-asig>{count($x/asignatura)}</num-asig>
</alumno>