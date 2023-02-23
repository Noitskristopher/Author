const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    authorName: {
        type: String,
        required: [true, "Please input an author"],
        minLength: [3, "Author Name must be 3 or more characters"]
    }
}, { timestamps: true })

module.exports = mongoose.model('Author', AuthorSchema)