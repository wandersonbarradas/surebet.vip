//Fazendo menu aparecer
function menuOpen() {
    if(document.querySelector('aside').classList.contains('menu-off') == false) {
        document.querySelector('aside').classList.remove('menu-on')
        document.querySelector('aside').classList.add('menu-off');
    }else {
        document.querySelector('aside').classList.remove('menu-off')
        document.querySelector('aside').classList.add('menu-on');
    }
};

function botao1() {
    document.querySelector('#tresentradas').classList.remove('selected')
    document.querySelector('#duasentradas').classList.add('selected')
}

function botao2() {
    document.querySelector('#duasentradas').classList.remove('selected')
    document.querySelector('#tresentradas').classList.add('selected')
}

function modal1() {
    botao2() 
    if(document.querySelector('.modal1').classList.contains('abrir') == true) {
        
    }else {
        document.querySelector('.header .subtitle span').innerHTML = '3 Entradas'

        document.querySelector('.modal2').classList.remove('abrir');
        document.querySelector('.modal2').classList.add('fechar');

        document.querySelector('.modal1').classList.remove('fechar');
        document.querySelector('.modal1').classList.add('abrir');
        document.querySelector('aside').classList.remove('menu-on')
        document.querySelector('aside').classList.add('menu-off');
    }
};

function modal2() {
    botao1()

    if(document.querySelector('.modal2').classList.contains('abrir') == true) {

    }else {
        document.querySelector('.header .subtitle span').innerHTML = '2 Entradas'

        document.querySelector('.modal1').classList.remove('abrir');
        document.querySelector('.modal1').classList.add('fechar');

        document.querySelector('.modal2').classList.remove('fechar');
        document.querySelector('.modal2').classList.add('abrir');
        document.querySelector('aside').classList.remove('menu-on')
        document.querySelector('aside').classList.add('menu-off');
    }
}

let valorselected;
let valoecomissao1 = 0;

function casaUm() {
    
    valorselected = document.querySelector('#modal2-casa1').value;
    switch(valorselected) {
        case 'Selecione uma Casa':
            valoecomissao1 = 0;
            break;
        case 'Bet365':
            valoecomissao1 = 0;
            break;
        case 'Nordeste Bola':
            valoecomissao1 = 3;
            break;
        case 'Play Bets':
            valoecomissao1 = 5;
            break;
        case 'TNT':
            valoecomissao1 = 7;
            break;
        case 'Play Vip':
            valoecomissao1 = 10;
            break;
        case 'Bets Bola':
            valoecomissao1 = 10;
            break;
        case '999Bets':
            valoecomissao1 = 10;
            break;
        case '999Vip':
            valoecomissao1 = 15;
            break;
        case 'Porto Bet':
            valoecomissao1 = 20;
            break;
    }
    
    document.querySelector('#modal2-comissao1').innerHTML = valoecomissao1 + '%';
    if (valoecomissao1 == 0) {
        document.querySelector('#modal2-comissao1').style.border = 'solid 1px var(--red-defalt)'
        document.querySelector('#modal2-comissao1').style.color = 'var(--red-defalt)'
    } else {
        document.querySelector('#modal2-comissao1').style.border = 'solid 1px var(--fundo-light)'
        document.querySelector('#modal2-comissao1').style.color = 'var(--color-darck)'
    }
    calculoGeral()
}

let valorselected2;
let valoecomissao2 = 0;

function casaDois() {
    
    valorselected2 = document.querySelector('#modal2-casa2').value;

    switch(valorselected2) {
        case 'Selecione uma Casa':
            valoecomissa2 = 0;
            break;
        case 'Bet365':
            valoecomissao2 = 0;
            break;
        case 'Nordeste Bola':
            valoecomissao2 = 3;
            break;
        case 'Play Bets':
            valoecomissao2 = 5;
            break;
        case 'TNT':
            valoecomissao2 = 7;
            break;
        case 'Play Vip':
            valoecomissao2 = 10;
            break;
        case 'Bets Bola':
            valoecomissao1 = 10;
            break;
        case '999Bets':
            valoecomissao2 = 10;
            break;
        case '999Vip':
            valoecomissao2 = 15;
            break;
        case 'Porto Bet':
            valoecomissao2 = 20.5;
            break;
    }
    
    document.querySelector('#modal2-comissao2').innerHTML = valoecomissao2 + '%';
    if (valoecomissao2 == 0) {
        document.querySelector('#modal2-comissao2').style.border = 'solid 1px var(--red-defalt)'
        document.querySelector('#modal2-comissao2').style.color = 'var(--red-defalt)'
    } else {
        document.querySelector('#modal2-comissao2').style.border = 'solid 1px var(--fundo-light)'
        document.querySelector('#modal2-comissao2').style.color = 'var(--color-darck)'
    }
    calculoGeral()
}

let valorInvestido1 = 0;
let valorInvestido1Transf = 0;
function TransfValorInvestido() {

    valorInvestido1 = document.querySelector('#modal2-valorInvestido1').value;
    valorInvestido1Transf = parseFloat(valorInvestido1)
    calculoGeral()
}

let acharodd1 = 0;
let odd1Transf = 0;
function Transfodd1() {

    acharodd1 = document.querySelector('#modal2-odd1').value;
    odd1Transf = parseFloat(acharodd1)
    calculoGeral()
}

let acharodd2 = 0;
let odd2Transf = 0;
function Transfodd2() {

    acharodd2 = document.querySelector('#modal2-odd2').value;
    odd2Transf = parseFloat(acharodd2)
    calculoGeral()
}

