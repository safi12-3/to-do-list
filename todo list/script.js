const inputbox = document.getElementById("text-1");
const listContainer = document.getElementById("list-container")

function addTask(){
    if(inputbox.value === ''){
        alert("The input box cannot be empty")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        
    }
    inputbox.value = "";
}