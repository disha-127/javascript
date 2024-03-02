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
