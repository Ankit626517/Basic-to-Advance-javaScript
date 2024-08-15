// What is Objects?
// ● It is work like array and we can say, it is a advance Version of array.
// ● It is a collection of key and value pair.
// ● It is a non-primitive data type.

// 1st way write to Object
 const employ = {
    name: 'Rahim',
    age: 25,
    address: 'Dhaka',
    salary: 25000,
 }
 console.log(employ); 
 console.log(employ.name); // Rahim
 console.log(employ.age); // 25
 console.log(employ.address); // Dhaka
 console.log(employ.salary); // 25000


 // 2nd way write to Object
 const empl = new Object();
 empl.name = 'Rahim';
 empl.age = 25;
 empl.address = 'Dhaka';
 empl.salary = 25000;
 console.log(employ);



 // 3rd way write to Object
 const emp = new Object({
    name: 'Rahim',
    age: 25,
 })
 console.log(emp);

 

