function foo(a,b){
  let numA = Number(a);
  let numB = Number(b);
  if(isNaN(numA) || isNaN(numB)){
    return "Invalid Input:Both parameters must be numbers";
  }
  return numA + numB;}
console.log(foo(2,3)); //outputs 5
console.log(foo(2,"3")); //outputs 5
console.log(foo("2",3)); //outputs 5
console.log(foo("2","3")); //outputs 5
console.log(foo("a",3)); //outputs Invalid Input:Both parameters must be numbers