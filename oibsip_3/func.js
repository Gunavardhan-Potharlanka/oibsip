const inputbox = document.getElementById("input-box");
const outputbox = document.getElementById("out");
function addtask(){
    if(inputbox.value.trim().length === 0){
        alert("You must write something valid!!!");
    }
    else{
        let t = document.createElement("section");
        t.classList.add("task");
        let c = document.createElement("div");
        c.classList.add("check");
        let d = document.createElement("div");
        d.classList.add("des");
        d.innerHTML=inputbox.value;
        let b = document.createElement("button");
        b.innerHTML = "Delete";
        t.appendChild(c);
        t.appendChild(d);
        t.appendChild(b);
        outputbox.appendChild(t);
    }
    inputbox.value='';
    saveData();
}
outputbox.addEventListener("click", function(e){
    if(e.target.tagName === "DIV"){
        e.target.parentElement.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "BUTTON"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);
function saveData(){
    localStorage.setItem("data", outputbox.innerHTML);
}
function getdata(){
    outputbox.innerHTML = localStorage.getItem("data");
}
getdata();