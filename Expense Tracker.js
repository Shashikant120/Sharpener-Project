


// new code
let form = document.getElementById('form');
let ul = document.getElementById('storeli');
form.addEventListener('submit', storeuser);
function storeuser(e) {
    e.preventDefault();
    //validation 
    if (!form.checkValidity()) {
        e.preventDefault();
    }
    form.classList.add('was-validated');

    let expenseamount = document.getElementById('Expense');
    let description = document.getElementById('Description');
    let email = document.getElementById('email');
    let category = document.getElementById('category');
    let obj = {
        expenseamount: expenseamount.value,
        description: description.value,
        email: email.value,
        category: category.value,

    }
    let convert = JSON.stringify(obj);
    localStorage.setItem(email.value, convert);

    //li element
    let li = document.createElement('li');
    li.classList = "list-group-item active gy-1";
    li.appendChild(document.createTextNode(expenseamount.value + " "));
    li.appendChild(document.createTextNode(description.value + " "));
    li.appendChild(document.createTextNode(email.value + " "));
    li.appendChild(document.createTextNode(category.value + " "));
    

    //deletebutton
    let delbutton=document.createElement('input');
    delbutton.type="button";
    delbutton.value="delete";
    delbutton.classList="btn btn-danger btn-lg text-center";
    li.appendChild(delbutton);

    //editbutton
    let editbutton=document.createElement('input');
    editbutton.type="button";
    editbutton.value="Edit";
    editbutton.classList="btn btn-danger btn-lg text-center";
    li.appendChild(editbutton);

    ul.appendChild(li);

    //delete button functionality
    delbutton.onclick=(e)=>{
        e.preventDefault();
        li.remove();
        localStorage.removeItem(obj.email); 
    }

    //edit button functionality
    editbutton.onclick=(e)=>{
        expenseamount.value=obj.expenseamount;
        description.value=obj.description;
        email.value=obj.email;
        category.value=obj.category;
        li.remove();
        localStorage.removeItem(obj.email);
    }
}

document.addEventListener('DOMContentLoaded',showonscreen);
function showonscreen(e){
    e.preventDefault();
    let expenseamount = document.getElementById('Expense');
    let description = document.getElementById('Description');
    let email = document.getElementById('email');
    let category = document.getElementById('category');
    let keys=Object.keys(localStorage);
    keys.forEach((element)=>{
        let li=document.createElement('li');
        let string=localStorage.getItem(element);
        let parse=JSON.parse(string);
        li.appendChild(document.createTextNode(parse.expenseamount+" "));
        li.appendChild(document.createTextNode(parse.description+" "));
        li.appendChild(document.createTextNode(parse.email+" "));
        li.appendChild(document.createTextNode(parse.category+" "));
        
        
          //deletebutton
    let delbutton=document.createElement('input');
    delbutton.type="button";
    delbutton.value="delete";
    delbutton.classList="btn btn-danger btn-lg text-center";
    li.appendChild(delbutton);

    //editbutton
    let editbutton=document.createElement('input');
    editbutton.type="button";
    editbutton.value="Edit";
    editbutton.classList="btn btn-danger btn-lg text-center";

    li.appendChild(editbutton);
    ul.appendChild(li);
    li.classList = "list-group-item active gy-1";


      //delete button functionality
      delbutton.onclick=(e)=>{
        e.preventDefault();
        li.remove();
        localStorage.removeItem(parse.email); 
    }

    //edit button functionality
    editbutton.onclick=(e)=>{
        expenseamount.value=parse.expenseamount;
        description.value=parse.description;
        email.value=parse.email;
        category.value=parse.category;
        li.remove();
        localStorage.removeItem(parse.email);
    }
    
    })
   
   
}