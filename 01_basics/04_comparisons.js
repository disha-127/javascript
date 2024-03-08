// console.log(2 == 1)
// console.log(2 > 1)
// console.log(2 < 1)
// console.log(2 >= 1)
// console.log(2 <= 1)
// console.log(2 != 1)

// console.log("2" > 1)   //"2" is automatically converted into a number and then compared with 1
// console.log("02" > 1)

// console.log(null > 0)   
//comparison convert null to a number teating it as 0

// console.log(null == 0)  
//equality checks is different from comparisons, here equality check does not convert null to a number, if it is treated as 0 then it would be 0==0 which is true which does not happen

// console.log(null >= 0)  
//comparison convert null to a number teating it as 0, so the sign used here is greater then OR EQUAL TO ZERO so it gives output as true

console.log(undefined == 0)
console.log(undefined < 0)
console.log(undefined > 0)
//in all the situations undefined when compared, gives a false output

// === : strict check, checks the value as well as the datatype

console.log("2" == 2)  //here string gets converted into number and both are equal in value
console.log("2" === 2)  //value as well as datatype is checked, datatype is not same, therefore, value is also not same