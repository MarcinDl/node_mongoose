const express = require("express");
const app = express();
const path  = require("path");

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set("views", path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use("/js", express.static(path.join(__dirname, "./js")));
app.use("/assets", express.static(path.join(__dirname, "./assets")));

app.use("/",require("./routes/routes"));

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Apka działa na porcie " + port);
})