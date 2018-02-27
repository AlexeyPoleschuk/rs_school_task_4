module.exports = function solveEquation(equation) {
 
  var a,b,c;
  var x1, x2;
  var cleArr=equation.replace("x^2","").replace("x", "").replace(/\*/g, "").replace(/  /g, "");
  var numArr = cleArr.split(" ");

  a=parseInt(numArr[0]);
  b=parseInt(numArr[1]+numArr[2]);
  c=parseInt(numArr[3]+numArr[4]);
  var D=Math.sqrt(Math.pow(b,2)-(4*a*c));
   
 
  x1= Math.round((-b+D)/(2*a));
  x2= Math.round((-b-D)/(2*a));
  
  if (x1>x2){
    return [x2,x1];
  }
  else {
    return[x1,x2];
  }
  
  // your implementation

}
