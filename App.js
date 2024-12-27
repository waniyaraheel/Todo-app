let todovalue = document.querySelector("#userInput")
let addTodo = document.querySelector(".userBtn")
let resultDiv = document.querySelector(".body")



let todoList=[];
console.log(todoList);


addTodo.addEventListener("click" ,() => {
    
resultDiv.innerHTML=""

todoList.push(todovalue.value)




todoList.forEach((todo) =>{


let childDiv =document.createElement("div")
childDiv.className ="todo"
childDiv.innerHTML=todo



resultDiv.appendChild(childDiv)


let Button =document.createElement("button")
// childDiv.className ="todo"
Button.innerHTML="remove"
childDiv.appendChild(Button)


resultDiv.appendChild(childDiv)
















})


})