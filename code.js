let get=document.querySelector("#addForm");
get.addEventListener("submit",addelements);


let place=document.querySelector("#items");

//remove element
place.addEventListener('click',removelement);
function addelements(e){
    e.preventDefault();
    let value=document.querySelector("#item").value;
    let create=document.createElement("li");
    create.classList="li class";
    create.id="li id";
    let textnode1= document.createTextNode(value);
    create.appendChild(textnode1);
    let button=document.createElement("button");
    let textnode2 = document.createTextNode('X');
    button.classList="btn btn-danger btn-sm float-right delete";
    button.appendChild(textnode2);
    create.appendChild(button);
    place.appendChild(create);
    let editbutton=document.createElement("button");
    editbutton.classList="btn btn-danger btn-sm float-right delete";
    let textnode3=document.createTextNode("Edit");
    editbutton.appendChild(textnode3);
    create.appendChild(editbutton);
    create.appendChild(editbutton);
}
function removelement(e){
    e.preventDefault();
   if( e.target.classList.contains("delete")){
        if(confirm('do you really wants to remove this item ?')){
            let targeted=e.target.parentNode;
            place.removeChild(targeted);

        }
    }

}