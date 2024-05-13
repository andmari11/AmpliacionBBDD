//use vacaciones

db.createCollection("airbnb");

db.airbnb.insertMany([{
    "_id" : "1003531",
    "name" : "New York City - Upper West Side Apt",
    "property_type" : "Apartment",
    "minimum_nights" : 12,
    "maximum_nights" : 360,
    "number_of_reviews" : 2,
    "price" : NumberDecimal("135.00"),
    "host" : {
        "host_id" : "454250",
        "host_name" : "Greta"
    },
    "address" : {
        "street" : "New York, NY, United States",
        "location" : {
            "type" : "Point",
            "coordinates" : [ 
                -73.96523, 
                40.79962
            ]
        }
    },
    "reviews" : [ 
        {
            "_id" : "4351675",
            "date" : ISODate("2013-04-29T04:00:00.000Z"),
            "reviewer_name" : "Josh",
            "comments" : "i had a really pleasant stay.",
            "scoring" : []
        }, 
        {
            "_id" : "4848277",
            "date" : ISODate("2013-05-28T04:00:00.000Z"),
            "reviewer_name" : "Josh",
            "comments" : "Greta has been a great host",
            "scoring" : []
        }
    ]
},
{
    "_id" : "1003533",
    "name" : "Boston - Molly Apt",
    "property_type" : "Apartment",
    "minimum_nights" : 7,
    "maximum_nights" : 30,
    "number_of_reviews" : 2,
    "price" : NumberDecimal("240.00"),
    "host" : {
        "host_id" : "454239",
        "host_name" : "Molly"
    },
    "address" : {
        "street" : "Boston, MA, United States",
        "location" : {
            "type" : "Point",
            "coordinates" : [ 
                -75.96523, 
                41.79962
            ]
        }
    },
    "reviews" : [ 
        {
            "_id" : "4351633",
            "date" : ISODate("2022-04-29T04:00:00.000Z"),
            "reviewer_name" : "Miguel",
            "comments" : "wonderful place. Thanks.",
            "scoring" : []
        }, 
        {
            "_id" : "484811",
            "date" : ISODate("2022-08-12T04:00:00.000Z"),
            "reviewer_name" : "Sven",
            "comments" : "Molly is very nice",
            "scoring" : []
        }
    ]
},
{
    "_id" : "1003534",
    "name" : "Madrid - Miguel Apartamentos",
    "property_type" : "Apartment",
    "minimum_nights" : 1,
    "maximum_nights" : 7,
    "number_of_reviews" : 1,
    "price" : NumberDecimal("113.00"),
    "host" : {
        "host_id" : "454223",
        "host_name" : "Miguel"
    },
    "address" : {
        "street" : "Santa Isabel",
        "location" : {
            "type" : "Point",
            "coordinates" : [ 
                -40.96511, 
                34.799
            ]
        }
    },
    "reviews" : [ 
        {
            "_id" : "4351610",
            "date" : ISODate("2023-06-29T01:00:00.000Z"),
            "reviewer_name" : "Frederick",
            "comments" : "Miguel is a very good hostee and his apartment is wonderful",
            "scoring" : []
        }
    ]
}
]
);

db.airbnb.find(
    {
        "price":{$gt:100,$lt:150},
        "minimum_nights":{$gte:12}
    
    },
    {
        "_id":0,"host.host_name":1
    }
);
db.airbnb.find(
    {},
    {"_id":1}
).sort({"reviews.0.date":-1});//-1=descendente 1=ascendente


db.airbnb.find(
    {"address.location.coordinates.0":{$gt:-41, $lt:-39},
     "address.location.coordinates.1":{$gt:33,$lt:35}
    },
    {"address.street":1}
);