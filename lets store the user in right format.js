let form=document.getElementById("my-form");
form.addEventListener("submit",adduser);
function adduser(e){
    e.preventDefault();
    let name=e.target.name.value;
    let email=e.target.email.value;
    let user={
        name:name,
        email:email,
    };
    let store=JSON.stringify(user);
    localStorage.setItem("user",store);

    //to obtain the same
    let obtain=JSON.parse(localStorage.getItem("user"));
    console.log(obtain);


}