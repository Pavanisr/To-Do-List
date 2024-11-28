const texttast = document.getElementById("texttask");
const sub = document.getElementById("sub");
const results = document.getElementById("results");

sub.addEventListener("click",function(e){
    if(texttask.value.length>0){
    e.preventDefault()
    const listitem = document.createElement("li");
    const additem = document.createElement("span");
    const deletbutton = document.createElement("button");
    const donebutton = document.createElement("button");

    additem.classList.add("item");
    additem.innerText = texttask.value;
    deletbutton.classList.add("del");
    deletbutton.innerText = "del";
    donebutton.classList.add("done");
    donebutton.innerText = "done";

    listitem.appendChild(additem);
    listitem.appendChild(donebutton);
    listitem.appendChild(deletbutton);
    results.appendChild(listitem);

    deletbutton.addEventListener("click",function(){
        results.removeChild(listitem);
    })

    donebutton.addEventListener("click",function(){
        const span = listitem.querySelector(".item")
        span.style.color="black";
        span.style.textDecoration = "line-through";
        
    })

    texttask.value= "";
    texttask.focus();
}
else{
    e.preventDefault();
}
})