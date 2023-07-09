let  post=[];
let obj={
    name:'Shashi',
    lastActivityTime:new Date().getTime(),
};
console.log(obj.lastActivityTime);

function createpost(posts){
    return new Promise((resolve,reject)=>{
        post.push(posts);
        resolve();
     
    })
}
function updateLastUserActivityTime(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            obj.lastActivityTime=new Date.getTime();
        }, 1000);
    })
}