const {insertDB}=require("../config/db");

const insertEmployeedata=async(req,res)=>{
  console.log(req.body);
  const details = req.body;
  
   const result = await insertDB(details);
   console.log(result);
   res.send(result)
}
module.exports={insertEmployeedata}