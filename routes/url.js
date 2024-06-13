const express=require('express')
const shortID=require('shortid')

const {handleGenerateNewShortURL,handleRediractURL,handleAnalyticeOfURL}=require('../controller/url')
const router=express.Router();

router.post('/',handleGenerateNewShortURL)
router.get('/:shortId',handleRediractURL)
router.get('/analytices/:shortId',handleAnalyticeOfURL)
module.exports=router;
