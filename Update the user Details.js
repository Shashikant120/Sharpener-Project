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
let input=document.createElement('input');
input.type="button";
input.value="delete";
li.appendChild(input);
let edit=document.createElement('input');
edit.type="button";
edit.value='Edit';
li.appendChild(edit);
ul.appendChild(li);


let convert=JSON.stringify(obj);
localStorage.setItem(email,convert);
axios.post('https://crudcrud.com/api/1db55c7d0eff4446862b6ceb9ebb4408/unicorns',obj).then((data)=>{
  
}).catch((error)=>{
    console.log(error);
})
input.onclick=(e)=>{
input.parentElement.remove();
localStorage.removeItem(email);
axios.get('https://crudcrud.com/api/1db55c7d0eff4446862b6ceb9ebb4408/unicorns').then((response)=>{
    for(let i=0;i<response.data.length;i++){
        if(response.data[i].email==email){
            let id=response.data[i]._id;
            axios.delete('https://crudcrud.com/api/1db55c7d0eff4446862b6ceb9ebb4408/unicorns/'+id);
           
        }
    }
})
}

//edit functionality

edit.onclick=(e)=>{
    e.preventDefault();
    localStorage.removeItem(email);
    e.target.parentElement.remove();
    let email1=document.getElementById('email');
    let name1=document.getElementById('name');
    email1.value=email;
    name1.value=name;

    axios.get('https://crudcrud.com/api/1db55c7d0eff4446862b6ceb9ebb4408/unicorns').then((response)=>{
    for(let i=0;i<response.data.length;i++){
        if(response.data[i].email==email){
            let id=response.data[i]._id;
            axios.delete('https://crudcrud.com/api/1db55c7d0eff4446862b6ceb9ebb4408/unicorns/'+id);
           
        }
    }
})

}





};
window.addEventListener('DOMContentLoaded',showdata);   
function showdata(e){
    e.preventDefault();
    axios.get('https://crudcrud.com/api/1db55c7d0eff4446862b6ceb9ebb4408/unicorns').then((response)=>{
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
