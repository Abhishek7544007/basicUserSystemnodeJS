const express = require('express')
const app = express ()
require('dotenv').config()
const port = process.env.PORT || 5000

const routesController = require('./routes/v1/')()

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/api/v1',routesController)

app.listen(port,()=>{
    console.log("server is istening on  port:" , port )
})