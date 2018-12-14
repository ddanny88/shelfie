require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const controller = require("./controller");

const app = express();
app.use(json());

massive("postgres://oxixnwzfobvtgi:f693d198c390a2de4e4b5054ad0767d89f0dfe7f66a7e3d2bae96c5047f875c0@ec2-54-243-238-46.compute-1.amazonaws.com:5432/db1klpfnh7bp5r?ssl=true")
.then( db => {
    app.set("db", db)
    console.log("Database Connected.")
}).catch( err => console.log(err))


//  end points go here
app.get("/api/inventory", controller.getInventory);
app.get("/api/product/:id", controller.getProduct);
app.post("/api/invetory", controller.createProduct);
app.delete("/api/inventory/:id", controller.removeItem);




const port = process.env.PORT || 5050;
app.listen(port, console.log(`Listening on port ${port}...`));