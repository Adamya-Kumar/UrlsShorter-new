const express = require("express");
const dotenv = require('dotenv');
const path=require('path')
require('dotenv').config();
const url = require("./models/url");
const UrlRouter = require("./routes/url");
const StaticRoute=require('./routes/StaticRouter')
const { handleConnectMongoDB } = require("./connect");
const UserRouter=require('./routes/userauth')
const cookieParser=require('cookie-parser')
const {restrictedToLoggedInUserOnly,checkAuth}=require('./middleware/auth')
const app = express();
const PORT =  process.env.PORT;
//Middlewares
app.use(express.urlencoded({ extended: false }));
app.set('views', path.resolve('views'));
app.set("view engine", "ejs");
app.use(express.json());
app.use(cookieParser());
// Connect MongoDB
handleConnectMongoDB("mongodb://localhost:27017/shorters-Urls").then(() =>
  console.log("Connect MongoDB")
);
// Routers
app.use('/test',checkAuth,StaticRoute);
app.use('/user',UserRouter);
app.use("/url",restrictedToLoggedInUserOnly, UrlRouter);
//port
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
}); 
