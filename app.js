const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(cors());
app.get('/',(req,res,next)=>{
    res.status(200).json({message: "get resource"})
})

const port = process.env.PORT;
app.listen(port, ()=> console.log(`Server is running on port ${port}`));