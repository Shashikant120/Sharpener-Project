// //========== User's Code Starts Here ==========
// const blogs =[];

// //Do not touch these functions below at all
// function create1stBlog() {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             blogs.push({title: 'BLOG1'});
//             resolve();
//         }, 3000)
//     }) 
// }

// //Do not touch these functions below at all
// function create2ndBlog() {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             blogs.push({title: 'BLOG2'});
//             resolve()
//         }, 2000)
//     }) 
// }


// function deleteBlog(){
//    //complete this function such that it removes the last element from the blog Array and resolves the deleted blog in 1 second timeout
//    //If no blog present , it breaks the promise with ERROR (reject) in 1 second timeout
//    return new Promise((resolve,reject)=>{
//        if(blogs.length>0){
//            blogs.pop();
//            resolve();
//        }
//        else{
//            reject("ERROR")
//        }
//    })
// }

// //Call the function in the right way so that we can get the desired output
//    create2ndBlog().then(()=>{
//     console.log(blogs[blogs.length-1].title);
//      create1stBlog().then(()=>{
//          console.log(blogs[blogs.length-1].title);
//          deleteBlog().then(()=>{
//             deleteBlog().then(()=>{
//                 return deleteBlog();
//             }).catch((error)=>{
//                 console.log(error);
//             })
//          })
//      })
// })
// //========== User's Code Ends Here ==========



console.log('Person 1 : shows Ticket');
console.log('Person 2 : shows Ticket');

let wifebringingtickets=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('Ticket');
    }, 3000);
})


const getpopcorn= wifebringingtickets.then((ticket)=>{
    console.log("wife : I have Ticket");
    console.log("husband : We should go in ");
    console.log("wife :No, I am hungry");
    return new Promise((resolve,reject)=>{
        resolve(`${ticket},Popcorn`);
    })
});

const getbutter=getpopcorn.then((data)=>{
    console.log("husband : I got some popcorn");
    console.log('husband :we should go in');
    console.log('Wife : I need more butter on my popcorn');
    return new Promise((resolve,reject)=>{
        resolve(`${data},Butter`);
    })
})
const getcolddrink=getbutter.then((data)=>{
  return new Promise((resolve,reject)=>{
    resolve(`Husband : I got ${data},Colddrink`);
  })
})
getcolddrink.then((data)=>{
    console.log(data);
})


console.log('Person 4 : shows Ticket');
console.log('Person 5 : shows Ticket');




// using Async Await

console.log('with async await');

const premovie=async()=>{

    const wifebringingtickets=new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('Ticket');
        }, 3000);
    })


    const getpopcorn= 
         new Promise((resolve,reject)=>{
            resolve(`Popcorn`);
        })

    const getbutter=
        new Promise((resolve,reject)=>{
            resolve(`Butter`);
        })

    const getcolddrink= new Promise((resolve,reject)=>{
        resolve('cold drink');
    })
   

    let ticket=await wifebringingtickets;
      console.log(`Wife  : I have a ${ticket}`);
    console.log("husband : We should go in ");
    console.log("wife :No, I am hungry");

    let popcorn=await getpopcorn;
    console.log(`husband : I got some${popcorn}`);
    console.log('husband :we should go in');
    console.log('Wife : I need more butter on my popcorn');

    let colddrink=await getcolddrink;
    console.log(`Husband : I got ${colddrink}`);
   
    let butter= await getbutter;
    console.log(`Husband : I got some ${butter}`);
    console.log("Wife : lets go then");


    

        return ticket;

    }

    premovie().then((ticket)=>{
        console.log(`Person 3 : shows ${ticket}`);
    })