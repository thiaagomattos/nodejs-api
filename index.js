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
        }
    ]
}

app.get("/",()=>{

});



app.listen(45678,()=>{
    console.log("api running");
});