function contagem(){
    let voltasValue = Number(document.querySelector("#voltas").value);
    for(let i = 0; i <= voltasValue; i++){
        console.log(i);
    }

    console.log("Teste 1")

}


function tabuada(){
    let numeroValue = Number(document.querySelector("#numero").value);

    for(let i = 0; i <= 10; i++){
        console.log(`${numeroValue} x ${i} = ${numeroValue * i}`);
    }
}


function soma(){
    let x = 1 // 2 // 3
    let y = 0 // 1 // 3

    while (x <= 100)  {
    
        y = x + y    

        x++
    }

    alert(y)
}


function enviar(){
    let numeroValue = document.querySelector('#valor1').value;
    let valor = Number(numeroValue)

    for(let num = 1; num <= valor; num++) {

        if(num % 2 == 0) {
            console.log(num)
        }
    }
    
}

function contagem(){
    let numeroValue = document.querySelector(`#contador`).value;
    for (let i = 10; i >= 0; i--)
        console.log(i);

}

function imprimir(){   
    let nomesValue = document.querySelector(`#nomes`).value;
    const nomes = ["Ana","Carlos","Beatriz","Mateus"];
    for (let i = 0; i < nomes.length; i++){
        console.log(nomes[i]);
    }

}


function exibirnumerosimpares(){   
    let numerosValue = document.querySelector(`#numeros`).value;    
    for (let i = 1; i <=30; i++)
    console.log(i);
        
    

}


function calcularfatorial(){
    let nomesValue = document.querySelector("calcularfatorial").value;
    let fatorial = 1;
    for (let i = 1; i <= 5; i++)
        fatorial *=i;
    console.log(i);

    }
