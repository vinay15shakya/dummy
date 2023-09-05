// for import server or model
// const express=require('express')
// const app=express()

// app.listen(3000,()=>{
//     console.log("app is running successfully"); 
// })

const express=require("express");
const app=express();


//load config from env file
require("dotenv").config();
const PORT=process.env.PORT || 4000;

app.use(express.json());

//import routes for todo api
const todoRoutes=require("./routes/todos");
app.use("/api/v1",todoRoutes);

//starts server
app.listen(PORT,()=>{
    console.log(`server started successfully at ${PORT}`);
})


//connect to the database 
const dbConnect=require("./config/database");
dbConnect();

//default route

app.get("/",(req,res)=>{
    res.send(`<h1>this is home page baby</h1>`);
})




 