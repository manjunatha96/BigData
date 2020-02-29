const express=require('express');
const router=express.Router();

router.post('/postMul', async(req,res)=>{
    op3=req.body.lhs
    op1=req.body.lhs
    op2=op3.rhs

    switch (op1.op) {
        case "multiply":
            oprt=op2.lhs*op2.rhs
            oprt11=req.body.rhs*op1.lhs
            oprt12=req.body.rhs/op1.lhs
            opr=`${op1.lhs} *`
            opr11=`(${req.body.rhs} / ${op1.lhs})`
            console.log('-',oprt);            
            break;
        case "add":
            oprt=op2.lhs+op2.rhs
            oprt11=req.body.rhs+op1.lhs
            oprt12=req.body.rhs-op1.lhs
            opr=`${op1.lhs} +`
            opr11=`(${req.body.rhs} - ${op1.lhs})`
        
            break;        
        case "subtract":
            oprt=op2.lhs-op2.rhs
            oprt11=req.body.rhs-op1.lhs
            oprt12=req.body.rhs+op1.lhs
            opr=`${op1.lhs} -`
            opr11=`(${req.body.rhs} + ${op1.lhs})`
        
            break;
        case "divide":
            oprt=op2.lhs/op2.rhs
            oprt11=req.body.rhs/op1.lhs
            oprt12=req.body.rhs*op1.lhs
            opr=`${op1.lhs} /`
            opr11=`(${req.body.rhs} * ${op1.lhs})`
            console.log(oprt12);            
            break;
        default:
            console.log('Not valid oprator');
    }
       
    switch (op2.op) {
        case "multiply":
            oprt1=op1.lhs*oprt
            oprt21=oprt11*op2.rhs
            oprt22=oprt12/op2.rhs
            opr1=`${opr}( ${op2.lhs} * ${op2.rhs})= ${req.body.rhs}`
            opr21=`${op2.lhs} = ${opr11} / ${op2.rhs}`
            opr31=`${op2.lhs} = ${oprt22}`
            break;
        case "add":
            oprt1=op1.lhs+oprt
            oprt21=oprt11+op2.rhs
            oprt22=oprt12-op2.rhs
            opr1=`${opr}( ${op2.lhs} + ${op2.rhs})= ${req.body.rhs}`
            opr21=`${op2.lhs} = ${opr11} - ${op2.rhs}`
            opr31=`${op2.lhs} = ${oprt22}`
            break;        
        case "subtract":
            oprt1=op1.lhs-oprt
            oprt21=oprt11-op2.rhs
            oprt22=oprt12+op2.rhs
            opr1=`${opr}( ${op2.lhs} - ${op2.rhs})= ${req.body.rhs}`
            opr21=`${op2.lhs} = ${opr11} + ${op2.rhs}`
            opr31=`${op2.lhs} = ${oprt22}`
            break;
        case "divide":
            oprt1=op1.lhs/oprt
            oprt21=oprt11/op2.rhs
            oprt22=oprt12*op2.rhs
            opr1=`${opr}( ${op2.lhs} / ${op2.rhs})= ${req.body.rhs}`
            opr21=`${op2.lhs} = ${opr11} * ${op2.rhs}`
            opr31=`${op2.lhs} = ${oprt22}`
            break;
        default:
            console.log('Not valid oprator');
    }
    
    res.send(`Problem 1) ${opr1}
            problem 2) ${opr21}
            solution 3) ${opr31}`)
    
})

module.exports=router;