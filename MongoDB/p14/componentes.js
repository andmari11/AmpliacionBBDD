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


//2
db.componentes.find({
    $and: [
      { "Ensamblado.detalles.año": { $in: [2020, 2019, 2021] } },
      { "Importe Total": { $gte: 400, $lte: 500 } }
    ]
  }, 
  {
    "Nombre Cliente": 1,
    "Importe Total": 1,
    "_id": 0
  }).sort({ "Nombre Cliente": 1 });

//3
db.componentes.updateOne(

    {"Nombre Cliente": "PC fine", "Ensamblado.componente":"cpu"},
    {$set:
        {   
            "Ensamblado.$.detalles.fabricante": "AMD",
            "Ensamblado.$.detalles.país": "USA",
            "Ensamblado.$.detalles.año": 2022 
        }
    }
);

db.componentes.updateOne(

    {"Nombre Cliente": "PC fine"},
    {$set:
        {"Ensamblado.1":
            {   "componente":"cpu", "detalles":{
                
                "fabricante": "AMD",
                "país": "USA",
                "año": 2022 ,
                "precio":155

            }
            }
        }
        
    }
);

//4
db.componentes.updateOne(

    {"Nombre Cliente": "PC fine"},
    {$pop:{"Ensamblado":1}}
);

//5

db.componentes.updateOne(

    {"Nombre Cliente": "Info2000"},
    {$push:{
                "Ensamblado":{$each:[
                    {
                        "componente": "USBHub",
                        "detalles": { "fabricante": "INTEL", "país": "UK", "año": 2022 },
                        "precio": 50
                    },
                    {
                        "componente": "HDMI",
                        "detalles": { "fabricante": "Connect", "país": "Finland", "año": 2018 },
                        "precio": 3
                    }
                ]}
            }
    }
);


