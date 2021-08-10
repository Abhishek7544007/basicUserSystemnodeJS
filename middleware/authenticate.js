require('dotenv').config()
const jwt = require('jsonwebtoken')
const express = require('express')
const app = express()
const secretKey = process.env.secretKey
app.use(express.urlencoded({extended:true}));
app.use(express.json());
const userService = require('../services/user')

const verifyJWT = (request,response,next)=>{
    const token = request.headers['authorization']
    if(!token){
        return response.status(403).json({
            status: 'fail',
            message: 'A token is missing'
        })
    }
    try {
        const jwtToken = token.split(' ')[1]
        const decodeUserInfo = jwt.verify(jwtToken,ACCESS_TOKEN_SECRET)
        console.log("authJWT:",decodeUserInfo);
        if(!userService.getUserData(decodeUserInfo.name)){
            return response.status(401).json({
                success: false,
                message: 'Invalid Credentials'

            })
        }
    } catch (error) {
        return response.status(401).json({
            success: false,
            message:"Invalid token"
        })
    }
    next()

}

module.exports = {
    verifyJWT
}