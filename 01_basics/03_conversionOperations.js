let score = "33"

console.log(typeof score)
console.log(typeof(score))

let value_in_number = Number(score)   //here the datatype's first letter during conversion is always capital
console.log(typeof value_in_number)
console.log(value_in_number)

//"33" => 33
//"33abc" => NaN  //type in number but value is not a number
//true => 1
//false => 0

let is_logged_in = ""

let boolean_is_logged_in = Boolean(is_logged_in)
console.log(boolean_is_logged_in)

//1 => true
//0 => false
//"" empty string => false
//"disha" => true

let some_number = 22

let string_number = String(some_number)
console.log(string_number)  //it looks like a number
console.log(typeof string_number)  //but its actually a string

/**************operations*****************/

let value = 3
let neg_value = -value
console.log(neg_value)

let str1 = "hello"
let str2 = " disha"
let str3 = str1 + str2
console.log(str3)

console.log(1+ 2)

console.log("1" + 2)
console.log(1 + "2")

console.log("1" + 2 + 2)  //if first is string then the rest of the terms are treated as string //output = 122
console.log(1 + 2 + "2")  //if string is in last then first there will be conversion and then string  //output = 32

console.log(true)  //true
console.log(+true)  //1 //when we increment, it gets converted into number
//console.log(true+)  //it gives an error

console.log(+"")  //empty parenthesis gets converted into boolean by the increment and gives 0

let game_counter = 100
game_counter++   //also be written as ++game_counter but there is a difference between prefix and postfix operator
console.log(game_counter)