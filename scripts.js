let valorAtual=0

function escolherprato(nome) {
  let clicado = document.querySelector(".ativo");
  let icone = nome.querySelector(".icone");
  const pratos = document.querySelectorAll(".pratos .container_comida");
  if(clicado==nome) {
      clicado.classList.remove("ativo")
      icone.innerHTML = "";
      valorAtual=valorAtual-1
  } else {
                pratos.forEach((prato) => {
                    if (prato.classList.contains("ativo")) {
                        
                    prato.classList.remove("ativo");
                    prato.querySelector(".icone").innerHTML = "";
                    }
                });
                    nome.classList.add("ativo");
                    icone.innerHTML = '<ion-icon  name="checkmark-circle"></ion-icon>';
                    prato = "Conteúdo";
                    valorAtual=valorAtual+1
        }
        atualizarValor()
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
function escolherbebida(nome) {
    let clicado = document.querySelector(".ativo");
    let icone = nome.querySelector(".icone");
    const bebidas = document.querySelectorAll(".bebidas .container_comida");
    if(clicado==nome) {
        clicado.classList.remove("ativo")
        icone.innerHTML = "";
        valorAtual=valorAtual-1
    } else {
                  bebidas.forEach((prato) => {
                      if (prato.classList.contains("ativo")) {
                          
                      prato.classList.remove("ativo");
                      prato.querySelector(".icone").innerHTML = "";
                      }
                  });
                      nome.classList.add("ativo");
                      icone.innerHTML = '<ion-icon  name="checkmark-circle"></ion-icon>';
                      prato = "Conteúdo";
                      valorAtual=valorAtual+1
          }
          atualizarValor()
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
  function escolhersobremesa(nome) {
    let clicado = document.querySelector(".ativo");
    let icone = nome.querySelector(".icone");
    const sobremesas = document.querySelectorAll(".sobremesas .container_comida");
    if(clicado==nome) {
        clicado.classList.remove("ativo")
        icone.innerHTML = "";
        valorAtual=valorAtual-1
    } else {
                  sobremesas.forEach((prato) => {
                      if (prato.classList.contains("ativo")) {
                          
                      prato.classList.remove("ativo");
                      prato.querySelector(".icone").innerHTML = "";
                      }
                  });
                      nome.classList.add("ativo");
                      icone.innerHTML = '<ion-icon  name="checkmark-circle"></ion-icon>';
                      prato = "Conteúdo";
                      valorAtual=valorAtual+1
          }
          atualizarValor()
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
/*      document.getElementById("carlos").style.display = "initial"; */
function atualizarValor() {
    if (valorAtual ==3) {
        let stewart= document.querySelector(".inferior_cinza");
        let stewart1= document.querySelector(".inferior_verde");
        stewart.style.display="none"
        stewart1.style.display="initial"
    } 
  }