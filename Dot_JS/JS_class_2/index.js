console.log("chaliye suru krte hai ");

// object creation

// factory function

// function createRectangle(len , bre ) {
//   return rectangle = {
//     length: len,
//     breadth: bre,

//     draw: function () {
//       console.log("drawing rectangle");
//     }
//   };
// }

// let rectangleObj1 = createRectangle(5,4);
// let rectangle2 = createRectangle(23, 53);
// let rectangle3 = createRectangle(34,51);

// Camelcase -> numberOfSquares
// constructor function -> first letter of every word is capital -> NumberOfSquares

// constructor function -> props /method -> initialise/Define

// function Rectangle(len, bre){
//     this.length = len;
//     this.breadth = bre;
//     this.draw = function () {
//         console.log("drawing rectangle");
//     };
// }

// object creation using constructor function

// let rectangleObject = new Rectangle(5,8);

// rectangleObject.color = 'yellow '
// console.log(rectangleObject);

// delete rectangleObject.color;
// console.log(rectangleObject);

// let Rectangle1 = new function (
//     length , breadth,
// ` this.length = length;
//     this.breadth = breadth;
//     this.draw = function () {
//         console.log("drawing rectangle");
//     }`);

// rect.length

// object creation using Rectangle1

// let rect = new Rectangle1(2,3);

// console.log(rect);

// let rectangle1 = {
//     length: 1,
//     breadth: 2,

//       draw: function() {
//             console.log('drawing rectangle');

//         }
// };

// let a = 10 ;
// let b = a ;

// a++
// console.log(a);
// console.log(b);

// let a = { value: 10 };
// let b = a;
// a.value++;
// console.log(a.value);
// console.log(b.value);

 
// primitive type 

// let a = 10 ;

// function inc(a){
//     a++

// }

// inc(a)

// console.log(a);



// Reference type 


// let a = { value: 10};

// function inc(a){
//     a.value++;
// }
// inc(a);
// console.log(a.value);



// let rectangle = {
//     length : 2,
//     breadth : 4
// };


// for-in loop 

// for(let key in rectangle) {
//     //key are reflected through key variables
//     //value are reflected through rectangle[key]
//     console.log(key , rectangle[key]);
// }

// for-of loop 


// for(let key of Object.entries(rectangle) ){
//     console.log(key);
// }





//  if ('length' in rectangle) {
//     console.log('Present');
    
//  }
//  else {
//     console.log('Absent');
//  }




// let src = {
//     a : 10,
//     b : 20,
//     c : 30
// }

// let dest = {};

// for (let key in src) {
//     dest[key] = src[key];
// }

// console.log(dest);

// src.a++;
// console.log(src)


// let src = {
//     a : 10,
//     b : 20,
//     c : 30
// };

// let src2 = { value: 25};


// let dest = Object.assign({} , src , src2);

// console.log(dest);

// src.a++;
// console.log(dest);


//Object Cloning #3


let src = {
    a : 10,
    b : 20,
    c : 30
}

let dest = {...src};
console.log(dest)

src.a++

console.log(dest)
console.log(src)