const userauth=require('../models/user')
const jwt = require('jsonwebtoken');
const {v4:uuidv4}=require('uuid')
const  { setUser}=require('../service/auth')


async function handleUserSingin(req,res){
const {name,email,password}=req.body;
await userauth.create({
   name,
   email,password,

})
return res.redirect('/')
}


async function handleloginInUser(req,res){
  const {email,password}=req.body;
  
  
    const user=await userauth.findOne({email,password})
    console.log(user)
    if(!user){
        return res.render('login')
    }
   const token= setUser(user)
    console.log(token);
    res.cookie("uid",token)
        return res.redirect("/")
    
}

module.exports={
    handleUserSingin,
    handleloginInUser,
}