const btn = document.querySelector("[data-form-btn]")

console.log(btn)

const cerateTask = (evento) => 
//?                evento    reaccion
 { 
    //console.log(evento);
    evento.preventDefault()
    console.log("crear tarea");
    const input = document.querySelector("[data-form-input]")
    console.log(input.value);
}

//? tenemos el  btn y queremos un listener para cuando el usuario haga click

btn.addEventListener("click" , cerateTask )
