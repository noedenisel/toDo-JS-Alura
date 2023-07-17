// import checkComplete from "./components/checkComplete.js"
// import deleteIcon from "./components/deleteIcon.js"    

(()=> {
    const btn = document.querySelector("[data-form-btn]")

    const cerateTask = (evento) => {
    //?                evento    reaccion
         
    //console.log(evento);
        
        evento.preventDefault()
        //console.log("crear tarea");
        
        const input = document.querySelector("[data-form-input]")
        const value = input.value  
        //console.log(input.value);  
        
        const list = document.querySelector("[data-list]")
        const task = document.createElement("li")
        task.classList.add("card")
        input.value = ""
        
        //? backsticks
        //console.log(task);
        //console.log(checkComplete());
        
        //const content =` 
            // <div>   
            // ${checkComplete()}
            // <span class="task">${value}</span>               
            // </div>   
            //<i class="fas fa-trash-alt trashIcon icon"></i>`
            
        const taskContent = document.createElement("div")
    
        const titleTask = document.createElement("span")  
        titleTask.classList.add("task")
        titleTask.innerText =  value
        taskContent.appendChild(checkComplete()) 
        taskContent.appendChild(titleTask)
        //task.innerHTML = content
    
        task.appendChild(taskContent)
        task.appendChild(deleteIcon())
        list.appendChild(task)
        
        //console.log(content);
        
        //input.value = ""
    }
    
    //console.log(btn);
    //? tenemos el  btn y queremos un listener para cuando el usuario haga click
    
    btn.addEventListener("click" , cerateTask )
    
    const checkComplete = () => {
        const i = document.createElement("i")
        i.classList.add("far", "fa-check-square", "icon" )
        i.addEventListener("click", completeTask)
        return i
    }
    
    const completeTask = ( event ) => {
        //console.log(event.target);
        
        const element = event.target
        // element.classList.add("fas")
        // element.classList.add("completeIcon")
        // element.classList.remove("far")
        element.classList.toggle("fas")
        element.classList.toggle("completeIcon")
        element.classList.toggle("far")
    }         
    
    const deleteIcon = () => {
        // `<i class="fas fa-trash-alt trashIcon icon"></i> `
        const i = document.createElement("i")
        i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon")
        i.addEventListener("click", deleteTask )
        return i
       
    }
    
    const deleteTask = (event) => {
        // console.log("Eliminar tarea");
        // console.log(event.target.parentElement);
        const parent = event.target.parentElement
        parent.remove()
    }
    
    
})()
    