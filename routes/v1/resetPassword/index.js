const userServices = require('../../../services/user')
require('dotenv').config()
const jwt = require('jsonwebtoken')
const express = require('express')
const app = express()
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const changePassword = (request,response)=>{
    const token = request.headers['authorization']
    const jwtToken = token.split(' ')[1]
    const decodeUserInfo = jwt.verify(jwtToken,ACCESS_TOKEN_SECRET)
    const password = request.body.password
    userServices.updatePassword(decodeUserInfo.email,password)
    response.status(200).json({
        success:true,
    })
    
}

module.exports = {
    changePassword
}