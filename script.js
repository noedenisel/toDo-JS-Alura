const btn = document.querySelector("[data-form-btn]")

console.log(btn)

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
    console.log(task);
    const content = `   <div>
                            <i class="far fa-check-square icon"></i>
                            <span class="task">${value}</span>
                        </div>
                        <i class="fas fa-trash-alt trashIcon icon"></i>`
    task.innerHTML = content
    list.appendChild(task)
    console.log(content);
    input.value = ""

}

//? tenemos el  btn y queremos un listener para cuando el usuario haga click

btn.addEventListener("click" , cerateTask )
