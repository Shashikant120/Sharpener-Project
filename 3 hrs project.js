let form = document.getElementById('form');
let ul = document.getElementById('items');
let name = document.getElementById('candy');
let description = document.getElementById('description');
let price = document.getElementById('price');
let quantity = document.getElementById('Quantity');
form.addEventListener('submit', storedata);
function storedata(e) {
    e.preventDefault();
    let buyone = document.createElement('input');
    buyone.type = "button";
    buyone.value = "Buy One";
    let buytwo = document.createElement('input');
    buytwo.type = "button";
    buytwo.value = "Buy two";
    let buythree = document.createElement('input');
    buythree.type = "button";
    buythree.value = "Buy three";
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(name.value + "-" + description.value + "-" + price.value + "-" + quantity.value + " "));
    li.appendChild(buyone);
    li.appendChild(buytwo);
    li.appendChild(buythree);
    ul.appendChild(li);

    let data = {
        name: name.value,
        description: description.value,
        price: price.value,
        quantity: quantity.value,
    }
    axios.post('https://crudcrud.com/api/7f0772e05c13457bbf3ae0552ac44995/QuantityManager', data);

    buyone.onclick = () => {
        axios.get('https://crudcrud.com/api/7f0772e05c13457bbf3ae0552ac44995/QuantityManager').then((response) => {
            for (let i = 0; i < response.data.length; i++) {
                if (response.data[i].name == name.value) {
                    let modify = {
                        name: name.value,
                        description: description.value,
                        price: price.value,
                        quantity: quantity.value - 1,
                    }
                    if(modify.quantity<0){
                        alert('you do not have sufficient stock')
                    }
                    else{
                        axios.put('https://crudcrud.com/api/7f0772e05c13457bbf3ae0552ac44995/QuantityManager/' + response.data[i]._id, modify);
                    }
                   
                }
            }
        })
    }
    buytwo.onclick = () => {

        axios.get('https://crudcrud.com/api/7f0772e05c13457bbf3ae0552ac44995/QuantityManager').then((response) => {
            for (let i = 0; i < response.data.length; i++) {
                if (response.data[i].name == name.value) {
                    let modify = {
                        name: name.value,
                        description: description.value,
                        price: price.value,
                        quantity: quantity.value - 2,
                    }
                    if(modify.quantity<0){
                        alert('you do not have sufficient stock')
                    }
                    else{
                        axios.put('https://crudcrud.com/api/7f0772e05c13457bbf3ae0552ac44995/QuantityManager/' + response.data[i]._id, modify);
                    }
                 
                }
            }
        })

    }
    buythree.onclick = () => {

        axios.get('https://crudcrud.com/api/7f0772e05c13457bbf3ae0552ac44995/QuantityManager').then((response) => {
            for (let i = 0; i < response.data.length; i++) {
                if (response.data[i].name == name.value) {
                    let modify = {
                        name: name.value,
                        description: description.value,
                        price: price.value,
                        quantity: quantity.value - 3,
                    }
                    if(modify.quantity<0){
                        alert('you do not have sufficient stock')
                    }
                    else{
                        axios.put('https://crudcrud.com/api/7f0772e05c13457bbf3ae0552ac44995/QuantityManager/' + response.data[i]._id, modify);
                    }
                }
            }
        })

    }
}

document.addEventListener('DOMContentLoaded', showdata);
function showdata(e) {
    e.preventDefault();
    axios.get('https://crudcrud.com/api/7f0772e05c13457bbf3ae0552ac44995/QuantityManager').then((response) => {

        for (let i = 0; i < response.data.length; i++) {
            let buyone = document.createElement('input');
            buyone.type = "button";
            buyone.value = "Buy One";
            let buytwo = document.createElement('input');
            buytwo.type = "button";
            buytwo.value = "Buy two";
            let buythree = document.createElement('input');
            buythree.type = "button";
            buythree.value = "Buy three";
            let li = document.createElement('li');
            li.appendChild(document.createTextNode(response.data[i].name + "-" + response.data[i].description + "-" + response.data[i].price + "-" + response.data[i].quantity + " "));
            li.appendChild(buyone);
            li.appendChild(buytwo);
            li.appendChild(buythree);
            ul.appendChild(li);

            buyone.onclick = () => {
                let modify = {
                    name: response.data[i].name,
                    description: response.data[i].description,
                    price: response.data[i].price,
                    quantity: response.data[i].quantity - 1,
                }
                if(modify.quantity<0){
                    alert('you do not have sufficient stock')
                }
                else{
                    axios.put('https://crudcrud.com/api/7f0772e05c13457bbf3ae0552ac44995/QuantityManager/' + response.data[i]._id, modify);
                }
            }

    
            buytwo.onclick = () => {
                let modify = {
                    name: response.data[i].name,
                    description: response.data[i].description,
                    price: response.data[i].price,
                    quantity: response.data[i].quantity - 2,
                }
                if(modify.quantity<0){
                    alert('you do not have sufficient stock')
                }
                else{
                    axios.put('https://crudcrud.com/api/7f0772e05c13457bbf3ae0552ac44995/QuantityManager/' + response.data[i]._id, modify);
                }
            }
            buythree.onclick = () => {
                let modify = {
                    name: response.data[i].name,
                    description: response.data[i].description,
                    price: response.data[i].price,
                    quantity: response.data[i].quantity - 3,
                }
                if(modify.quantity<0){
                    alert('you do not have sufficient stock')
                }
                else{
                    axios.put('https://crudcrud.com/api/7f0772e05c13457bbf3ae0552ac44995/QuantityManager/' + response.data[i]._id, modify);
                }
            }

        }


    })
}