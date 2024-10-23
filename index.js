const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var DB = {
    games:[
        {
            id: 23,
            title: "League of Legends",
            year: 2012,
            price: 0
        },
        {
            id:27,
            title: "Counter Strike",
            year: 2010,
            price: 25
        },
        {
            id:61,
            title: "Lego Star Wars",
            year: 2022,
            price: 190
        }
    ]
}

app.get("/games",(req,res)=>{
    res.statusCode = 200;
    res.json(DB.games);
});

app.get("/game/:id",(req,res)=>{
    if(isNaN(req.params.id)){
        res.sendStatus(400);
    } else{
        var id = parseInt(req.params.id);

        var game = DB.games.find(g => g.id == id);

        if(game != undefined){
            res.json(game);
            res.statusCode = 200;
        } else{
            res.sendStatus(404);
        }
    }
});

app.post("/game",(req,res) =>{
    var {id,title,year,price} = req.body;

    DB.games.push({
        id,
        title,
        price,
        year
    })

    res.sendStatus(200);
})

app.listen(45678,()=>{
    console.log("api running");
});