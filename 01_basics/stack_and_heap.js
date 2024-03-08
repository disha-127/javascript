//stack(primitive) 
//heap(non-primitive)


//stack example
let my_youtube_name = "dishapatildotcom"
let another_name = my_youtube_name
another_name = "youtube disha"

console.log(my_youtube_name)  //the original value of the variable remains the same
console.log(another_name)  //this is because the changes are done to the copy of the variable

//heap example - object

let user_one = {
    email: "user@google.com",
    upi: "user@ybl"  
}

let user_two = user_one
user_two.email = "disha@google.com"  //dot operator is used to access inside the object

console.log(user_one.email)
console.log(user_two.email) //changes get done to the original variable it is because bothe the variables are referencing the same object in the heap
