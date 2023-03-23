console.log('calcular orçamento');

// Manipulação do DOM
var inputQtd = document.querySelector('#qtd');
inputQtd.addEventListener("change", atualizarOrcamento);

document.querySelector('#JS').addEventListener("change", atualizarOrcamento);

document.querySelector('#layout_sim').addEventListener("change", atualizarOrcamento);


function atualizarOrcamento(){
    let qtd = inputQtd.value;
    let preco = qtd * 100;
    let output = document.querySelector('#secao-orcamento form output');

    let JS = document.querySelector('#JS').checked;
    if(JS) preco *= 1.1;

    let layout = document.querySelector('layout_sim').checked;
    if(layout) preco *= 1 + (qtd * .1);

    console.log(JS);
    output.innerHTML = "R$ " + preco.toFixed(2);

}

// qtde paginas * 100
// 10% se tiver JS
// 10% por página de layout
// prazo +20% por semana

