//lets scale app to more users
let form=document.querySelector("#my-form");
console.log(form);
form.addEventListener('submit',storedata);
function storedata(e){
    e.preventDefault();
    let name=e.target.name.value;
    let email=e.target.email.value;
    let user={
        name:name,
        email:email,
    };
    let stringvalue=JSON.stringify(user);
    localStorage.setItem(email,stringvalue);
    let li=document.createElement("li");
    let textnode=document.createTextNode("email is :-"+email+" name is :-"+name);
    li.appendChild(textnode);
    form.appendChild(li);

}