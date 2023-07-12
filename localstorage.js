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
let convert=JSON.stringify(obj);
localStorage.setItem(email,convert);
axios.post('https://crudcrud.com/api/efd0701e6e144fb9828afc5ca1d0943c/unicorns',obj).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})
}