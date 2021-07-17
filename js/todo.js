const btnAdd = document.querySelector('.btn-add')
const list = document.querySelector(".list")
const todos = [{
    id: 1,
    content: "Go shopping",
    status: false
}, 
{
    id: 2,
    content: "play soccer",
    status: true


}
    
]
renderTodo(todos)
function renderTodo(todos){
    //remove all elememt in list
    const lis = document.querySelectorAll(".list li")
    for(let i= 0; i<lis.length;i++){
        lis[i].remove();
    }
    todos.forEach(val=>{
        //
        const li = document.createElement("li")
        //them id vao li
        li.dataset.id = val.id
        if(val.status){
            li.classList.add("checked")
        }
        li.innerHTML = `
        <input type="checkbox" ${val.status ? "checked" : ""}>
        <span>${val.content}</span>
        <span class="delete">x</span>
        `
        list.appendChild(li)
    })
}

btnAdd.addEventListener("click",function(e){
    //ko load lai web
    e.preventDefault()
    //lay noi dung ben trong input
    const input = document.querySelector(".input-todo")
    const todo = input.value
    if(todo.trim()){
    todos.push({
        id: randomId(),
        content: todo.trim()
    })
    renderTodo(todos)
    // document.querySelector("input-todo").value = ""
    input.value = ""
}
})
//click vao o input check
document.addEventListener("click",function(e){
    const target = e.target
    if(target.classList.contains("check")){
    //lay data id
    const id = target.parentNode.dataset.id
    const currentIdx = todos.findIndex(val => val.id == id)
    todos[currentIdx].status = !todos[currentIdx].status
    //
    renderTodo(todos)
    }
    if(target.classList.contains("delete")){
    //lay data id
    const id = target.parentNode.dataset.id
    const currentIdx = todos.findIndex(val => val.id == id)
    todos.splice(currentIdx,1)
    //
    renderTodo(todos)
    }
})

function randomId(){
    //return Math.floor(Math.random()*1000)+100;
    const date = new Date()
    return date.getTime()
}