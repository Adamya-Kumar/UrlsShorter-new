const express=require('express')
const {handleUserSingin,handleloginInUser}=require('../controller/userauth')
const router=express.Router()


router.post('/',handleUserSingin)
router.post('/login',handleloginInUser)
router.get('/',(req,res)=>{
    return res.render('SignUp')
})
router.get('/login',(req,res)=>{
    return res.render('login')
})

module.exports=router;