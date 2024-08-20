let todoValue=""
let handleChange=(event)=>{
    todoValue= event.target.value;
}
let handleClick=()=>{
    document.getElementById("input").value="";
    let list=document.getElementById('list');
    let li= document.createElement("li");
    li.textContent=(todoValue);
    li.className="list-style";
    list.appendChild(li);
    let delBtn=document.createElement("button");
    delBtn.textContent="Delete"
    li.appendChild(delBtn);

delBtn.onclick=()=>{
    list.removeChild(li);
    
}
    // console.log(list);
}