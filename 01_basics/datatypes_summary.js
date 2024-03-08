//only two types of datatypes according to documentation
//first primitive, rest non-primitive based on how the data is stored in memory an dhow it is accessed

const id = Symbol('123')
const another_id = Symbol('123')

console.log(id === another_id)

const big_number = 1234982656265925n

//no primitive datatypes aka reference datatypes

//array
const heros = ["shaktiman", "superhero", "batman"];

//object //always in a key value pair
{
    name: "disha",
    age: 21,
}

//object can also be stored in a variable
let my_object = {
    name: "disha"
    age: 21,
}

//funtion  //function can be treated as a variable
const my_function = function(){
    console.log("hello, world")
}

console.log(typeof my_function)  //function //but in documentation, its actually a function object