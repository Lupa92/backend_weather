var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');
const User = require('../models/users');

const {checkBody} = require('../modules/checkBody')

router.post('/signup', (req, res)=>{
    
    const requiredFields = ["name", "email", "password"];
    
    if(!checkBody(req.body, requiredFields)){
        return res.json({ result: false, error: "Missing or empty fields" });
    }

    User.find().then((data)=>{
        const emailExist = data.some(user =>user["email"]===req.body.email);
        
        if( emailExist === true){
            return res.json({result: false, error: 'User already exists'})
        } 
            const newUser = new User({
                name : req.body.name,
                email : req.body.email,
                password : req.body.password,
            })
            newUser.save().then(()=>{
            User.find().then((data)=>{
            console.log(data)
            res.json({result : true})
            })
            })
            
    })
    
})

router.post('/signin', (req, res)=>{      
    const requiredFields = ["email", "password"]    

    if(!checkBody(req.body,requiredFields)){
        return res.json({result: false, error: 'Missing or empty fields' })
    }   
        User.findOne({email : req.body.email, password: req.body.password})
            .then((user)=>{
                if(user===null){
                    return res.json({result: false, error: 'User not found'});
                } else {
                    return res.json({result: true});
                }
            })
})




module.exports = router;
