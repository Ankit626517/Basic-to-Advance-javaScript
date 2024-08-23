// // 1.  Array Length
// var arr=[1,2,3,4,5,6]
// console.log(arr.length); // 6

// // ● Concat(): it returns a new array object that contains two or more
// // merged arrays.

// var arr1=[1,2,3,4,5,6];
// var arr2=[7,8,9,10,11,12];
// var arr3=arr1.concat(arr2);
// console.log(arr3)
// // other method ro merge array   
// var arr4 =[...arr1 , ...arr2]
// console.log(arr4)


// // Sort():- sort array in alphabetical order
// // Example: arrayName.sort()
// var arra=["c","a","h","d","g","e" ]
// var arra1=[5,8,4,9,7,1,2,3 ]
// console.log(arra.sort()); // [a,c,d,e,e,g,h]
// console.log(arra1.sort()); // [1,2,3,4,5,7,8,9]

// // Reverse(): reverse the array
// // Example: arrayName.reverse()

// var rev=[1,2,3,4,5,6,7,8,9];
// console.log(rev.reverse()); // [9,8,7,6,5,4,3,2,1]


// // Slice(): Make a new array containing the copy of the part of the given array.
// // Example: arrayName.slice(startIndex, endIndex);

// var arr=[1,2,3,4,5,6,7,8,9];
// var arr1=arr.slice(2,5);
// console.log(arr1); // [3,4,5]

// // ● Splice():It add/remove elements to/from the given array.
// // Example: arrayName.splice(start,delete,element1);
// var spli=[1,2,3,4,6,7,8,9];
// var apli1=spli.splice(4);
// console.log(apli1); // [3,4,5]


// // Map():It calls the specified function
// // for every array element and returns
// // the new array
// // Example: arrayName.map(function(currentValue,index,arr), thisValue)
// var arr=[1,2,3,4,5,6,7,8,9];
// var arr1=arr.map(function(x){
//     console.log(x+x)
//     });



// //     Reduce():The reduce() method
// // reduces the given array into a single
// // value by executing a reducer function.
// // Example: arrayName.reduce(function(total, currentValue, currentIndex, arr), initialValue)
// var arr=[1,2,3,4,5,6,7,8,9];
//  var arr1=arr.reduce(function(total, currentValue, currentIndex, arr){
//     var a= total + currentValue;
//     console.log(a)
//     }, 0);


//      const marvel_Heros =["Iron man " ,  "thor" , "spiderman "]
//      const dc_Heros =["superman " ,  "flash" , "batman "]
//     //  console.log(marvel_Heros)
//     //  console.log(dc_Heros)
//     //  marvel_Heros.push(dc_Heros) add array in array
    
//     // console.log(marvel_Heros[3])    access array element

//     //  console.log(marvel_Heros[3][2])
//      // output: batman  access array element in array

     
//     var addHeros = marvel_Heros.concat(dc_Heros) 
//     console.log(addHeros)

// convert string  to array 
 FirstName = "Ankit" 

  console.log( Array.from( FirstName))


// convert multiple values to arrray 
const score1 = 1000
const score2 = 1000
const score3 = 1000
const score4 = 1000

const arr5 = Array.of(score1,score2,score3,score4)
console.log(Array.isArray(arr5))



