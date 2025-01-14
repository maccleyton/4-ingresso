let qtdPista = 100;
let qtdSuperior = 200;
let qtdInferior = 400;


function comprar {
    let qtdPista = document.getElementById('qtd-pista').innerHTML;
    let qtdSuperior = document.getElementById('qtd-superior').innerHTML;
    let qtdInferior = document.getElementById('qtd-inferior').innerHTML;

    if (qtdPista > 0) {
        qtdPista--;
        document.getElementById('qtd-pista').innerHTML = qtdPista;
    } else if (qtdSuperior > 0) {
        qtdSuperior--;
        document.getElementById('qtd-superior').innerHTML = qtdSuperior;
    } else if (qtdInferior > 0) {
        qtdInferior--;
        document.getElementById('qtd-inferior').innerHTML = qtdInferior;
    } else {
        alert('Ingressos esgotados');
    }
}