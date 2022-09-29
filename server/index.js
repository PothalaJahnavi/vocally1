require("dotenv").config()
const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors");
const app=express()
app.use(express.json());
app.use(cors());

const URL=process.env.MONGO_URL;
mongoose.connect(URL,(err)=>{
  if(err)
  {
    console.log(err)
  }
  else{
    console.log("connected")
  }
})


const formSchema=new mongoose.Schema({
    name:String,
    email:String
})
const Data=mongoose.model("Data",formSchema)

app.post("/store",(req,res)=>{
  const user=req.body;
  const nuser=new Data(user)
 try{
    nuser.save()
    res.send("true")
 }
catch(err){
 console.log(err)
}
})


const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`server started on port ${port}`);
})