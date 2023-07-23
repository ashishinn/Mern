console.log('Hello jee')

// let lastName = 'Tiwari '

// lastName.length

// let firstName = new String('Ashish')

// let message =

// `Hello ${firstName},

// Thanks for the opportunity

// Regards,
// Madrid`;


// let words = message.split(' ');
 
// console.log(words)

// console.log(message)

// let date = new Date();
// let date2 = new Date('September 27 2003  06:48');

// let date3 = new Date(2003, 8 ,27, 06);

// console.log(date3);

// date3.setUTCFullYear(1947)
// console.log(date3);

// let numbers = [1, 4, 5, 7];
// console.log(numbers)

//ending -> push

// begining -> unshift

//middle -> splice

// searching 

// console.log(numbers)
// console.log(numbers.indexOf(7))


// // we want to check if a number exists in an array

// if(numbers.indexOf() != -1)

// console.log("present");
// console.log(numbers.includes(7));


// console.log(
//     numbers.indexOf(7 , 2));


// let courses = [
//     {no:1, name:'Ashish'},
//     {no:2, name:'Rahul'}

// ];


// console.log(courses)

// console.log(courses.includes({no:1, name:'Ashish'}));





// let course =courses.find(course =>course.name === 'Ashish' );


// console.log(course)


// // Removing elements

// let number = [ 1 , 2, 3, 4, 5, 6, 7];

// // End

// number.pop();

// // Beginning

// number.shift();

// // Middle

// number.splice(2, 1);

// console.log(number);


// let numbers = [1, 2, 3, 4, 5];
// let numbers2 = numbers ;

// // numbers =[];
// // numbers.length = 0;
// // numbers.splice(0 , numbers.length);

// while ( numbers.length > 0 ) {
//     numbers.pop(); 
// }



// console.log(numbers);
// console.log(numbers2);



// let first = [1 , 2 , 3 ];
// let second = [4 , 5, 6];

// let combined = first.concat(second);

// console.log(combined);


// let marks = [10,20,30,40,50,60,70,80,90,]
// let sliced = marks.slice(5)


// // let sliced =  marks.slice(2, 6);

// console.log(sliced);



// let first = [1 , 2 , 3 ];
// let second = [4 , 5, 6];

// let combined = [...first, 'a ' , ...second , 'b ' , 'true'];
// console.log(combined);


// //copy kaise create kare

// let another = [...combined]

// console.log(another)



// let arr = [10 , 20, 30, 40, 50]


// for (let value of arr) {
//     console.log(value);
// }

// arr.forEach(number=>console.log(number));



// let number = [10,20,30,40,50];
// let joined = number.join(',');


// console.log(joined);


// let message = 'This is my first message'
// let parts = message.split(' ');

// console.log(parts);

// let joined1 = parts.join('_');
// console.log(joined1);





// let num = [40, 30 , 10 , 20, 50];
// console.log(num);   

// num.sort();

// console.log(num); 

// num.reverse();
// console.log(num);   


// let numbers = [ 1, 2, -1 , -4];

// let filtered =  numbers.filter(value=>value <0
// );

// console.log(filtered);



//mapping array


// let numbers = [7, 8, 9, 10];

// let item = numbers.map(value =>  'student_no' + value);

// console.log(item);

let numbers = [1 , 2 ,-6 , -9];

let filterted = numbers.filter(value => value >=0);

let items = filterted.map(function(num){
    return {value:num};
   
});

console.log(items);