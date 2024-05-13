http://localhost:8080/exist/apps/dashboard/admin#

xquery version "3.1";

for $x in doc("planetas.xml")/planetas/planeta
where $x/masa > 1
return <nombre> {data($x/nombre)} </nombre>

(:
 for $x in doc("planetas.xml")/planetas/planeta
return
<resultado>
<plan>{data($x/nombre)}</plan>
{for $y in $x/satelites/satelite return <nom>{data($y/nombre)}</nom>}
</resultado>
 :)