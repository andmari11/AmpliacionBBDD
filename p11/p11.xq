xquery version "3.1";

for $x in doc("vuelos.xml")/lineas/linea
where $x/@origen="madrid"
return <lineas_Madrid>
    <n>{data($x/numero)} </n>
    </lineas_Madrid>


for $x in doc("vuelos.xml")/lineas/linea
where $x/@origen="madrid"
return <lineas_Madrid>
    <n>{data($x/numero)} </n>
    <asientos>{count($x/asientos/asiento)}</asientos>
    </lineas_Madrid>


for $x in doc("vuelos.xml")/lineas/linea
where count(($x/asientos/asiento/@estado="libre"))>0
return <lineas>
    <n>{data($x/numero)} </n>
    </lineas>


for $x in doc("vuelos.xml")/lineas/linea
return <vuelo>
    <n>{data($x/numero)}</n>
    <asientos>
        {
        for $asiento in $x/asientos/asiento
        where $asiento/@estado="libre"
        return <asiento>{data($asiento)}</asiento>
        }
    </asientos>
    </vuelo>