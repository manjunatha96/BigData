const mongoose=require('mongoose')

module.exports=function(){ mongoose.connect('mongodb://localhost/BigData',{ useUnifiedTopology: true,useNewUrlParser: true })
        .then(()=> console.log('Database connected successfully...'))
}