const bigController=require('../Controller/BigdataController')

module.exports=function(app){
    app.use('/Big', bigController)
}