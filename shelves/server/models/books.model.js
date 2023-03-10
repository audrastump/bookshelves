const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bookSchema = new Schema({
    username: {type: String, required: true},
    name: {type: String, required: true}
},{
    timestamps: true,
});
const Book = mongoose.models.Book || mongoose.model('Book', bookSchema);
module.exports = Book;
