function rangeOfNumbers(startN,endN){
if (startN=endN) {return [startN];}
else if (startN<endN) {return "The starting number will
 always be less than or equal to
  ending numbers";}
else {const myArray=rangeOfNumbers(startN-1)

 myArray.push(startN)
return myArray;
}
}
}
console.log(rangeOfNumbers(3,5));

module.exports=rangeOfNumbers;

