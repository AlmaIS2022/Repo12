 function myCounter(n) {
 if (n<1) { return [];
 }  else {const countArray=myCounter(n-1);


countArray.push(n);
return countArray;


}
}
console.log(myCounter(3));

module.exports=myCounter;



