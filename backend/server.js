require("dotenv").config();
const express = require("express");
const thoughtRouter = require("./routes/thoughtRoutes.js");
const dbConnect = require("./db/dbConnect.js")
const cors = require("cors")
const app = express();

const PORT = process.env.PORT || 4000;

//Mongodb  connection
dbConnect();
app.use(cors())

//middlewares:
app.use(express.json()); //json data parsing from body

// Routes : 
app.get("/", (req, res)=>{
    res.json({msg: "welcome to Home page"})
})
app.use("/", thoughtRouter)

// node server.j
app.listen(PORT, () => {
    console.log("Server is running on 3000");
})