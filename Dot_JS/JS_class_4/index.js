// console.log("Kya haal");

// run();


// fucntion declaration

// function run(){
//     console.log("running");
// }

// // function call or invoke



// // Named  function assignment

// let stand = function walk (){
//     console.log("walking");
// }

// // Anonymous function assignment

// let stand2 = function(){
//     console.log("walking");
// }



// stand();
// stand2();
// let jump  = stand

// jump();



// let x = 1 ;
// x = 'a' ;
// console.log(x);

// function sum(){

//     let total  = 0;
//     for (let value of  arguments)
//     total = total + value;
//     // console.log(arguments);
//     return total;


// }
// // console.log(sum(1,3));
// // console.log(sum(1));
// // console.log(sum(1,2 ,2,23,232));


// let ans = sum(1,2,3,4,5,6,7,8,9,10,11);
// console.log(ans);





// //Rest operators
// function sum(num,value,...args){
//     console.log(args);
// }

// sum(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16);


//Default parameters

// function interest(p,r=6,y=9) {
//     return  p*r*y/100;
// }

// // console.log(interest(1000,undefined,8));


// //GETTER SETTER

// // getter -> access properties
// //setter -> change or mutate properties

// let person ={
//     fName : 'Ashish',
//     lName : 'Tiwari',

//     get  fullName(){
//         return `${person.fName} ${person.lName}`;
//     },

    
//     set fullName (value){
//         if(typeof value !== 'String'){
//             throw new Error("You have not sent an string ");
//         }
//         let parts = value.split(' ');
//         this.fName = parts[0];
//         this.lName = parts[1];
//     }
// };

// // console.log(person);

// //issue -> real only


// try {
//     person.fullName = true;

// } catch (e) {
//     alert(e);
    
// }


// console.log(person.fullName);




// {
//     let a = 5;
//     console.log(a);
// }


// console.log(a)


// function walk(){
//     var a = 5;
// }
// console.log(a);

// for(var i = 0; i < 10  ; i++) {


// }

// console.log(i);


// if(true){
//     let a = 5;
// }

// console.log(a);

function a(){
    const a = 5;
}

const ab = 5;

function b(){
    const a = 5;       
}




