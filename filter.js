let select=document.querySelector("#addForm");
select.addEventListener("submit",addelement);
let jagah=document.querySelector("#items");
jagah.addEventListener("click",removeelement);
var obtain=document.querySelector("#added");
function addelement(e){
    e.preventDefault();
    let val=document.querySelector("#item").value;
    var create=document.createElement("li");
    create.classList="added class";
    create.id="identifier";
    let textnode=document.createTextNode(val);
    create.appendChild(textnode);
   

    //adding new field value;
 
    let val3=obtain.value;
    let textnode4=document.createTextNode(val3);
  
   create.appendChild(textnode4);


    //edit button
    let button=document.createElement("button");
    button.classList="btn btn-danger btn-sm float-right delete";
    let textnode2=document.createTextNode("Edit");
    button.appendChild(textnode2);
    create.appendChild(button);

    //adding delete button
    let button2=document.createElement("button");
    button2.classList="btn btn-danger btn-sm float-right delete";
    let textnode3=document.createTextNode("X");
    button2.appendChild(textnode3);
    create.appendChild(button2);
    jagah.appendChild(create);
 


    
}



function removeelement(e){
  e.preventDefault();
  if(e.target.classList.contains("delete")){
    if(confirm("do you really want remove this element?")){
        let element=e.target.parentNode;
        jagah.removeChild(element);
      
    }
  }
}
let filter=document.querySelector("#filter");
filter.addEventListener("keyup",filterelement);
let li=document.getElementsByClassName("list-group-item");

function filterelement(e){
    let values=obtain.value;
    let text=e.target.value.toLowerCase();
Array.from(li).forEach(function(element){
    let val2=element.textContent.toLowerCase();
    if(val2.indexOf(text)!=-1||values.toLowerCase().indexOf(text)!=-1){
        element.style.display="block";
        
    }
    else{
        element.style.display="none";
    
    }

})};
