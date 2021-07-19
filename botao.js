  function validar(){


    let email =     document.getElementById("email")
    let botao =     document.getElementById("button")
  
    if (email.value == ""){
      res.innerHTML = ("Digite um email válido")
  }else {
    res.innerHTML = ("Você Ganhou um Cupom extra de 5% :) Aguarde as promoções no seu email");
  
  }
  }