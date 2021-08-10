const express = require('express')
const app = express()
app.use(express.urlencoded({extended:true}));
app.use(express.json());
const routes = require('express').Router()
const authJWT = require('../../middleware/authenticate')
module.exports = () =>  {
    routes.post('/signUP',require('./signUp').registerUser())
    routes.post('/login',authJWT.verifyJWT,require('./login').loginUser())
    routes.get('/users',authJWT.verifyJWT,require('./userDetails').getUserDataByName())
    routes.post('/profile',authJWT.verifyJWT,require('./viewProfile').getProfile)
    routes.post('/editprofile',authJWT.verifyJWT,require('./editProfile').updateProfile)
    routes.post('/resetpassword',authJWT.verifyJWT,require('./resetPassword').changePassword)

    return routes
}