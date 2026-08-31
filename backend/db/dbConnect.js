// api---> mongoose ---> mongodb driver -----> mongodb
const mongoose = require("mongoose");
const url = process.env.URL

const dbConnect = async () => {
    try {
        await mongoose.connect(url);
        console.log("Mongodb Connected !!")
    } catch (err) {
        console.log(err.message)
    }

}

module.exports = dbConnect;