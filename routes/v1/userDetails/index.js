const userServices = require('../../../services/user')
require('dotenv').config()
const jwt = require('jsonwebtoken')
const express = require('express')
const { request, response } = require('express')
const app = express()
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const getUserDataByName = ()=>{
    return (request,response)=>{
        const name = request.body.name
        const userFetched = userServices.getUserData(name)
        if(userFetched!=undefined){
            response.status(200).json({
                success: true,
                "userFetched":userFetched
            })
        }else{
            response.status(404).json({
                success:false,
                message:"User not found"
            })
        }
        
    }
}

module.exports = {
    getUserDataByName
}