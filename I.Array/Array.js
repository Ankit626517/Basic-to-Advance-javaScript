// Array is an object that represents a collection of similar type of elements.
// ●Array is a special variable which can hold more than one value
// ● Two Ways to make Array
// .1 
var arr=["Ankit " , "pritam" , "ROhan" ,"Sunil" ]
console.log(typeof arr)

console.log(arr) //Ankit

// 2. 

var array = new Array();
array[0] = "5";
array[1] = "4";
array[2] = "3";
array[3] = "2";
console.log(array) //Pritam
// ● Array is a special variable which can hold more than one value

// delete array values
// delete array[0]
console.log(delete arr[0])
console.log(arr)

// To modify value use (earr[0]=”rahul”;)
console.log(arr[0]="Hello")
console.log(arr)
// To add value use (arr[4]=”rahul”;)
arr[4]="yogesh"
console.log(arr)
// To add value at the end of array use (arr.push(“rahul”);)
arr.push("rahul")
console.log(arr)
// To remove value from the end of array use (arr.pop();)
arr.pop()
console.log(arr)

// To remove value from the start of array use (arr.shift();)
arr.shift()
console.log(arr)
// To add value at the start of array use (arr.unshift(“rahul”);)
arr.unshift("rahul")
console.log(arr)

