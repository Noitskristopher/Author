const Author = require('../models/author')

module.exports = {
    createAuthor: (req, res) => {
        Author.create(req.body)
            .then((newAuthor) => {
                res.json(newAuthor)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    allAuthors: (req, res) => {
        Author.find().sort([['authorName', 0]])
            .then((allAuthors) => {
                res.json(allAuthors)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    getOneAuthor: (req, res) => {
        Author.findById({ _id: req.params.id })
            .then((oneAuthor) => {
                res.json(oneAuthor)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    editAuthor: (req, res) => {
        Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
            .then((editAuthor) => {
                res.json(editAuthor)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    deleteAuthor: (req, res) => {
        Author.deleteOne({ _id: req.params.id })
            .then((deleteAuthor) => {
                res.json(deleteAuthor)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }
}