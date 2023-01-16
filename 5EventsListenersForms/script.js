const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const btn2 = document.querySelector('#btnSubmit');
const pResult = document.querySelector('#result');

form.addEventListener('submit', enviar);
btn.addEventListener('click', sumarInputValues);

function sumarInputValues(event){
    event.preventDefault();
    x = parseInt(input1.value);
    y = parseInt(input2.value);
    z = x + y;
    console.log(z);
    console.log({event});
    
    pResult.innerText = "Resultado: " + z;
    
}

function enviar()
{
    console.log("fue enviado, no deberia verse")
}

/*btn.addEventListener('mouseover', alerta);

function alerta(e)
{
    e.preventDefault();
    alert("Virus")
}*/