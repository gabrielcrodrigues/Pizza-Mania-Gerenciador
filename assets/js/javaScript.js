'use strict';

//variáveis de soma e venda
let somaMussarela = 0;
let somaMista = 0;
let somaCalabresa = 0;
let vendaMussarela = 0.00;
let vendaMista = 0.00;
let vendaCalabresa = 0.00;

//variaveis para a intrução do botão html
let btnVendas = document.getElementById('vendas');
let btnEstorno = document.getElementById('estorno');
let btnPlanilha = document.getElementById('export');

//eventos
btnVendas.addEventListener('click',venda,false);
btnEstorno.addEventListener('click',estorno,false);
btnPlanilha.addEventListener('click',planilha,false);

//funções 
function venda(e)
{
    if(document.getElementById('mussarela').checked)
    {
        somaMussarela = somaMussarela + 1;
        vendaMussarela = vendaMussarela + 25.00;
        document.getElementById('qMussarela').innerHTML = somaMussarela;
        document.getElementById('valoresMussarela').innerHTML = vendaMussarela.toFixed(2);
    }else if(document.getElementById('mista').checked)
    {
        somaMista = somaMista + 1;
        vendaMista = vendaMista + 30.00;
        document.getElementById('qMista').innerHTML = somaMista;
        document.getElementById('valoresMista').innerHTML = vendaMista.toFixed(2);
    }else if(document.getElementById('calabresa').checked)
    {
        somaCalabresa = somaCalabresa + 1;
        vendaCalabresa = vendaCalabresa + 20.00;
        document.getElementById('qCalabresa').innerHTML = somaCalabresa;
        document.getElementById('valoresCalabresa').innerHTML = vendaCalabresa.toFixed(2);
    }
}

function estorno(e)
{
    if(document.getElementById('mussarela').checked)
    {
        somaMussarela = somaMussarela - 1;
        vendaMussarela = vendaMussarela - 25.00;
        if(somaMussarela < 0)
        {
            somaMussarela = 0;
            vendaMussarela = 0.00;
        }
        document.getElementById('qMussarela').innerHTML = somaMussarela;
        document.getElementById('valoresMussarela').innerHTML = vendaMussarela.toFixed(2);
    }else if(document.getElementById('mista').checked)
    {
        somaMista = somaMista - 1;
        vendaMista = vendaMista - 30.00;
        if(somaMista < 0)
        {
            somaMista = 0;
            vendaMista = 0.00;
        }
        document.getElementById('qMista').innerHTML = somaMista;
        document.getElementById('valoresMista').innerHTML = vendaMista.toFixed(2);
    }else if(document.getElementById('calabresa').checked)
    {
        somaCalabresa = somaCalabresa - 1;
        vendaCalabresa = vendaCalabresa - 20.00;
        if(somaCalabresa < 0)
        {
            somaCalabresa = 0;
            vendaCalabresa = 0.00;
        }
        document.getElementById('qCalabresa').innerHTML = somaCalabresa;
        document.getElementById('valoresCalabresa').innerHTML = vendaCalabresa.toFixed(2);
    }
}

function planilha(e)
{
    TableToExcel.convert(document.getElementById('table'))
}
