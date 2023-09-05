const  mongoose=require("mongoose");
require("dotenv").config();
const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL ,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>console.log("bd connection successful"))
    .catch((error)=>{
        console.log("issue in db connection");
        console.error(errror.message);
        // iska matlab kya h
        process.exit(1);
    });
}
module.exports=dbConnect;a