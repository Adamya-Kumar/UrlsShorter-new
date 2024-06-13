const { getUser}=require('../service/auth')
const jwt = require('jsonwebtoken');
async function  restrictedToLoggedInUserOnly(req,res,next){
     const UserUid=req.cookies?.uid;
     if(!UserUid)return res.redirect('/user/login')
     const user=getUser(UserUid)

if(!user) return res.redirect('/user/login')
req.user=user;
next();
}
async function  checkAuth(req,res,next){
     const UserUid=req.cookies?.uid;
     
     const user=getUser(UserUid)


req.user=user;
next();
}
module.exports={
    restrictedToLoggedInUserOnly,
    checkAuth,
}