let name=document.getElementById("name").textContent;
let email=document.getElementById("email").textContent;
let form=document.getElementById("my-form");
form.addEventListener('submit',storeuser);
console.log(email);
function storeuser(e){
 localStorage.setItem(name,email);
}

