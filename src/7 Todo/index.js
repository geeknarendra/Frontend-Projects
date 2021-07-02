showTask();
const inptTask=document.getElementById("inputTask")  //input task
const addbttn=document.querySelector(".addTAsk")    //task add button

addbttn.addEventListener("click",function(){
    inptTaskval=inptTask.value;
    let webtask=localStorage.getItem("localtask");
    if(inptTaskval.trim()==0){
        alert("Input field can't be empty")
        return 
    } 
    if(webtask == null){
        taskObj = [];
    }
    else{
        taskObj = JSON.parse(webtask);
    }    
    taskObj.push(inptTaskval);
    localStorage.setItem("localtask",JSON.stringify(taskObj));
    inptTask.value=""
    showTask();
})

function showTask(){
    let webtask=localStorage.getItem("localtask");
    if(webtask == null){
        taskObj = [];
    }
    else{
        taskObj = JSON.parse(webtask);
    }
    
    let task='';
    const taskList=document.querySelector(".tododlist")              //Task list
    taskObj.forEach((item,index) => {
        task+=`<tr class="row">
        <td>${index+1}.</th>
        <td>${item}</td>
        <td class="complete"><label><input type="checkbox" > Complete</label></td>
        <td><button class="deletebtn" onclick="deleteTask(${index})">Delete</button></td>
    </tr>`;
    });
    taskList.innerHTML=task;
}

function deleteTask(index){
    let webtask=localStorage.getItem("localtask");
    let taskObj=JSON.parse(webtask);
    taskObj.splice(index,1);
    localStorage.setItem("localtask",JSON.stringify(taskObj));
    showTask();
}

// delete all task
let deleteAll=document.querySelector(".clearAll");
deleteAll.addEventListener("click",function(){
    let webtask=localStorage.getItem("localtask");
    let taskObj=JSON.parse(webtask);
    taskObj=[];
    localStorage.setItem("localtask",JSON.stringify(taskObj));
    showTask();
})

// TAskDone