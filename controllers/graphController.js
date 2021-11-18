const AppError = require('./../utils/AppError');
const catchAsync = require('./../utils/catchAsync');
const Graph = require('./../models/graphModel');

exports.getGraph = catchAsync(async(req, res, next) => {
    let  graphData = await Graph.find();
      // res.status(200).send({ graphData });
//###################################
    //   [{
    //     name: 'Page A',
    //     uv: 4000,
    //     pv: 2400,
        
    // }]

//###################################
    
      var result = [];


      result = graphData.map(property =>{

        var retData = [];
        for (var k in property.income){
          var refData = {
            name:'',
            income: 0,
            expense: 0
          }

          refData.name = k
          refData.income = property.income[k]
          refData.expense = property.expense[k]
          retData.push(refData);
        }
  
        return retData;

    
      })

 
      
      
  
      res.status(200).send({result});
});