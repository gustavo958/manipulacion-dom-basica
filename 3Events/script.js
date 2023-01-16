const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

function btnOnClick()
{
    x = parseInt(input1.value);
    y = parseInt(input2.value);
    z = x + y;
    console.log(z);

    pResult.innerText = "Resultado: " + z;
}