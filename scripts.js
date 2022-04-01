function escolherprato (nome) {
    let clicado = nome.querySelector(".ativo");
    let icon1= nome.querySelector(".icone") 
    const pratos = document.querySelectorAll(".pratos .container_comida");
    pratos.forEach(prato => {
        if(prato.classList.contains("ativo"))
        {
        prato.classList.remove("ativo");
        prato.querySelector(".icone").innerHTML = "";
        }
        
    });
    if (clicado==nome){
        clicado.classList.remove("ativo")
        icon1.style.display="none"
    }
 else{   if (clicado !== null){ 
         clicado.classList.remove("ativo")
         icon1.style.display="none"
         }
        nome.classList.add("ativo")
        icon1.style.display="initial"
    }
    /*
    let itemescondido = document.querySelector(".relativo");
    if (itemescondido==nome){
        itemescondido.classList.remove("relativo")
    }
 else{   if (itemescondido !== null){ 
         itemescondido.classList.remove("relativo")
         }
        nome.classList.add("relativo")
    }
    */
}
function escolherbebida (nome) {
    let clicado = document.querySelector(".escolhido_bebida");
    if (clicado==nome){
        clicado.classList.remove("escolhido_bebida")
    }
  
 else{   if (clicado !== null){ 
         clicado.classList.remove("escolhido_bebida")
         }
        nome.classList.add("escolhido_bebida")
    }
}
function escolhersobremesa (nome) {
    let clicado = document.querySelector(".escolhido_sobremesa");
    if (clicado==nome){
        clicado.classList.remove("escolhido_sobremesa")
    }
  
 else{   if (clicado !== null){ 
         clicado.classList.remove("escolhido_sobremesa")
         }
        nome.classList.add("escolhido_sobremesa")
   
    }
} 
/*      document.getElementById("carlos").style.display = "initial"; */