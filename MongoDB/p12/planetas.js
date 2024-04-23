//use astronomia

db.createCollection("planetas")

db.planetas.insertMany([
  {
    Id: "P111",
    Nombre: "Mercurio",
    Masa: 1.9,
    Volumen: 2,
    Composicion: ["H", "O"],
    Perihelio: 0.5,
    Afelio: 0.07
  },
  {
    Id: "P222",
    Nombre: "Venus",
    Masa: 3,
    Volumen: 4,
    Composicion: ["S"],
    Perihelio: 0.2,
    Afelio: 1.7,
    satelites: [
      { Id: "S111", Nombre: "Satélite 1 de Venus", Masa: 0.5, Volumen: 0.3 },
      { Id: "S222", Nombre: "Satélite 2 de Venus", Masa: 0.2, Volumen: 0.3 },
      { Id: "S333", Nombre: "Satélite 3 de Venus", Masa: 1.1, Volumen: 0.02 }
    ]
  },
  {
    Id: "P333",
    Nombre: "Tierra",
    Masa: 3.8,
    Volumen: 4.9,
    Composicion: ["He"],
    Perihelio: 25
  },
  {
    Id: "C111",
    Nombre: "Marte",
    Masa: 0.05,
    Composicion: ["H"],
    Perihelio: 0.01
  }
])


db.planetas.find({
  $or: [
    { Composicion: { $in: ['H', 'N'] } },
    { Masa: { $gt: 3.2 } }
  ]
}, { Nombre: 1, _id: 0 })


db.planetas.find({
  Masa: { $lt: 3.2 } 

}, { Nombre: 1, _id: 0 })




db.planetas.updateOne(
  { Id: "C111" },
  { $set: { Nombre: "Z111" } }
)
