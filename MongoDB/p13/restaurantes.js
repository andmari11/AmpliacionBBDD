//use restaurantes

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


])

//2
db.catalogo.find(
    {
        visitas:{$gt:200}
    
    },
    {_id:0, nombre:1, tipo:1}
)
//3
db.planetas.updateOne(
    { codigo: 1 },
    { $inc: { visitas: 25 } }
)
//4
db.catalogo.updateMany(
    { tipo: "italiano" },
    { $set: { especialidad: "pizza romana" } }
)


//5
db.catalogo.updateOne(
    { codigo: 1 },
    { $push: { valoraciones: 3 } }
)

db.catalogo.updateOne(
    { codigo: 2 },
    { $push: { valoraciones: {$each: [3, 4, 5]} } }
)

db.catalogo.updateOne(
    { codigo: 3 },
    { $set: { valoraciones: [4, 5, 5] } }
)

db.catalogo.updateOne(
    { codigo: 4 },
    { $set: { valoraciones: [1, 5] } }
)


//6
db.catalogo.updateOne(
    { codigo: 2 },
    { $pull: { valoraciones: 5 } }
)