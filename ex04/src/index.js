function sumFibonacci(num) {

const arr=[0,1]
let a,b
for(let i=2; i<num; i++){
    a=arr[i-1]
    b=arr[i-2]
    arr.push(a+b)

}
return arr

}


console.log(sumFibonacci(10))
exports.module=sumFibonacci;