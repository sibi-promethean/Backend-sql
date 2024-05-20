const express=require("express")
const router=express.Router()

const service=require("../controllers/student")

let routes=(app1)=>{
    router.post("/studentdetails",service.savingdetail)
    router.get("/getstudentdetails",service.getstudentdetails)
    router.get("/updatestudent",service.updatestudent)
    router.delete("/deletestudent",service.deletestudent)

    app1.use("/api",router)
}
module.exports=routes

