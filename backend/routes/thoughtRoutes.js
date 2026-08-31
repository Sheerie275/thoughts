const express = require("express");
const Thought = require("../models/Thought");
const thoughtRouter = express.Router();



thoughtRouter.get("/", (req, res) => {
    res.json({ msg: "Home Route of ......." });
})


//create thought route/insert thought route: localhost:3000/thought
thoughtRouter.post("/thought", async (req, res) => {
    const data = req.body;
    console.log(data)
    try {
        const thoughtCreated = await Thought.create(data)
        res.status(201).json({ msg: "Create thought route ", thoughtCreated })
    } catch (err) {
        res.status(400).json({ msg: err.message })
    }
})



//get /fetch all thoughts route :
thoughtRouter.get("/thoughts", async (req, res) => {
    try {
        const thoughts = await Thought.find()
        res.json({ msg: "Fetch thoughts route", thoughts })
    } catch (Err) {
        res.json({ msg: Err.message })
    }

})

//update existing thought route: 
thoughtRouter.put("/thought/:id", async (req, res) => {
    //accessing the id from  parameter;
    let id = req.params.id;
    let thoughtData = req.body;

    try {
        const updatedDoc = await Thought.findByIdAndUpdate(id, req.body)
        res.json({ msg: "Update thought route ", updatedDoc });
    } catch (err) {
        res.json({ msg: err.message })
    }


})


//delete thought route : localhost:3000/thought/6a79a0570e562b2b947738e0
thoughtRouter.delete("/thought/:id", async (req, res) => {
    console.log(req.params.id)
    try {
        const deletedDoc = await Thought.findByIdAndDelete(req.params.id)
        res.json({ msg: "the doc with given id has been deleted", deletedDoc })
    } catch (err) {
        res.json({ status: "false", msg: err.message })
    }
})




module.exports = thoughtRouter;