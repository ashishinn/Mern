// setTimeout(function(){
//     console.log('third')
// },3000)

// function sync(){
//     console.log('first')
// }
// sync();

// // console.log('second');

// let meraPromise1 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('I am inside promise1');
//     },5000);
//     // return 2;
//     // resolve(2233);
//     reject(new Error('Bhaisahab error aaye hai'))
// })


// meraPromise1.then((value)=>{console.log(value)}, (error)=>{console.log('Recieved an error')})


// let meraPromise2 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('I am inside promise2');
//     },3000);
    // resolve(2233);
    // reject(new Error('Bhaisahab error aaye hai'))
// })


// console.log('Pehla');


// let waadaa1 = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log('set timeout1 started');
//     },2000);
//     resolve(true)
// })


// let output = waadaa1.then(()=>{
//     let waadaa2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('set timeout2 started');
//         },3000);
//         resolve('waada 2 resolved');
//     }) 
//     return waadaa2 ;
// })

// output.then((value)=>console.log(value))


// async function abcd(){
//     return 'kya hua tera wada';
// }


// async function utility(){
    
// let delhiMausam = new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         resolve("Delhi me bohot garmi hai");
//     },1000);
// });


// let hydMausam = new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         resolve("Hyderabad is cool");
//     },5000)
// });

// let dM = delhiMausam;
// let hM = hydMausam;

// return [dM,hM];



// }


// async function utility(){
//     let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     let output = await content.json();
//     console.log(output);

// }
// utility();

 
// async function helper(){
    
// let options = {
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'Babbar',
//       body: 'Tagdi Body',
//       userId: 2003,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
// };

// let content = await fetch ('https://jsonplaceholder.typicode.com/posts',options);
// let response = content.json();
// return response;
// }

// async function utility(){
//     let ans = await helper();
//     console.log(ans);
// }

// utility();


// let-> block scope 
// var-> global scope 

let name = "sher"
function init(){
  

    let name = "Ashish";
    function displayName(){
        console.log(name);

    }
   return displayName();
}
 function func1 = init();
func1();
                                                             


