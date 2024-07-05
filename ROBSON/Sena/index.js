function Sena(){
    let result = document.getElementById('result');
    let resultAcertos = document.getElementById('acertos');
    result.innerHTML = "";
    resultAcertos.innerHTML = "";

    // Matriz para armazenar os números sorteados
    let valores = [];

    // Gerar os números aleatórios únicos para cada linha (10 linhas, 6 colunas)
    for(let i = 0; i < 10; i++){
        valores[i] = []; // Inicializa cada linha como um array vazio
        let j = 0;
        while(j < 6){
            let RandNum = (Math.floor(Math.random()*60)+1);
            if(!valores[i].includes(RandNum)){
                valores[i].push(RandNum);
                j++;
            }
        }
    }

    MostraValores(valores);
}

function MostraValores(valores){
    let result = document.getElementById('result');
    let aposta = document.getElementById("aposta").value;
    let apostas = aposta.split('|');
    let resultAcertos = document.getElementById('acertos');
    let acertados = 0;

    // Limpar tabela antes de adicionar novos valores
    result.innerHTML = "";
    resultAcertos.innerHTML = "";

    // Iterar sobre cada linha da matriz
    for(let i = 0; i < 10; i++){
        let tr = document.createElement('tr');
        tr.setAttribute('id', "tr"+i);
        
        // Iterar sobre cada número na linha atual
        for(let j = 0; j < 6; j++){
            let td = document.createElement('td');
            td.innerHTML = "||  " + valores[i][j] + "  ||";
            tr.appendChild(td);

            // Verificar se o número está presente nas apostas
            if(apostas.includes(valores[i][j].toString())){
                console.log("Parabéns, você acertou o número da sorte! " + apostas);
                acertados++;
            } else {
                console.log("Não foi dessa vez, tente novamente!");
            }
        }
        result.appendChild(tr);
        resultAcertos.innerHTML += " " + acertados + " ";
    }
    
    resultAcertos.innerHTML += " " + acertados + " ";
    document.getElementById("aposta").value = "";
}
