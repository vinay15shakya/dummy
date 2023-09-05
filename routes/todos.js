const express=require("express");
const router=express.Router();
//import controller
const {createtodo}=require("../controllers/createtodo");

//define api routes
router.post("/createtodo",createtodo);
module.exports=router;