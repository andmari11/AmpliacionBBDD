//use astronomia;

db.createCollection("planetas");
//1
db.planetas.insertMany(

    
    [
        {
            "Id":1, 
            "Nombre":"P111",
            "Masa":1.9, 
            "Volumen":3,
            "Composicion":"H",
            "Perihelio":0.5
        },
        {
            "Id":2, 
            "Nombre":"P222",
            "Masa":3.1, 
            "Volumen":4.5,
            "Composicion":"O",
            "Perihelio":0.07,
            "Afelio":1.7
        }

    ]
    
);
db.planetas.updateOne(
    {
        "Nombre":"P222"
    },
    {
        $set:{
            "satelites":[
                {
                    "Id":3,
                    "Nombre":"S111",
                    "Masa":0.2
                },
                {
                    "Id":4,
                    "Nombre":"S222",
                    "Masa":0.3,
                    "Volumen":1.1
                }
            ]
        }
    }
);

//2
db.planetas.find(
    {
        $or:[
            {"Composicion": { $in: ['H', 'N'] }},
            {"Masa":{$gt:3.2}}
        ]
    },
    {
        "_id":0
    }
);

//3
db.planetas.updateOne(

    {
        "Nombre":"C111"
    },
    {
        $set: {"Nombre":"Z111"}
    }
);



db.createCollection("catalogo")

db.catalogo.insertMany([

    {
        codigo: 1,
        nombre: "el meson",
        tipo: "mediterranea",
        visitas:250
    },
    {
        codigo: 2,
        nombre: "la patata loca",
        tipo: "mediterranea",
        visitas:50
    }


]);


//2

db.catalogo.find(
    {
        "visitas":{$gt:200}
    },
    {
        _id:0, nombre:1, tipo:1
    }
);

//3
db.catalogo.updateMany(
    {
        codigo:1
    },
    {
        $inc:{"visitas": 25}
    }
);

//4
db.catalogo.updateMany(
    {
        "tipo":"italiano"
    },
    {
        $set:{"pizza romana":"italiano"}
    }
);

//5
db.catalogo.updateOne(
    { codigo: 1 },
    { $push: { valoraciones: 3 } }
)

db.catalogo.updateOne(
    { codigo: 2 },
    { $push: { valoraciones: {$each: [3, 4, 5]} } }
)

//6
db.catalogo.updateOne(
    { codigo: 2 },
    { $pull: { valoraciones: 5 } }
)

