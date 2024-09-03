const todo = require("../models/todo")



exports.deleteTodo = async(req,res)=>{

    try {

        const {id} = req.params;
        // const {title, description}= req.body
        const response = await todo.findByIdAndDelete(
            {_id:id},
        
            // {title, description, updatedAt: Date.now()}
            )

        if(!response)
        {
            res.status(404).json({
                success:false,
                message: "no data found with this id",

            })

        }

        res.status(200).json({

            success:true,
            data:response,
            message:"Data Deleted Successfully"
        })
        
        

    } catch (err) {

        console.error(err)
        res.status(500).json({
            success:false,
            data:"nhi fetch ho paya",
            message:err.message,

        })
        
    }


}