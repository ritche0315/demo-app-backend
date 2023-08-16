const express = require('express');
require('dotenv').config();
const app = express();

app.get('/',(req,res,next)=>{
    res.status(200).json({message: "get resource"})
})

const port = process.env.PORT;
app.listen(port, ()=> console.log(`Server is running on port ${port}`));