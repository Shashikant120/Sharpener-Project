//delete date from local storage
let form = document.querySelector("#my-form");
form.addEventListener("submit", storeuser);
function storeuser(e) {
    e.preventDefault();
    let name = e.target.name.value;
    let email = e.target.email.value;
    let user = {
        name: name,
        email: email,
    };
    let stringconvert = JSON.stringify(user);
    localStorage.setItem(email, stringconvert);
    let li = document.createElement('li');
    let textcontent = document.createTextNode("name is " + name + " email is " + email);
    li.appendChild(textcontent);
    let button = document.createElement("button");
    button.classList = "btn btn-danger btn-sm float-right delete";
    let deletetext = document.createTextNode("delete");
    button.appendChild(deletetext);
    button.id = email;
    li.appendChild(button);
    form.appendChild(li);

    //edit button
    let editbutton = document.createElement("button");
    let buttontext = document.createTextNode("Edit");
    editbutton.appendChild(buttontext);
    editbutton.classList = "edit";
    editbutton.id = email;
    li.appendChild(editbutton)

}
form.addEventListener('click', deleteuser);
function deleteuser(e) {

    if (e.target.classList.contains("delete")) {
        if (confirm("are you sure you want to delete this item")) {
            form.removeChild(e.target.parentElement);
        }
        localStorage.removeItem(e.target.id);
    }
}

//edit button event listener
form.addEventListener("click", editadata);
function editadata(e) {
    if (e.target.classList.contains("edit")) {
        if (confirm("do you wish to edit this item?")) {

            let convert = JSON.parse(localStorage.getItem(e.target.id));
            console.log(convert);
            let email = convert.email;
            let name = convert.name;
            form.name.value = name;
            form.email.value = email;
            form.removeChild(e.target.parentElement);
            localStorage.removeItem(e.target.id);

        }

    }
}

