// using rest operator
function calCulateCartPrize(...num){
    let sum = 0;
    for(let i = 0; i < num.length; i++){
        sum += num[i];
    }

    return sum

} 
console.log(calCulateCartPrize(200, 300 , 400 , 600 ))


// use object in functions

objectHandler ={
    firstName : "Ankit " ,
    lastName : "Rathor",
    age :21
}

function funinarray(anyobject) {
    
    console.log(`my first name is ${anyobject.firstName} and last name is ${anyobject.lastName}and my age is ${anyobject.age}`)
}
funinarray(objectHandler)


// use arrray in function
let arr = [1,2,3,4,5,6,7,8]

function arruse(getArray){
   
    return   getArray
} 
console.log(arruse(arr))
