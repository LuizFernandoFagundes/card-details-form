const nomeCartao = document.querySelector('.nomecartao');
const campoNome = document.querySelector('#campoNome');

const numeroCartao = document.querySelector('.numerocartao');
const campoNumero = document.querySelector('#camponumero');

const dataCartao= document.querySelector('.datacartao');
const campomes = document.querySelector('#campomes');
const campoano = document.querySelector('#campoano');


const codigoSeguranca = document.querySelector('.codigoseguranca');
const campocvc = document.querySelector('#campocvc');

const botao = document.querySelector('.botao');

const form = document.querySelector('form');
const msnconfirmacao = document.querySelector('.mensagemconfirmacao');

const erro = document.querySelectorAll('.erro');
const inputs = document.querySelectorAll('.inputs');



campoNome.addEventListener('keyup', function(){
    
        if(campoNome.value != "")
        {
            nomeCartao.innerHTML = campoNome.value;
        }
        else
        {
            nomeCartao.innerHTML="Luiz F S Fagundes";
        }
        
    
});

campoNumero.addEventListener('keyup', function(){
    
    if(campoNumero.value != ""){
    numeroCartao.innerHTML=campoNumero.value.substring(0,4)+" "+campoNumero.value.substring(4,8)+" "+campoNumero.value.substring(8,12)+" "+campoNumero.value.substring(12,16);
    }
    else{
        numeroCartao.innerHTML="0000 0000 0000 0000";
    }
});

campoano.addEventListener('keyup', function(){
    
    if(campomes.value != "" && campoano.value != "")
    {
    dataCartao.innerHTML=`${campomes.value}/${campoano.value}`;
    }
    else{
        dataCartao.innerHTML="00/00";
    
    }
});


campocvc.addEventListener('keyup', function(){
    
    if(campocvc.value != "")
    {
    codigoSeguranca.innerHTML=campocvc.value;
    }
    else{
        codigoSeguranca.innerHTML="000";
    }
});




botao.addEventListener('click', function(e) {
    for(var i=0; i<inputs.length-1; i++){
        if(inputs[i].value ===""){
            erro[i].classList.remove('hidden');
            e.preventDefault();
        }
        else{
            erro[i].classList.add('hidden');
        }

    }
    
    if((inputs[0].value !=="") && (inputs[1].value !=="") && (inputs[2].value !=="") && (inputs[3].value !=="") && (inputs[4].value !=="") && (botao.value != "Continue") ){
        msnconfirmacao.classList.remove('hidden');
        form.classList.add('hidden');
        botao.value="Continue";
        
         
    }

    else
    {
        msnconfirmacao.classList.add('hidden');
        form.classList.remove('hidden');
        botao.value="Confirm";
        limpaCampos();
    }
  
});







function limpaCampos()
{
    nomeCartao.innerHTML="Luiz F S Fagundes";
    campoNome.innerHTML="";
    
    numeroCartao.innerHTML="0000 0000 0000 0000";
    campoNumero.innerHTML="";
    
    dataCartao.innerHTML="00/00";
    campomes.innerHTML=""; 
    campoano.innerHTML="";     
    
    codigoSeguranca.innerHTML="000";
    campocvc.innerHTML="";
    inputs.forEach((input) => {
        input.value="";
    }); 
}


