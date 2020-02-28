const mongoose=require('mongoose')

const Big=mongoose.Schema({
    name:{
        type:String
    }
})
const BigData=mongoose.model('BigDatas', Big)

module.exports.BigData=BigData;