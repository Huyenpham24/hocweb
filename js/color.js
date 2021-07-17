const btnAdd = document.querySelector('.btn-add')
const list = document.querySelector(".list")
const colors = [{
    id: 1,
    color: "#3C5186",
}, 
{
    id: 2,
    color: "#9B72AA"


}
    
]
renderColor(colors)
function renderColor(colors){
    //remove all elememt in list
    const lis = document.querySelectorAll(".list li")
    for(let i= 0; i<lis.length;i++){
        lis[i].remove();
    }
    colors.forEach(val=>{
        //
        const li = document.createElement("li")
        //them id vao li
        li.dataset.id = val.id
        // li.classList = "bg-color";
        li.style.background = val.color;
        li.innerHTML = `
        <span class="color">${val.color}</span>
        <span class="delete">x</span>
        `
        list.appendChild(li)
    })
}

btnAdd.addEventListener("click",function(e){
    //ko load lai web
    e.preventDefault()
    //lay noi dung ben trong input
    const input = document.querySelector(".input-color");
    const col = input.value.toLowerCase()
    if (col.trim() && validColor(col)) {
        const isExist = colors.some(val => val.color === col);
        if (!isExist) {
            colors.push({
                id: randomId(),
                color: col
            })
        }
        renderColor(colors)
        input.value = ""
    }
    else{
        input.style.borderColor = "red";
    }
    renderColor(colors)

})
//click vao color
document.addEventListener("click",function(e){
    const target = e.target
    if(target.classList.contains("color")){
    //lay data id
    const id = target.parentNode.dataset.id
    const currentIdx = colors.findIndex(val => val.id == id)
    document.querySelector('body').style.background = colors[currentIdx].color;   
    //
    renderColor(colors)
    }
    if(target.classList.contains("delete")){
    //lay data id
    const id = target.parentNode.dataset.id
    const currentIdx = colors.findIndex(val => val.id == id)
    colors.splice(currentIdx,1)
    //
    renderColor(colors)
    }
})

function randomId(){
    //return Math.floor(Math.random()*1000)+100;
    const date = new Date()
    return date.getTime()
}
function validColor(color = '') {
    const style = new Option().style;
    style.color = color;
    return style.color !== '';
 }