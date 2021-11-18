const AppError = require('./../utils/AppError');
const catchAsync = require('./../utils/catchAsync');
const Graph = require('./../models/graphModel');

exports.getGraph = catchAsync(async(req, res, next) => {
    let  graphData = await Graph.find();
      res.status(200).send({ graphData });
});