let acharLucroCasa1 = 0;
let valorInvestido2 = 0;
let acharLucroCasa2 = 0;
let totalInvestido = 0;
let lucroLiquido = 0;
let comissaoOperacao1 = 0;
let comissaoOperacao2 = 0;
let comissaoTotal = 0;
let lucroLiquidoComissao = 0;
function calculoGeral() {

    //Calculando o Lucro da Operação 1 modal 2 (Valor Investido da Operação 1 X Odd Da Operação 1 ) e fazendo aparecer na tela
    acharLucroCasa1 = valorInvestido1Transf * odd1Transf;
    if(isNaN(acharLucroCasa1)){
        document.querySelector('#modal2-lucro1').innerHTML = `R$ 0,00`
    }else {
        document.querySelector('#modal2-lucro1').innerHTML = `R$ ${acharLucroCasa1.toFixed(2)}`
        if(acharLucroCasa1 < valorInvestido1Transf) {
            document.querySelector('#modal2-lucro1').style.border = 'solid 1px var(--red-defalt)'
            document.querySelector('#modal2-lucro1').style.color = 'var(--red-defalt)'

        }else {
            document.querySelector('#modal2-lucro1').style.border = 'solid 1px var(--fundo-light)'
            document.querySelector('#modal2-lucro1').style.color = 'var(--color-darck)'
        }
    }
    //Calculando o Valor ivestido da operação 2 modal 2 (Lucro da operação 1 / Pela odd da operação 2) e fazendo aparecer na tela
    valorInvestido2 = acharLucroCasa1 / odd2Transf;
    if(isNaN(valorInvestido2)){
        document.querySelector('#modal2-valorInvestido2').innerHTML = `R$ 0,00`
    }else {
        document.querySelector('#modal2-valorInvestido2').innerHTML = `R$ ${valorInvestido2.toFixed(2)}`
    }
    //acando o lucro da operação 2 (valor investido da operação 2 X odd da operação 2) e fazendo aparecer na tela
    acharLucroCasa2 = valorInvestido2 * odd2Transf;
    if(isNaN(acharLucroCasa2)){
        document.querySelector('#modal2-lucro2').innerHTML = `R$ 0,00`
    }else {
        document.querySelector('#modal2-lucro2').innerHTML = `R$ ${acharLucroCasa2.toFixed(2)}`
        if(acharLucroCasa2 < valorInvestido2) {
            document.querySelector('#modal2-lucro2').style.border = 'solid 1px var(--red-defalt)'
            document.querySelector('#modal2-lucro2').style.color = 'var(--red-defalt)'

        }else {
            document.querySelector('#modal2-lucro2').style.border = 'solid 1px var(--fundo-light)'
            document.querySelector('#modal2-lucro2').style.color = 'var(--color-darck)'
        }
    }

    //calculando o total do valor investido (Valor investido da operação 1 + Valor investido da operação 2) e fazendo aparecer na tela

    totalInvestido = valorInvestido1Transf + valorInvestido2;
    if(isNaN(totalInvestido)){
        document.querySelector('#total-investido').innerHTML = `R$ 0,00`
    }else {
        document.querySelector('#total-investido').innerHTML = `R$ ${totalInvestido.toFixed(2)}`
    }

    //calculando o lucro liquido ( lucro - total Investido) e fazendo aparecer na tela

    lucroLiquido = acharLucroCasa1 - totalInvestido;

    if(isNaN(lucroLiquido)){
        document.querySelector('#lucro-liquido').innerHTML = `R$ 0,00`
    }else {
        document.querySelector('#lucro-liquido').innerHTML = `R$ ${lucroLiquido.toFixed(2)}`
        if(lucroLiquido < 0) {
            document.querySelector('#lucro-liquido').style.color = 'var(--red-defalt)'
            document.querySelector('#lucro-liquido').style.fontWeight = 'bold'

        }else {
            document.querySelector('#lucro-liquido').style.fontWeight = 'normal'
            document.querySelector('#lucro-liquido').style.color = 'var(--color-dark)'
        }
    }

    //calculando comissao total ( comissao casa 1 comissao casa 2) e fazendo aparecer na tela

    comissaoOperacao1 = valoecomissao1 / 100;
    comissaoOperacao2 = valoecomissao2 / 100;

    comissaoTotal = comissaoOperacao1 * valorInvestido1 + comissaoOperacao2 * valorInvestido2
    if(isNaN(comissaoTotal)){
        document.querySelector('#comissao-total').innerHTML = `R$ 0,00`
    }else {
        document.querySelector('#comissao-total').innerHTML = `R$ ${comissaoTotal.toFixed(2)}`
        if(comissaoTotal < 0) {
            document.querySelector('#comissao-total').style.color = 'var(--red-defalt)'
            document.querySelector('#comissao-total').style.fontWeight = 'bold'

        }else {
            document.querySelector('#comissao-total').style.fontWeight = 'normal'
            document.querySelector('#comissao-total').style.color = 'var(--color-dark)'
        }
    }

    //calculando lucro liquido + comissao total ( comissao total + lucro liquido) e fazendo aparecer na tela

    lucroLiquidoComissao = comissaoTotal + lucroLiquido;
    if(isNaN(lucroLiquidoComissao)){
        document.querySelector('#lucro-comissao').innerHTML = `R$ 0,00`
    }else {
        document.querySelector('#lucro-comissao').innerHTML = `R$ ${lucroLiquidoComissao.toFixed(2)}`
        if(lucroLiquidoComissao < 0) {
            document.querySelector('#lucro-comissao').style.color = 'var(--red-defalt)'
            document.querySelector('#lucro-comissao').style.fontWeight = 'bold'

        }else {
            document.querySelector('#lucro-comissao').style.fontWeight = 'normal'
            document.querySelector('#lucro-comissao').style.color = 'var(--color-dark)'
        }
    }



}