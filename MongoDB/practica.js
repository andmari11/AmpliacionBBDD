//use astronomia;

db.createCollection("planetas");
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
  ]);

  db.planetas.find(
    {$or:[
        {Composicion:{$in:["H","N"]}},
        {Masa:{$gt:3.2}}
    ]
    },
    {_id:0, Nombre:1}
  );
  
  db.planetas.updateOne(
    {
        Nombre:"C111"
    },
    {$set:{Nombre:"Z111"}}
  );


  //use restaurante
  db.createCollection("catalogo");
  db.insertMany([
    {
        codigo:1,
        nombre: "El meson",
        tipo: "mediterranea",
        visitas:250 
    },
    {
        codigo:2,
        nombre: "La patata loca",
        tipo: "mediterranea",
        visitas:50 
    },
    {
        codigo:3,
        nombre: "Yakuza",
        tipo: "japones",
        visitas:150 
    },
    {
        codigo:4,
        nombre: "Todo pizza",
        tipo: "italiano",
        visitas:350 
    }
  ]);



  db.catalogo.find(
    {
        visitas: {$gt:200}
    },
    {
        _id:0, nombre:1, tipo:1
    }
  );

  db.catalogo.updateOne(
    {codigo:1},
    {$inc:{$visitas:25}}
  );

db.updateMany(
    {tipo:"italiano"},
    {$set:{especialidad:"pizza romana"}}
);

//use electronica

db.createCollection("componentes");

db.componentes.insertMany(

    [
        {
          "ID Pedido": 1,
          "Nombre Cliente": "PC fine",
          "Importe Total": 405,
          "Ensamblado": [
            {
              "componente": "pb 2000",
              "detalles": {
                "fabricante": "AJT",
                "país": "Taiwan",
                "año": 2019
              },
              "precio": 250
            },
            {
              "componente": "cpu",
              "detalles": {
                "fabricante": "MicroL",
                "país": "USA",
                "año": 2021
              },
              "precio": 155
            }
          ]
        },
        {
          "ID Pedido": 2,
          "Nombre Cliente": "SistemasTotal",
          "Importe Total": 195,
          "Ensamblado": [
            {
              "componente": "hdd",
              "detalles": {
                "fabricante": "SingaHD",
                "país": "Singapur",
                "año": 2021
              },
              "precio": 195
            }
          ]
        },
        {
          "ID Pedido": 3,
          "Nombre Cliente": "Info2000",
          "Importe Total": 400,
          "Ensamblado": [
            {
              "componente": "GPU",
              "detalles": {
                "fabricante": "Nvidia",
                "país": "USA",
                "año": 2020
              },
              "precio": 400
            }
          ]
        }
    ]
);


db.componentes.find(
  {
    "Ensamblado.detalles.año": {$in:[2019, 2020, 2021]},
    "Importe Total": { $gte: 400, $lte: 500 }
  },
  {
    "Nombre Cliente": 1,
    "Importe Total": 1,
    "_id": 0
  }).sort({ "Nombre Cliente": 1 });

db.componentes.updateOne(
  {
    "Nombre Cliente":"PCfine"
  },
  {
    "ensamblado.1.detalles.fabricante":"AMD"
  }
);



db.componentes.updateOne(
  {
    "Nombre Cliente":"PCfine"
  },
  {
    $pop:{"componente":1}
  }
);