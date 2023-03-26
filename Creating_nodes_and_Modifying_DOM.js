//Modify DOM

//parent node

var itemlist = document.querySelector(".list-group-item");
console.log(itemlist.parentNode);

//parentelement
var item4 = document.querySelector(".title");
console.log(item4.parentElement);

//children
var item2 = document.querySelector("#main-header");
console.log(item2.children);

//childnodes
var item3 = document.querySelector(".container");
console.log(item3.childNodes);


//firstchild
var item5 = document.querySelector("#items");
console.log(item5.firstChild);

// firstelementchild
console.log(item5.firstElementChild);

//lastchild
console.log(item5.lastChild);

//lastelementchild
console.log(item5.lastElementChild);

//nextsibling
var item6 = document.querySelector(".title");
console.log(item6.nextSibling);

//nextElementsibling

console.log(item6.nextElementSibling);


//previoussibling
let item7 = document.querySelector("#header-title");
console.log(item7.previousSibling);

//previouselementsibling
let item8 = document.querySelector("#items");
console.log(item8.previousElementSibling);

//create node
var create = document.createElement("div");
create.className = "division";
create.id = "identifier";
create.setAttribute("title","created_element");
console.log(create);
var add = document.createTextNode("hello ");
create.appendChild(add);

//inserting_before
var getlocation=document.querySelector("header .container");
var type= document.querySelector("header h1");
getlocation.insertBefore(create,type);
create.style.fontWeight="bold";
create.style.fontSize="28px";

//adding_before_item1

var getlocation2=document.querySelector("div  .list-group");
var type2=document.querySelector("header ul");
getlocation2.insertBefore(create,type2);



