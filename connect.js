const mongoose=require('mongoose')

async function handleConnectMongoDB(url){
    return mongoose.connect(url) 
}

module.exports={
    handleConnectMongoDB,
}