const formEl=document.querySelector(".form");
const inputEl=document.querySelector(".input");
const taskList=document.querySelector(".task_lists");
// const checkbtn=document.querySelectorAll(".check");
const deletebtn=document.querySelector(".delete");

let list=JSON.parse(localStorage.getItem("taskList"));
list.forEach((taskEl)=>{
    updateToDo(taskEl);
})


formEl.addEventListener("submit",(event)=>{
    event.preventDefault();
    updateToDo();
});

function updateToDo(taskEl){
    const task=document.createElement("li");
    task.innerHTML=inputEl.value;
    if(taskEl){
        task.innerHTML=taskEl.name;
    }
    taskList.appendChild(task);
    inputEl.value="";
    if(taskEl && taskEl.checked){
        task.classList.add("checked");
    }
    const checkbtn=document.createElement("div");
    checkbtn.innerHTML=`<i class="fa-solid fa-square-check check"></i>`;

    const deletebtn=document.createElement("div");
    deletebtn.innerHTML=`<i class="fa-solid fa-trash-arrow-up delete"></i>`;

    task.appendChild(checkbtn);
    task.appendChild(deletebtn);

    checkbtn.addEventListener("click",()=>{
        task.classList.toggle("checked");
        updateStorage();
    })
    deletebtn.addEventListener("click",()=>{
        task.remove();
        updateStorage();
    })

    updateStorage();
};

function updateStorage(){
    const liEls=document.querySelectorAll("li");
    list=[];
    liEls.forEach((liEl)=>{
        list.push({
            name: liEl.innerText,
            checked: liEl.classList.contains("checked")
        })
    });
    localStorage.setItem("taskList",JSON.stringify(list));
};