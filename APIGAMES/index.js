const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());

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
    ],
    users: [
        {
            id: 1,
            name: "Thiago Mattos",
            email: "thiago@gmail.com",
            password: "123"
        },
        {
            id:20,
            name: "Guilherme Santos",
            email: "guilherme@gmail.com",
            password: "321"
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
    var {title,year,price} = req.body;

    DB.games.push({
        id: 71,
        title,
        price,
        year
    });

    res.sendStatus(200);
});

app.delete("/game/:id", (req,res)=>{

    if(isNaN(req.params.id)){
        res.sendStatus(400);
    } else{

        var id = parseInt(req.params.id);
        var index = DB.games.findIndex(g => g.id == id);

        if(index == -1){
            res.sendStatus(404);
        } else{
            DB.games.splice(index,1);
            res.sendStatus(200);
        }
    }
    
})

app.put("/game/:id", (req,res)=>{

    if(isNaN(req.params.id)){
        res.sendStatus(400);
    } else{

        var id = parseInt(req.params.id);

        var game = DB.games.find(g => g.id == id);

        if(game != undefined){
            
            var {title,year,price} = req.body;

            if(title != undefined){
                game.title = title;
            }
            if(price != undefined){
                game.price = price;
            }
            if(year != undefined){
                game.year = year;
            }
            res.sendStatus(200);

        } else{
            res.sendStatus(404);
        }
    }
});

app.post("/auth",(req, res) =>{

    var {email,password} = req.body;

    if(email != undefined){

        var user = DB.users.find(u => u.email == email);

        if(user != undefined){

            if(user.password == password){
                res.status(200);
                res.json({token: "false token"});
            }else{
                res.status(401);
                res.json({err: "invalid credentials"});
            }

        } else{
            res.status(404);
            res.json({err: "invalid email"});
        }

    } else{
        res.status(400);
        res.json({err: "invalid email"});
    }

});

app.listen(45678,()=>{
    console.log("api running");
});