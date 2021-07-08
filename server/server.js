const express = require('express');
const app = express();

app.use(express.json());

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})

app.use(express.static("client/build"));

if(process.env.NODE_ENV === "production"){
    const path = require('path');
    app.get('/*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'../client','build','index.html'))
    })
}