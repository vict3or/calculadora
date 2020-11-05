var tel = document.getElementById("tela")

function igual(telaa){
  var telaa = tel.value
  if(telaa.includes('/')){
    var sinal = telaa.indexOf('/' )
    telaa2 = telaa.slice(sinal+1, telaa.length)
    telaa1 = telaa.slice(0, sinal)
    tel.value = dividir(telaa1, telaa2)
  }else if(telaa.includes('*')){
    var sinal2 = telaa.indexOf('*' )
    telaa2 = telaa.slice(sinal2+1, telaa.length)
    telaa1 = telaa.slice(0, sinal2)
    tel.value = multiplicar(telaa1, telaa2)
  }else if(telaa.includes('+')){
    var sinal3 = telaa.indexOf('+' )
    telaa2 = telaa.slice(sinal3+1, telaa.length)
    telaa1 = telaa.slice(0, sinal3)
    tel.value = somar(parseFloat(telaa1), parseFloat(telaa2))
  }else{
    var sinal4 = telaa.indexOf('-' )
    telaa2 = telaa.slice(sinal4+1, telaa.length)
    telaa1 = telaa.slice(0, sinal4)
    tel.value = subtrair(telaa1, telaa2)
  }
}


function inserir(num){
  tel.value =tel.value+num
}

function deletar() {
  
  tel.value = tel.value.slice(0, -1);
}

function limpartela(){
    tel.value = ''
}

function dividir(a,b){

  return(a / b)
}
  
  function multiplicar(a,b){

    return(a * b)
}
    
function somar(a,b){

  return(a + b)
}

function subtrair(a,b){

  return(a - b)
}