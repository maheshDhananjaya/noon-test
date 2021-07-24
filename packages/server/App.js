const express = require('express');
const Mongoose = require('mongoose');
const cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors());
// app.all('/test',(req,res)=>{
//     res.send(req.body);
// })

const productRoute = require('./route/Product.route');
app.use('/products', productRoute)

app.use((req, res, next) => {
    const err = new Error('not found');
    err.status = 404;
    next(err);
})

//error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        error: {
            statue: err.statue || 500,
            message: err.message
        }
    })
})

Mongoose.connect('mongodb+srv://mahesh:Mahesh4106@node.bein5.mongodb.net/node-tute?retryWrites=true&w=majority', 
{ useUnifiedTopology: true, useNewUrlParser: true }).then(()=>{
    console.log('Mongodb connect');
})

app.listen(5000, () => {
    console.log("listening on port 5000");
})