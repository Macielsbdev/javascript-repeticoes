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


function exibir(){
    let numeroValue = Number(document.querySelector("#numero").value);
    console.log(`${exibir}`);


}
