const express=require('express');
const bodyParser=require('body-parser')
const app=express()
const cors=require('cors')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors())

require('./router/routes')(app)
require('./Connection/db')()

const port=process.env.PORT || 1234;
app.listen(port, console.log(`Server listing on port ${port}`))

// app.post('/hii',(req,res)=>{
//     console.log(req.body);
    
// })