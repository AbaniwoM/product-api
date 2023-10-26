const express = require('express');
const productModel = require('../models/products');

const productRouter = express.Router();

productRouter.get('/', (req, res) => {
    productModel.find()
    .then(books => {
        res.send(books);
    })
    .catch(err => {
        console.log(err);
        res.send(err);
    })
});

productRouter.get('/:id', (req, res) => {
    const id = req.params.id
    productModel.findById(id)
        .then(book => {
            res.status(200).send(book);
        }).catch(err => {
            console.log(err);
            res.status(404).send(err);
        });
})

productRouter.post('/', (req, res) => {
    const product = req.body
    product.lastUpdateAt = new Date()
    productModel.create(book)
       .then(book => {
        res.status(201).send(book);
       }).catch(err => {
        console.log(err);
        res.status(500).send(err);
       })
})

