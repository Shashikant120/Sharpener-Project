var header =document.querySelector("#header-title");
header.textContent="Hola";
var input=document.querySelector("input");
input.style.backgroundColor="red";

var input2= document.querySelector('input[type="submit"]');
input2.value="Send Me";

var listitem=document.querySelector("li");
listitem.style.backgroundColor="grey";
var listitem2=document.querySelector("li:nth-child(3)");
listitem2.style.backgroundColor="Pink";


//QuerySelector deliverables

var item2=document.querySelector(".list-group-item:nth-child(2)");
item2.style.color="green";

var item3=document.querySelector("li:nth-child(3)");
item3.style.visibility="hidden";

//QuerySelectorAll Deliverables
var seconditem=document.querySelectorAll("li");
seconditem[1].style.color="green";

var odd=document.querySelectorAll("li:nth-child(odd)");
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor="green";
}

