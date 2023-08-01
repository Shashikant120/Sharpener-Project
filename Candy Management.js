let form = document.getElementById('form');
let ul = document.getElementById('items');
let name = document.getElementById('candy');
let description = document.getElementById('description');
let price = document.getElementById('price');
let quantity = document.getElementById('Quantity');
form.addEventListener('submit', storedata);

async function storedata(e) {
    e.preventDefault();
    let buyone = document.createElement('input');
    buyone.type = "button";
    buyone.value = "Buy One";
    buyone.classList = "btn btn-primary"
    let buytwo = document.createElement('input');
    buytwo.type = "button";
    buytwo.value = "Buy two";
    buytwo.classList = "btn btn-primary"
    let buythree = document.createElement('input');
    buythree.type = "button";
    buythree.value = "Buy three";
    buythree.classList = "btn btn-primary";
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(name.value + "-"));
    li.appendChild(document.createTextNode(description.value + " "));
    li.appendChild(document.createTextNode(price.value + " "));
    li.appendChild(document.createTextNode(quantity.value + " "));
    li.appendChild(buyone);
    li.appendChild(buytwo);
    li.appendChild(buythree);
    li.classList = "list-group-item list-group-item-info";
    ul.appendChild(li);
    let data = {
        name: name.value,
        description: description.value,
        price: price.value,
        quantity: quantity.value,
    }
    axios.post('https://crudcrud.com/api/d160d55838c44bf19fe98f6f562c9dbb/QuantityManager', data);

    buyone.onclick = async function deductone() {
        let getdata = await axios.get('https://crudcrud.com/api/d160d55838c44bf19fe98f6f562c9dbb/QuantityManager');
        try {
            for (const element of getdata.data) {
                if (element.name == name.value) {
                    data.quantity = data.quantity - 1;
                    li.childNodes[3].textContent = data.quantity;
                    if (data.quantity < 0) {
                        alert('you do not have sufficient stock')
                    }
                    else {
                        await axios.put('https://crudcrud.com/api/d160d55838c44bf19fe98f6f562c9dbb/QuantityManager/' + element._id, data);
                    }
                }
            }
        } catch (error) {
            console.log(error);

        }
    }

    buytwo.onclick = async function deducttwo() {
        let getdata = await axios.get('https://crudcrud.com/api/d160d55838c44bf19fe98f6f562c9dbb/QuantityManager');
        try {
            for (const element of getdata.data) {
                if (element.name == name.value) {
                    data.quantity = data.quantity - 2;
                    li.childNodes[3].textContent = data.quantity;
                    if (data.quantity < 0) {
                        alert('you do not have sufficient stock')
                    }
                    else {
                        await axios.put('https://crudcrud.com/api/d160d55838c44bf19fe98f6f562c9dbb/QuantityManager/' + element._id, data);
                    }
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    buythree.onclick = async function deductthree() {
        let getdata = await axios.get('https://crudcrud.com/api/d160d55838c44bf19fe98f6f562c9dbb/QuantityManager');
        try {
            for (const element of getdata.data) {
                if (element.name == name.value) {
                    data.quantity = data.quantity - 3;
                    li.childNodes[3].textContent = data.quantity;
                    if (data.quantity < 0) {
                        alert('you do not have sufficient stock')
                    }
                    else {
                        await axios.put('https://crudcrud.com/api/d160d55838c44bf19fe98f6f562c9dbb/QuantityManager/' + element._id, data);
                    }
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
}
document.addEventListener('DOMContentLoaded', showdata);

async function showdata(e) {
    e.preventDefault();
    let response = await axios.get('https://crudcrud.com/api/d160d55838c44bf19fe98f6f562c9dbb/QuantityManager');
    try {
        for (const element of response.data) {
            let buyone = document.createElement('input');
            buyone.type = "button";
            buyone.classList = "btn btn-primary"
            buyone.value = "Buy One";
            let buytwo = document.createElement('input');
            buytwo.type = "button";
            buytwo.value = "Buy two";
            buytwo.classList = "btn btn-primary";
            let buythree = document.createElement('input');
            buythree.type = "button";
            buythree.value = "Buy three";
            buythree.classList = "btn btn-primary";
            let li = document.createElement('li');
            li.classList = "list-group-item list-group-item-info"
            li.appendChild(document.createTextNode(element.name + "-"));
            li.appendChild(document.createTextNode(element.description + " "));
            li.appendChild(document.createTextNode(element.price + " "));
            li.appendChild(document.createTextNode(element.quantity + " "));
            li.appendChild(buyone);
            li.appendChild(buytwo);
            li.appendChild(buythree);
            ul.appendChild(li);
            let modify = {
                name: element.name,
                description: element.description,
                price: element.price,
                quantity: element.quantity,
            }
            console.log(li.childNodes[0]);


            buyone.onclick = async () => {
                modify.quantity = modify.quantity - 1;
                li.childNodes[3].textContent=modify.quantity;

                if (modify.quantity < 0) {

                    alert('you do not have sufficient stock')
                }
                else {
                    await axios.put('https://crudcrud.com/api/d160d55838c44bf19fe98f6f562c9dbb/QuantityManager/' + element._id, modify);
                }
            }

            buytwo.onclick = async () => {
                modify.quantity = modify.quantity - 2;
                li.childNodes[3].textContent=modify.quantity;
                if (modify.quantity < 0) {
                    alert('you do not have sufficient stock')
                }
                else {
                    await axios.put('https://crudcrud.com/api/d160d55838c44bf19fe98f6f562c9dbb/QuantityManager/' + element._id, modify);
                }
            }

            buythree.onclick = async () => {
                modify.quantity = modify.quantity - 3;
                 li.childNodes[3].textContent=modify.quantity;
                if (modify.quantity < 0) {
                    alert('you do not have sufficient stock')
                }
                else {
                    await axios.put('https://crudcrud.com/api/d160d55838c44bf19fe98f6f562c9dbb/QuantityManager/' + element._id, modify);
                }
            }

        }

    }
    catch (error) {
        console.log(error);
    }
}