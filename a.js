let form=document.getElementById("form");
form.addEventListener("submit",display);
function display(e){
    let location=document.getElementById("storeli");
    e.preventDefault();
    let li=document.createElement("li");
    li.classList="list-group-item";
let expenseamount=e.target.Amount.value+"-";
let description=e.target.Description.value+"-";
let email=e.target.email.value+"-";
let category=e.target.category.value;
let textnode1=document.createTextNode(expenseamount);
let textnode2=document.createTextNode(description);
let textnode3=document.createTextNode(email);
let textnode4=document.createTextNode(category);
li.appendChild(textnode1);
li.appendChild(textnode2);
li.appendChild(textnode3);
li.appendChild(textnode4);
location.appendChild(li);
let deletebutton=document.createElement("button");
deletebutton.classList="delete";
deletebutton.id=email;
deletebutton.appendChild(document.createTextNode("Delete Expense"));
li.appendChild(deletebutton);
let editbutton=document.createElement("button");
editbutton.classList="edit";
editbutton.id=email;
editbutton.appendChild(document.createTextNode("Edit Expense"));
li.appendChild(editbutton);
let obj={
    expenseamount:expenseamount,
    description:description,
    category:category,  
    email:email,
};
let convert=JSON.stringify(obj);
localStorage.setItem(email,convert);




};

//delete element
let select=document.getElementById("storeli");
select.addEventListener("click",removeelement);
function removeelement(e){
    e.preventDefault();
    if(e.target.classList.contains("delete")){
        if(confirm("are you sure?")){
            localStorage.removeItem(e.target.id); 
            e.target.parentElement.remove();
        }
    }

    if(e.target.classList.contains("edit")){
        
        if(confirm("do you really want to edit the data?")){
           console.log( e.target.parentElement.childNodes[3].textContent);
         
            document.getElementById("Expense").value=e.target.parentElement.childNodes[0].textContent;
            document.getElementById("Description").value=e.target.parentElement.childNodes[1].textContent;
            document.getElementById("email").value=e.target.parentElement.childNodes[2].textContent;
            document.getElementById("category").value=e.target.parentElement.childNodes[3].textContent;
            localStorage.removeItem(e.target.id);
            e.target.parentElement.remove();
    
        };
    }
    
}


