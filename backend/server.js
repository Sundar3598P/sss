import express from 'express'; 

import dotenv from  'dotenv';

const app = express();

import products from './data/products.js'

app.get('/api/products', (req, res) => {
    res.json(products)
    // res.send('API is running...')

})


// Setting api for single product listing
app.get('/api/products/:id', (req,res) => {
    const product = products.find((p) => p._id === req.parents.id) //checking id in url  and matching with json _id
    res.json(product)
})

app.listen(8280, console.log(`Server running in 8280 mode on port 8280`))