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

    console.log("Teste 2")
}