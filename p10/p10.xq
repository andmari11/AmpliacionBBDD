xquery version "3.1";
(:
 a)
for $x in doc("planetas.xml")/alojamientos/alojamiento
where $x/@tipo="hotel"
return <info>
    <cif> {data($x/cif)} </cif>
    <tel>{data($x/telefono)} </tel>
    </info>

b)
for $x in doc("planetas.xml")/alojamientos/alojamiento
where $x/@tipo="hotel"
return <info>
    <cif> {data($x/cif)} </cif>
    <nhab>{data(count($x/habitaciones/habitacion))} </nhab>
    </info>
c)
for $x in doc("planetas.xml")/alojamientos/alojamiento
where $x/@tipo="hotel"
return <info>
    <cif> {data($x/cif)} </cif>
    <max>{max(data($x/habitaciones/habitacion/precio))} </max>
    <min>{min(data($x/habitaciones/habitacion/precio))} </min>

    </info>
 :)
 

for $x in doc("planetas.xml")/alojamientos/alojamiento
where $x/@tipo="hotel" and $x/habitaciones/habitacion/estado/@est="disponible"
return <info>
    <cif> {data($x/cif)} </cif>
    <tel>{data($x/telefono)} </tel>
    </info>
