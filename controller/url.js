const shortID=require('shortid')
const url=require('../models/url')


async function handleGenerateNewShortURL(req,res){
    const body=req.body;
    if(!body.url){
        return res.status(404).json({msg:"missing URL"})
    }else{
    const shortid=shortID();
    
    await url.create({
        shortId:shortid,
        redirectURL:body.url,
        visitHistory:[],
        createdBy:req.user._id,
    })
    return res.render('Home',{
id:shortid
    })
    return res.json()
}
// const SHORTID=shortID;
}

async function handleRediractURL(req,res){
    const shortId=req.params.shortId;
    const entry=await url.findOneAndUpdate({shortId},{$push:{
        visitHistory: {timestamp:Date.now()},
    },},)
    res.redirect(entry.redirectURL)
}

async function handleAnalyticeOfURL(req,res){
    const shortId=req.params.shortId;
    const result=await url.findOne({shortId})
    return res.json({
        totalClicks:result.visitHistory.length,
        analytics:result.visitHistory,
        
    })
}



module.exports={
    handleGenerateNewShortURL,
    handleRediractURL,
    handleAnalyticeOfURL,
}