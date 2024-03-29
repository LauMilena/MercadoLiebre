const express = require("express");
const app = express();
const path = require("path")
const publicPath = path.resolve(__dirname, "./public")

const port = process.env.PORT || 3000;
app.listen(port, () => 
console.log(`servidor corriendo en puerto ${port}`))

app.use(express.static(publicPath));

app.get("/", function(req, res){
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
})

app.get("/register", function(req, res){
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
})

app.post("/register", function(req, res){
    res.send("Se registró con exito")
})

app.get("/login", function(req, res){
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
})

app.post("/login", function(req, res){
    res.send("Bienvenido")
})