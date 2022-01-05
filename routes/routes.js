const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Character = require("./../models/Character");
const router = express.Router();

const connectionString = 'mongodb+srv://szkoleniebielsko:szkoleniebielsko@cluster0.lt6cu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( ()=> {
    console.log("Połączenie udane");
},
error => {
    console.log("Błąd: " + error)
})

if (Character.length) {
    Character.collection.drop();
}
Character.create([
    {name: "Marcin", age: 33, rank: "marszałek"},
    {name: "Tomasz", age: 45, rank: "pułkownik"},
    {name: "Wojtek", age: 12, rank: "szeregowy"},
    {name: "Marcin", age: 63, rank: "major"},
    {name: "Witold", age: 45, rank: "pułkownik"},
    {name: "Wojtek", age: 12, rank: "szeregowy"},
    {name: "Andrzej", age: 39, rank: "generał"},
    {name: "Michał", age: 85, rank: "kapitan"},
    {name: "Antoni", age: 22, rank: "kapral"}
])

// const docs = await Character.find({name: "Marcin"});
// // console.log(docs)

// const findID = await Character.find();
// const docs01 = await Character.findByIdAndUpdate({_id:findID[1]._id}, { rank: "szeregowy"}) 

// const docs02 = await Character.findOneAndUpdate({name: "Antoni"}, {rank: "Chorązy"});
// const docs03 = await Character.updateMany({age: { $lt: 35, }}, {rank: "nieistotne"});
// const docs04 = await Character.updateMany({}, {employment: true});

// //add document to collection
// const insertDoc = new Character({name: "Krzysztof", rank: "porucznik"});
// const insert = await insertDoc.save( (err, someVal) => {
//     if (err) {return console.error(err)};
//     console.log(someVal.name + "został zapisany")
// })

// const docs05 = Character.find({});
// console.log(docs05)

// const findID2 = await Character.find();
// const docs06 = await Character.deleteOne({_id: findID2[0]._id})
// const docs07 = await Character.deleteMany({name: "Wojtek"})

// const findID3 = await Character.find();
// const docs08 = await Character.findByIdAndRemove(findID3[2]._id);

router.get("/", (req,res) => {
    res.render("index", {
        title: "Tytuł strony"
    })
})

module.exports = router;