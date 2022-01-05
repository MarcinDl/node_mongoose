const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Character = require("./models/Character");

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const connectionString = 'mongodb+srv://szkoleniebielsko:szkoleniebielsko@cluster0.lt6cu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

async function run(){
    await mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then( ()=> {
        console.log("Połączenie udane");
    },
    error => {
        console.log("Błąd: " + error)
    })

    await Character.create([
        {name: "Marcin", age: 33, rank: "marszałek"},
        {name: "Tomasz", age: 45, rank: "pułkownik"},
        {name: "Wojtek", age: 12, rank: "szeregowy"}
    ])
}

run().catch(error => console.log(error.stack));

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Apka działa na porcie " + port);
})