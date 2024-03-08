const name = "disha"
const repo_count = 50

// console.log(name + repo_count + "  value")

//by the method of string interpolation
console.log(`hello, my name is ${name} and my repo count is ${repo_count}`)

//another way of declaring the string
const game_name = new String('dishadsp')  //new keyword is used to use the objects of javascript
//here string is not an array but it is an object
//remember how the datatype of the string was an object
//for 0 the value is d
//for 1 the value is i
//and so on

console.log(game_name[0])  //key value pair is accessed

console.log(game_name.__proto__)  //object is empty
console.log(game_name.length)  //with the new keyword we get the length property
//we also get various methods which come under prototype

console.log(game_name.toUpperCase())  //this is one of the methods under prototype 
console.log(game_name.charAt(2)) 
console.log(game_name.indexOf('a')) 

const home_name = new String('dishu-dp')

const new_string = home_name.substring(0,4)  //from zero position to 3rd position  //4th position is not considered
console.log(new_string)

const another_string = home_name.slice(-8, 4) //in slice we can also give negative values, which means it starts in reverse
console.log(another_string)  