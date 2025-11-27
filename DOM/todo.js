let todo=[];

function newTask(){
    const input=document.getElementById("myInput");
    const task=input.value.trim();
        if(task!==""){
        todo.push(task);
        input.value="";
        alert("Task Inserted Successfully");
        console.log(task)
        }

}
