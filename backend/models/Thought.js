const mongoose = require("mongoose");

const thoughtSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 100
    },
    category: {
        type: String,
        enum: ["Education", "Learning", "Cooking", "Hobbies", "Literature", "Poetry", "Writing", "Others"],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isFavourite: {
        type: Boolean,
        required: true,
        default: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    mood:{
        type: String,
        enum: ["😊 Happy", "📚 Motivated", "🚀 Excited", "☕ Calm", "💡 Inspired", "🔥 Focused","😐 Okk Okk"],
        default: "😐 Okk Okk"
    },
    visibility:{
        type:String,
        enum: ["public", "private"],
        default:"private"
    }

})

//
const Thought = new mongoose.model("Thought", thoughtSchema);


module.exports = Thought;