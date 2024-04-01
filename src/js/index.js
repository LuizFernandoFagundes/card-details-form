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
let estadobotao=true;


campoNome.addEventListener('keyup', function(){
    
        if(campoNome.value != "")
        {
            nomeCartao.innerHTML = campoNome.value;
            erro[0].classList.add('hidden');
            inputs[0].style.border='1px solid var(--Light-grayish-violet)';
        }
        else
        {
            nomeCartao.innerHTML="Luiz F S Fagundes";
            erro[0].classList.remove('hidden');
        }
        
    
});

campoNumero.addEventListener('keyup', function(){
    
    if(campoNumero.value != ""){
    numeroCartao.innerHTML=campoNumero.value.substring(0,4)+" "+campoNumero.value.substring(4,8)+" "+campoNumero.value.substring(8,12)+" "+campoNumero.value.substring(12,16);
    erro[1].classList.add('hidden');
    inputs[1].style.border='1px solid var(--Light-grayish-violet)';
    }
    else{
        numeroCartao.innerHTML="0000 0000 0000 0000";
    }
});

campoano.addEventListener('keyup', function(){
    
    if(campomes.value != "" && campoano.value != "")
    {
    dataCartao.innerHTML=`${campomes.value}/${campoano.value}`;
    erro[2].classList.add('hidden');
    inputs[2].style.border='1px solid var(--Light-grayish-violet)';
    inputs[3].style.border='1px solid var(--Light-grayish-violet)';
    }
    else{
        dataCartao.innerHTML="00/00";
    
    }
});


campocvc.addEventListener('keyup', function(){
    
    if(campocvc.value != "")
    {
    codigoSeguranca.innerHTML=campocvc.value;
    erro[4].classList.add('hidden');
    inputs[4].style.border='1px solid var(--Light-grayish-violet)';
    }
    else{
        codigoSeguranca.innerHTML="000";
    }
});




botao.addEventListener('click', function(e) {
    
    inputs.forEach((input,index) => {
        if(input.value ===""){
            
            e.preventDefault();
            erro[index].classList.remove('hidden');
            input.style.border='1px solid red';
        }
        else{
            erro[index].classList.add('hidden');
            
            
        }

       
       
            });


      
switch(estadobotao){
    case false:
        msnconfirmacao.classList.add('hidden');
        form.classList.remove('hidden');
        botao.value="CONFIRM";
        limpaCampos();
        estadobotao=true;
        break;
    case true:
        if((inputs[0].value !=="") && (inputs[1].value !=="") && (inputs[2].value !=="") && (inputs[3].value !=="") && (inputs[4].value !=="") && (botao.value != "CONTINUE") ){
            msnconfirmacao.classList.remove('hidden');
            form.classList.add('hidden');
            botao.value="CONTINUE";
            
            estadobotao=false;
            break;
           
           
            
        }
}
    });


function limpaCampos()
{
    nomeCartao.innerHTML="Luiz F S Fagundes";
    campoNome.value="";
    
    numeroCartao.innerHTML="0000 0000 0000 0000";
    campoNumero.value="";
    
    dataCartao.innerHTML="00/00";
    campomes.value=""; 
    campoano.value="";     
    
    codigoSeguranca.innerHTML="000";
    campocvc.value="";
       
}


