const btn = document.querySelector("[data-form-btn]")

const cerateTask = (evento) => 
//?                evento    reaccion
 { 
    //console.log(evento);
    evento.preventDefault()
    console.log("crear tarea");
    
    const input = document.querySelector("[data-form-input]")
    const value = input.value  
    console.log(input.value);  
    
    const list = document.querySelector("[data-list]")
    
    const task = document.createElement("li")
    task.classList.add("card")

    //console.log(task);
    console.log(checkComplete());

    const taskContent = document.createElement("div")
    taskContent.appendChild(checkComplete())
    

      //? <span class="task">${value}</span>      
      const titleTask = document.createElement("span")
      titleTask.classList.add("task")
      titleTask.innerText =  value
      taskContent.appendChild(titleTask)
    
      const content = 
        // <div>   
        // ${checkComplete()}
        // <span class="task">${value}</span>               
        // </div>
        `
        <i class="fas fa-trash-alt trashIcon icon"></i>
        `
    
        //task.innerHTML = content
    task.appendChild(taskContent)
    list.appendChild(task)
    
    console.log(content);
    
    //input.value = ""
}

console.log(btn);
//? tenemos el  btn y queremos un listener para cuando el usuario haga click

btn.addEventListener("click" , cerateTask )


//<i class="far fa-check-square icon"></i>
                            
const checkComplete = () => {
    const i = document.createElement("i")
    i.classList.add("far", "fa-check-square", "icon" )
    i.addEventListener("click", completeTask)
    return i
}

const completeTask = ( event ) => {
    console.log(event.target);
    const element = event.target
    // element.classList.add("fas")
    // element.classList.add("completeIcon")
    // element.classList.remove("far")
    element.classList.toggle("fas")
    element.classList.toggle("completeIcon")
    element.classList.toggle("far")
}
