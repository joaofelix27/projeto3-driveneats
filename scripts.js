let valorAtual=0
let prato=""
let bebida=""
let sobremesa=""
let precofinal=0
let precoparcial1=0
let precoparcial2=0
let precoparcial3=0

function escolherprato(nome) {
  let clicado = document.querySelector(".ativo1");
  let icone = nome.querySelector(".icone");
  const pratos = document.querySelectorAll(".pratos .container_comida");
  if(clicado==nome) {
        precoparcial1=document.querySelector(".ativo1").querySelector(".preço")
        precoparcial1=Number(precoparcial1.innerHTML.replace(",",".").replace("R$"," "))
        precofinal= precofinal - precoparcial1
        clicado.classList.remove("ativo1")
        icone.innerHTML = "";
        valorAtual=valorAtual-1
  } else {
                pratos.forEach((prato) => {
                    if (prato.classList.contains("ativo1")) {
                    precoparcial1=document.querySelector(".ativo1").querySelector(".preço")
                     precoparcial1=Number(precoparcial1.innerHTML.replace(",",".").replace("R$"," "))
                     precofinal= precofinal - precoparcial1
                    prato.classList.remove("ativo1");
                    valorAtual=valorAtual-1
                     prato.querySelector(".icone").innerHTML = ""
                    }
                    
                });
                    nome.classList.add("ativo1");
                    icone.innerHTML = '<ion-icon  name="checkmark-circle"></ion-icon>';
                    valorAtual=valorAtual+1
                    prato = nome.querySelector(".nome_comida").innerText;
                    precoparcial1=document.querySelector(".ativo1").querySelector(".preço")
                    precoparcial1=Number(precoparcial1.innerHTML.replace(",",".").replace("R$"," "))
                    precofinal+= Number(precoparcial1)
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
    if(clicado==nome) {
        precoparcial2=document.querySelector(".ativo2").querySelector(".preço")
        precoparcial2=Number(precoparcial2.innerHTML.replace(",",".").replace("R$"," "))
        precofinal= precofinal - precoparcial2
        clicado.classList.remove("ativo2")
        icone.innerHTML = "";
        valorAtual=valorAtual-1
    } else {
                  bebidas.forEach((prato) => {
                      if (prato.classList.contains("ativo2")) {
                        precoparcial2=document.querySelector(".ativo2").querySelector(".preço")
                     precoparcial2=Number(precoparcial2.innerHTML.replace(",",".").replace("R$"," "))
                     precofinal= precofinal - precoparcial2
                    prato.classList.remove("ativo2");
                    valorAtual=valorAtual-1
                     prato.querySelector(".icone").innerHTML = ""
                      }
                      
                  });
                  nome.classList.add("ativo2");
                  icone.innerHTML = '<ion-icon  name="checkmark-circle"></ion-icon>';
                  valorAtual=valorAtual+1
                  bebida = nome.querySelector(".nome_comida").innerText;
                  precoparcial2=document.querySelector(".ativo2").querySelector(".preço")
                  precoparcial2=Number(precoparcial2.innerHTML.replace(",",".").replace("R$"," "))
                  precofinal+= Number(precoparcial2)
                      
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
        precoparcial3=document.querySelector(".ativo3").querySelector(".preço")
        precoparcial3=Number(precoparcial3.innerHTML.replace(",",".").replace("R$"," "))
        precofinal= precofinal - precoparcial3
        clicado.classList.remove("ativo3")
        icone.innerHTML = "";
        valorAtual=valorAtual-1
    } else {
                  sobremesas.forEach((prato) => {
                      if (prato.classList.contains("ativo3")) {
                        precoparcial3=document.querySelector(".ativo3").querySelector(".preço")
                        precoparcial3=Number(precoparcial3.innerHTML.replace(",",".").replace("R$"," "))
                        precofinal= precofinal - precoparcial3
                       prato.classList.remove("ativo3");
                       valorAtual=valorAtual-1
                        prato.querySelector(".icone").innerHTML = ""
                      }
                  });
                  nome.classList.add("ativo3");
                  icone.innerHTML = '<ion-icon  name="checkmark-circle"></ion-icon>';
                  valorAtual=valorAtual+1
                  sobremesa = nome.querySelector(".nome_comida").innerText;
                  precoparcial3=document.querySelector(".ativo3").querySelector(".preço")
                  precoparcial3=Number(precoparcial3.innerHTML.replace(",",".").replace("R$"," "))
                  precofinal+= Number(precoparcial3)
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
      mensagem =   `Olá, gostaria de fazer o pedido: \n - Prato: ${prato} \n - Bebida: ${bebida} \n - Sobremesa: ${sobremesa} \n Total: R$ ${precofinal} \n \n Nome: ${nomex} \n Endereço: ${endereço}`
      let mensagemenconded = encodeURIComponent(mensagem);
      alert (mensagem)
      window.open (`https://wa.me/+5583991005321?text=${mensagemenconded}`,'_blank');
  }
  function confirmarpedido( ) {
   const confirmar_pedido= document.querySelector(".container_confirmar")
   confirmar_pedido.style.display="flex"
   const pratox = document.querySelector('.prato_ok')
   const preçoprato = document.querySelector('.preço_prato_ok')
   pratox.innerHTML= prato
   preçoprato.innerHTML=(Math.round(precoparcial1 * 100) / 100).toFixed(2).replace(".",",")
   const bebidax = document.querySelector('.bebida_ok')
   const preçobebida = document.querySelector('.preço_bebida_ok')
   preçobebida.innerHTML=(Math.round(precoparcial2 * 100) / 100).toFixed(2).replace(".",",")
   bebidax.innerHTML= bebida
   const sobremesax = document.querySelector('.sobremesa_ok')
   const preçosobremesa = document.querySelector('.preço_sobremesa_ok')
   preçosobremesa.innerHTML=(Math.round(precoparcial3 * 100) / 100).toFixed(2).replace(".",",")
   sobremesax.innerHTML= sobremesa
   const preçototal = document.querySelector('.preço_total_ok')
   precofinal= ((Math.round(precofinal * 100) / 100).toFixed(2)).replace(".",",")
   if ( isNaN(precofinal)) {
       precofinal = (precoparcial1+precoparcial2+precoparcial3)
       precofinal= ((Math.round(precofinal * 100) / 100).toFixed(2)).replace(".",",")
   }
   preçototal.innerHTML= `R$ ${precofinal}`
    

   
}
function cancelar( ) {
    const confirmar_pedido= document.querySelector(".container_confirmar")
    confirmar_pedido.style.display="none"
 }