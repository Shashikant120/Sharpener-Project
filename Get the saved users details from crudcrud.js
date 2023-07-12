let form=document.getElementById('form');
form.addEventListener('submit',storeuser);
function storeuser(e){
e.preventDefault();
let email=document.getElementById('email').value;
let name=document.getElementById('name').value;
let obj={
    name:name,
    email:email,
};
let ul=document.getElementById('items');
let li=document.createElement('li');
li.appendChild(document.createTextNode(`${name}-${email}`));
ul.appendChild(li);

let convert=JSON.stringify(obj);
localStorage.setItem(email,convert);
axios.post('https://crudcrud.com/api/4c2e1f25d1d34b2f9085360decc5a28e/appointmentdata',obj).then((data)=>{
  
}).catch((error)=>{
    console.log(error);
})
};
window.addEventListener('DOMContentLoaded',showdata);   
function showdata(e){
    e.preventDefault();
    axios.get('https://crudcrud.com/api/4c2e1f25d1d34b2f9085360decc5a28e/appointmentdata').then((response)=>{
        for(let i=0;i<response.data.length;i++){
            let name=response.data[i].name;
            let email=response.data[i].email;
            let ul=document.getElementById('items');
         let li=document.createElement('li');
         li.appendChild(document.createTextNode(`${name}-${email}`));
         ul.appendChild(li);

        }
    }).catch((error)=>{
        console.log(error);
    })
}
