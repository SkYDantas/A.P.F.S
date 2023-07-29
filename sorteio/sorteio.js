//let min = 0;
//let max = 100;
//console.log(Math.floor(Math.random()*(max - min + 1)));

function realizarSorteio(){
    let numerosSorteados =[];

    while(numerosSorteados.length < 10){
        let numeroAleatorio = Math.floor(Math.random()* 100) +1

        if(!numerosSorteados.includes(numeroAleatorio)){
            numerosSorteados.push(numeroAleatorio);
        }
    }
    //exibir numeros na pagina html

    document.getElementById('numerosSorteados').textContent = numerosSorteados.join(',');
}

