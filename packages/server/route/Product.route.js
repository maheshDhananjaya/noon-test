const express = require('express');
const { update } = require('../models/Product.model');
const product = require('../models/Product.model');
const router = express.Router();



router.get('/', async (req, res, next) => {
    try {
        const result = await product.find();
        res.send(result)
    } catch (error) {
        console.log(error);
    }
});



router.post('/', async (req, res, next) => {
    try {
        const prod = new product(req.body)
        const result = await prod.save();
        res.send(result);
    } catch (error) {
        console.log(error);
    }
});

router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
        const result = await product.findById(id);
        res.send(result)
    } catch (error) {
        console.log(error);
    }
});

router.patch('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const updates = req.body;
        const options = { new: true }
        const result = await product.findByIdAndUpdate(id, updates, options)
        res.send(result);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;