
const nodeContainer = document.querySelector(".nodeContainer")
const createBtn = document.querySelector(".btn")
let nodes = document.querySelector(".inputBox")


function showNodes(){
    nodeContainer.innerHTML = localStorage.getItem("node")
}
showNodes()

function updateStorage(){
    localStorage.setItem("nodes" , nodeContainer.innerHTML)
}



createBtn.addEventListener(
    "click", ()=>{
    let inputBox = document.createElement("p")
    let img = document.createElement("img")
    inputBox.className = "inputBox"
    inputBox.setAttribute("contenteditable" , "true")
    img.src = "https://images.app.goo.gl/wjMAJjVujUnr78f89"
    nodeContainer.appendChild(inputBox).appendChild(img)
    }
)
nodeContainer.addEventListener("click" ,function(e){
    if(e.target.tagName === "IMG"){
    e.target.parentElement.remove();
    updateStorage()
    }
    else if (e.target.tagName === "p"){
        note = document.querySelectorAll(".inputBox")
        nodes.forEach(nt =>{
            nt.onkeyup = function(){
              updateStorage()  
            }
        })
    }

})