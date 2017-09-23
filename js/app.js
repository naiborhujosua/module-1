(function()
{
    function a(a,b)
    {
        a.lunchText="",
        a.replyMsg="",
        a.validateLunchText=function()
    {
      
      itemCount=a.lunchText.split(",").length,""!=a.lunchText?itemCount<=3?a.replyMsg="Enjoy!":itemCount>3
      &&(a.replyMsg="Too much!"):a.replyMsg="Please enter data first!"}}
    
      angular.module("LunchCheck",[])

      .controller("LunchCheckController",a),
    
        a.$inject=["$scope","$filter"]}
    )();