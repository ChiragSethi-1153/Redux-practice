require('dotenv').config()

const express = require('express')
const app = express()

require('./Config/db')
 

app.use(express.json({extended:true}));
app.use(express.urlencoded({extended: true}));
app.use("/", require('./Routes'))
