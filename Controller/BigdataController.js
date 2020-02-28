const express=require('express');
const router=express.Router();
const {BigData} =require('../Tables/Bigdata')

router.get('/get',async(req,res)=>{
    await res.send('getting data')
})

router.post('/postMul', async(req,res)=>{
    
    console.log(req.body);
    if(req.body.op=='equal'){
        console.log('=');
    }
    console.log(req.body.rhs)
    op3=req.body.lhs
    op2=op3.rhs

    switch (op2.op) {
        case "multiply":
            oprt=op2.lhs*op2.rhs
            opr=`(${op2.lhs} * ${op2.rhs})`
            console.log(oprt);
            break;
        case "add":
            oprt=op2.lhs+op2.rhs
            opr=`(${op2.lhs} + ${op2.rhs})`
            console.log(oprt);
            break;        
        case "subtract":
            oprt=op2.lhs-op2.rhs
            opr=`(${op2.lhs} - ${op2.rhs})`
            console.log(oprt);
            break;
        case "divide":
            oprt=op2.lhs/op2.rhs
            opr=`(${op2.lhs} / ${op2.rhs})`
            console.log(oprt);
            break;
        default:
            console.log('not valid oprator');
    }
   
    op1=req.body.lhs
    console.log(op1);
    

    switch (op1.op) {
        case "multiply":
            oprt1=op1.lhs*oprt
            opr1=`${op1.lhs} * ${opr}`
            console.log(opr1);
            console.log(oprt1==req.body.rhs);

            break;
        case "add":
            oprt1=op1.lhs+oprt
            opr1=`${op1.lhs} + ${opr}`
            console.log(opr1);
            console.log(oprt1==req.body.rhs);
            break;        
        case "subtract":
            oprt1=op1.lhs-oprt
            opr1=`${op1.lhs} - ${opr}`
            console.log(opr1);
            console.log(oprt1==req.body.rhs);
            break;
        case "divide":
            oprt1=op1.lhs/oprt
            opr1=`${op1.lhs} / ${opr}`
            console.log(opr1);
            console.log(oprt1==req.body.rhs);
            break;
        default:
            console.log('not valid oprator');
    }
    
    res.send('result')
    
})

module.exports=router;