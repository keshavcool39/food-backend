require("dotenv").config();
const express=require("express");
const app=express();
const cors=require("cors")
app.use(cors());

app.use(express.json());

const port=4000






app.post("/delivery",(req,res)=>{

    const {distance,item_type}=req.body;

 

    if (!distance || !item_type) {
       
        return res.status(400).json({ message: 'Missing parameters' });
    }
   
    if(distance<=0){
        return res.status(400).json({message:"negative distance"})
    }
    
    

    if(distance<5){
        res.json({total_price:10})

    }
    if(distance>5 && item_type=="perishable")
    {
        let more=distance-5;
        let calc=1.5*more;
        let ans=calc+10;
        res.json({total_price:ans})
    }
    
    if(item_type=="non-perishable")
    {
        let more=distance-5;
        let calc=more;
        let ans=calc+10
        res.json({total_price:ans})
    }
    else 
    {
        return res.status(400).json({message:"typing mistake"})

    }
    
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
  })






