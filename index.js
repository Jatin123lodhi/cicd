const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.status(200).json({
        msg: "Hello world change"
    })
})


app.listen(8080,()=>{
    console.log('Server is running on port 8080')
})