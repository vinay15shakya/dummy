const todo=require("../models/todo");

//define route handler
exports.createtodo= async (req,res)=>{
    try{
            //export title and descripiton from request body
            const {title,description}=req.body;
            //create a new todo and insert in db

            const response=await todo.create({title,description});

            //send a json response with a success flag
            res.status(200).json(
                {
                    success:true,
                    data:response,
                    message:'entry created succssfully'
                }
            );

    }
    catch(err){

        cosnole.error(err);
        cosnole.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}