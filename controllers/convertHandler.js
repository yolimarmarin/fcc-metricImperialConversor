/*
*
*
*       Complete the handler logic below
*       
*       
*/
var unit = require("parse-unit");
function ConvertHandler() {
  
  this.getNum = function(input) {
    var result = "";
    var i = 0;
    var error = 0;
    while(!/[a-zA-Z]/.test(input[i])){
      result = result + input[i];
      i++;
      if(/[/]/g.test(result)){
        error++;
        if(error>2){
          return "invalid number"
        }
      }else if(/[!#$%&()=?¡]/.test(input[i])){
        return "no numerical input";
      }
    }
    if(/[/]/g.test(result)){
    result = result.split("/")[0]/result.split("/")[1];
    }
    
    if(result===""){
      result = 1;
    }
    
    return result;
  };
  
  this.getUnit = function(input) {
    var result = "";
    var i = 0;
    while(i<input.length){
      if(/[a-zA-Z]/.test(input[i])){
        result += input[i];
      }
      i++;
    }
    
    var unitLowerCase = result.toLowerCase(); 
    switch(unitLowerCase){
      case  "gal":
      case "l":
      case "lbs":
      case "kg":
      case "mi":
      case "km":
        return result;
        break;  
      default:
        return "invalid unit";
        break;
    }
  };
  
  this.getReturnUnit = function(initUnit) {
    var unitLowerCase = initUnit.toLowerCase(); 
    switch(unitLowerCase){
      case  "gal":
        return "l";
        break;
      case "l":
        return "gal";
        break;
      case "lbs":
        return "kg";
        break;
      case "kg":
        return "lbs";
        break;
      case "mi":
        return "km";
        break;
      case "km":
        return "mi";
        break;
      
    }

  };

  this.spellOutUnit = function(unit) {
    var unitLowerCase = unit.toLowerCase(); 
       switch(unitLowerCase){
      case  "gal":
        return "gallons";
        break;
      case "l":
        return "liters";
        break;
      case "lbs":
        return "libras";
        break;
      case "kg":
        return "kilograms";
        break;
      case "mi":
        return "miles";
        break;
      case "km":
        return "kilometers";
        break;
    }
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var unitLowerCase = initUnit.toLowerCase(); 
    switch(unitLowerCase){
      case  "gal":
        return Math.round((initNum*galToL)*100000)/100000;
        break;
      case "l":
        return Math.round((initNum/galToL)*100000)/100000;
        break;
      case "lbs":
        return Math.round((initNum*lbsToKg)*100000)/100000;
        break;
      case "kg":
        return Math.round((initNum/lbsToKg)*100000)/100000;
        break;
      case "mi":
        return Math.round((initNum*miToKm)*100000)/100000;
        break;
      case "km":
        return Math.round((initNum/miToKm)*100000)/100000;
        break;
    }

  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
      var initial_Units= this.spellOutUnit(initUnit);
      var return_Units= this.spellOutUnit(returnUnit);
   
      return initNum + " " + initial_Units + " converts to " + returnNum + " " + return_Units;

  };
  
}

module.exports = ConvertHandler;
