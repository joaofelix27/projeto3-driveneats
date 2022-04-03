let valorAtual=0
let prato=""
let bebida=""
let sobremesa=""
let precofinal=0

function escolherprato(nome) {
  let clicado = document.querySelector(".ativo1");
  let icone = nome.querySelector(".icone");
  const pratos = document.querySelectorAll(".pratos .container_comida");
  let precoparcial=0
  if(clicado==nome) {
        precoparcial=document.querySelector(".ativo1").querySelector(".preço")
        precoparcial=Number(precoparcial.innerHTML.replace(",",".").replace("R$"," "))
        precofinal= precofinal - precoparcial
        clicado.classList.remove("ativo1")
        icone.innerHTML = "";
        valorAtual=valorAtual-1
  } else {
                pratos.forEach((prato) => {
                    if (prato.classList.contains("ativo1")) {
                    precoparcial=document.querySelector(".ativo1").querySelector(".preço")
                     precoparcial=Number(precoparcial.innerHTML.replace(",",".").replace("R$"," "))
                     precofinal= precofinal - precoparcial
                    prato.classList.remove("ativo1");
                    valorAtual=valorAtual-1
                     prato.querySelector(".icone").innerHTML = ""
                    }
                    
                });
                    nome.classList.add("ativo1");
                    icone.innerHTML = '<ion-icon  name="checkmark-circle"></ion-icon>';
                    valorAtual=valorAtual+1
                    prato = nome.querySelector(".nome_comida").innerText;
                    precoparcial=document.querySelector(".ativo1").querySelector(".preço")
                    precoparcial=Number(precoparcial.innerHTML.replace(",",".").replace("R$"," "))
                    precofinal+= Number(precoparcial)
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
    let clicado = document.querySelector(".ativo2");
    let icone = nome.querySelector(".icone");
    const bebidas = document.querySelectorAll(".bebidas .container_comida");
    let precoparcial=0
    if(clicado==nome) {
        precoparcial=document.querySelector(".ativo2").querySelector(".preço")
        precoparcial=Number(precoparcial.innerHTML.replace(",",".").replace("R$"," "))
        precofinal= precofinal - precoparcial
        clicado.classList.remove("ativo2")
        icone.innerHTML = "";
        valorAtual=valorAtual-1
    } else {
                  bebidas.forEach((prato) => {
                      if (prato.classList.contains("ativo2")) {
                        precoparcial=document.querySelector(".ativo2").querySelector(".preço")
                     precoparcial=Number(precoparcial.innerHTML.replace(",",".").replace("R$"," "))
                     precofinal= precofinal - precoparcial
                    prato.classList.remove("ativo2");
                    valorAtual=valorAtual-1
                     prato.querySelector(".icone").innerHTML = ""
                      }
                      
                  });
                  nome.classList.add("ativo2");
                  icone.innerHTML = '<ion-icon  name="checkmark-circle"></ion-icon>';
                  valorAtual=valorAtual+1
                  bebida = nome.querySelector(".nome_comida").innerText;
                  precoparcial=document.querySelector(".ativo2").querySelector(".preço")
                  precoparcial=Number(precoparcial.innerHTML.replace(",",".").replace("R$"," "))
                  precofinal+= Number(precoparcial)
                      
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
    let clicado = document.querySelector(".ativo3");
    let icone = nome.querySelector(".icone");
    const sobremesas = document.querySelectorAll(".sobremesas .container_comida");
    if(clicado==nome) {
        precoparcial=document.querySelector(".ativo3").querySelector(".preço")
        precoparcial=Number(precoparcial.innerHTML.replace(",",".").replace("R$"," "))
        precofinal= precofinal - precoparcial
        clicado.classList.remove("ativo3")
        icone.innerHTML = "";
        valorAtual=valorAtual-1
    } else {
                  sobremesas.forEach((prato) => {
                      if (prato.classList.contains("ativo3")) {
                        precoparcial=document.querySelector(".ativo3").querySelector(".preço")
                        precoparcial=Number(precoparcial.innerHTML.replace(",",".").replace("R$"," "))
                        precofinal= precofinal - precoparcial
                       prato.classList.remove("ativo3");
                       valorAtual=valorAtual-1
                        prato.querySelector(".icone").innerHTML = ""
                      }
                  });
                  nome.classList.add("ativo3");
                  icone.innerHTML = '<ion-icon  name="checkmark-circle"></ion-icon>';
                  valorAtual=valorAtual+1
                  sobremesa = nome.querySelector(".nome_comida").innerText;
                  precoparcial=document.querySelector(".ativo3").querySelector(".preço")
                  precoparcial=Number(precoparcial.innerHTML.replace(",",".").replace("R$"," "))
                  precofinal+= Number(precoparcial)
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
    let stewart= document.querySelector(".inferior_cinza");
        let stewart1= document.querySelector(".inferior_verde");
    if (valorAtual ==3) {
        stewart.style.display="none"
        stewart1.style.display="flex"
    } else{
        stewart.style.display="flex"
        stewart1.style.display="none"
    }
  }
  function fecharpedido( ) {
      let  mensagem
      let nomex= prompt ("Qual é o seu nome?")
      let endereço = prompt ("Qual é o seu endereço?")
      precofinal= (Math.round(precofinal * 100) / 100).toFixed(2);
      mensagem =   `Olá, gostaria de fazer o pedido: \n - Prato: ${prato} \n - Bebida: ${bebida} \n - Sobremesa: ${sobremesa} \n Total: R$ ${precofinal} \n \n Nome: ${nomex} \n Endereço: ${endereço}`
      let mensagemenconded = encodeURIComponent(mensagem);
      alert (mensagem)
      window.open (`https://wa.me/+5583991005321?text=${mensagemenconded}`,'_blank');
  }