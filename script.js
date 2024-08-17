const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list_container');
const button = document.querySelector('button');

button.addEventListener('click',() => {
    if (inputBox.value === ''){
        alert('Please enter a valid task');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }
    inputBox.value = "";
});