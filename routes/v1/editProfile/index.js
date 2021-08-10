const userServices = require('../../../services/user')
require('dotenv').config()
const jwt = require('jsonwebtoken')
const express = require('express')
const app = express()
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const updateProfile = async(request,response)=>{
    const token = request.headers['authorization']
    
    const jwtToken = token.split(' ')[1]
    const decodeUserInfo = jwt.verify(jwtToken,ACCESS_TOKEN_SECRET)
    const emailInToken = decodeUserInfo.email
    const name = request.body.name
    const email = request.body.email
    const phone = request.body.phone
    console.log(emailInToken,email);
    newUserProfile = userServices.updateUserData(emailInToken,name,email,phone)
    const newToken = jwt.sign({
        name: name,
        email: email
    },ACCESS_TOKEN_SECRET)
    response.status(200).json({
        success: true,
        newToken,newUserProfile
    })

}
module.exports = {
    updateProfile
}