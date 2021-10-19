//variaveis
let $ = (el)=> document.querySelector(el);



//Fazendo menu aparecer
function menuOpen() {
    if($('aside').classList.contains('menu-off') == false) {
        $('aside').classList.remove('menu-on')
        $('aside').classList.add('menu-off');
    }else {
        $('aside').classList.remove('menu-off')
        $('aside').classList.add('menu-on');
    }
};
//Alterando as cores do botão
function botao1() {
    $('#tresentradas').classList.remove('selected')
    $('#duasentradas').classList.add('selected')
}

function botao2() {
    $('#duasentradas').classList.remove('selected')
    $('#tresentradas').classList.add('selected')
}
//abrindo um modal e escondendo o outro
function modal1() {
    botao2() 
    if($('.modal1').classList.contains('abrir') == true) {
        
    }else {
        $('.header .subtitle span').innerHTML = '3 Entradas'

        $('.modal2').classList.remove('abrir');
        $('.modal2').classList.add('fechar');

        $('.modal1').classList.remove('fechar');
        $('.modal1').classList.add('abrir');
        $('aside').classList.remove('menu-on')
        $('aside').classList.add('menu-off');
    };
    limparDados();
    calculoGeralModal1()
};

function modal2() {
    botao1()

    if($('.modal2').classList.contains('abrir') == true) {

    }else {
        $('.header .subtitle span').innerHTML = '2 Entradas'

        $('.modal1').classList.remove('abrir');
        $('.modal1').classList.add('fechar');

        $('.modal2').classList.remove('fechar');
        $('.modal2').classList.add('abrir');
        $('aside').classList.remove('menu-on')
        $('aside').classList.add('menu-off');
    };
    limparDados();
    calculoGeral()
}


//CODIGOS DO MODAL 2 CALCULO COM DUAS ENTRADAS


//Setando as % e fazendo aparecer na tela
let valorselected;
let valoecomissao1 = 0;
function casaUm() {
    
    valorselected = $('#modal2-casa1').value;
    switch(valorselected) {
        case 'Selecione':
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
        case '999Bet':
            valoecomissao1 = 10;
            break;
        case '999Vip':
            valoecomissao1 = 15;
            break;
        case 'Porto Bet':
            valoecomissao1 = 20;
            break;
    }
    
    $('#modal2-comissao1').innerHTML = valoecomissao1 + '%';
    if (valoecomissao1 == 0) {
        $('#modal2-comissao1').style.border = 'solid 1px var(--red-defalt)'
        $('#modal2-comissao1').style.color = 'var(--red-defalt)'
    } else {
        $('#modal2-comissao1').style.border = 'solid 1px var(--fundo-light)'
        $('#modal2-comissao1').style.color = 'var(--color-darck)'
    }
    calculoGeral()
}

let valorselected2;
let valoecomissao2 = 0;

function casaDois() {
    
    valorselected2 = $('#modal2-casa2').value;

    switch(valorselected2) {
        case 'Selecione':
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
            valoecomissao2 = 10;
            break;
        case '999Bet':
            valoecomissao2 = 10;
            break;
        case '999Vip':
            valoecomissao2 = 15;
            break;
        case 'Porto Bet':
            valoecomissao2 = 20;
            break;
    }
    
    $('#modal2-comissao2').innerHTML = valoecomissao2 + '%';
    if (valoecomissao2 == 0) {
        $('#modal2-comissao2').style.border = 'solid 1px var(--red-defalt)'
        $('#modal2-comissao2').style.color = 'var(--red-defalt)'
    } else {
        $('#modal2-comissao2').style.border = 'solid 1px var(--fundo-light)'
        $('#modal2-comissao2').style.color = 'var(--color-darck)'
    }
    calculoGeral()
}
//manipulando o valor investido da 1° operação
let valorInvestido1 = 0;
let valorInvestido1Transf = 0;
function TransfValorInvestido() {

    valorInvestido1 = $('#modal2-valorInvestido1').value;
    valorInvestido1Transf = parseFloat(valorInvestido1)
    calculoGeral()
}
//manipulando a odd da 1° operação
let acharodd1 = 0;
let odd1Transf = 0;
function Transfodd1() {

    acharodd1 = $('#modal2-odd1').value;
    odd1Transf = parseFloat(acharodd1)
    calculoGeral()
}
//manipulando a odd da 2° operação
let acharodd2 = 0;
let odd2Transf = 0;
function Transfodd2() {
    acharodd2 = $('#modal2-odd2').value;
    odd2Transf = parseFloat(acharodd2)
    calculoGeral()
}
//calculos gerais
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
        $('#modal2-lucro1').innerHTML = `R$ 0,00`
    }else {
        $('#modal2-lucro1').innerHTML = `R$ ${acharLucroCasa1.toFixed(2)}`
        if(acharLucroCasa1 < valorInvestido1Transf) {
            $('#modal2-lucro1').style.border = 'solid 1px var(--red-defalt)'
            $('#modal2-lucro1').style.color = 'var(--red-defalt)'

        }else {
            $('#modal2-lucro1').style.border = 'solid 1px var(--fundo-light)'
            $('#modal2-lucro1').style.color = 'var(--color-darck)'
        }
    }
    
    //Calculando o Valor ivestido da operação 2 modal 2 (Lucro da operação 1 / Pela odd da operação 2) e fazendo aparecer na tela
    if(odd2Transf <=0) {
        $('#modal2-valorInvestido2').innerHTML = `R$ 0,00`
    }else {
        valorInvestido2 = acharLucroCasa1 / odd2Transf;
    if(isNaN(valorInvestido2)){
        $('#modal2-valorInvestido2').innerHTML = `R$ 0,00`
    }else {
        $('#modal2-valorInvestido2').innerHTML = `R$ ${valorInvestido2.toFixed(2)}`
    }
    }
    
    
    //Calculando o lucro da operação 2 (valor investido da operação 2 X odd da operação 2) e fazendo aparecer na tela
    acharLucroCasa2 = valorInvestido2 * odd2Transf;
    if(isNaN(acharLucroCasa2)){
        $('#modal2-lucro2').innerHTML = `R$ 0,00`
    }else {
        $('#modal2-lucro2').innerHTML = `R$ ${acharLucroCasa2.toFixed(2)}`
        if(acharLucroCasa2 < valorInvestido2) {
            $('#modal2-lucro2').style.border = 'solid 1px var(--red-defalt)'
            $('#modal2-lucro2').style.color = 'var(--red-defalt)'

        }else {
            $('#modal2-lucro2').style.border = 'solid 1px var(--fundo-light)'
            $('#modal2-lucro2').style.color = 'var(--color-darck)'
        }
    }

    //calculando o total do valor investido (Valor investido da operação 1 + Valor investido da operação 2) e fazendo aparecer na tela

    totalInvestido = valorInvestido1Transf + valorInvestido2;
    if(isNaN(totalInvestido)){
        $('#total-investido').innerHTML = `R$ 0,00`
    }else {
        $('#total-investido').innerHTML = `R$ ${totalInvestido.toFixed(2)}`
    }

    //calculando o lucro liquido ( lucro - total Investido) e fazendo aparecer na tela

    lucroLiquido = acharLucroCasa1 - totalInvestido;

    if(isNaN(lucroLiquido)){
        $('#lucro-liquido').innerHTML = `R$ 0,00`
    }else {
        $('#lucro-liquido').innerHTML = `R$ ${lucroLiquido.toFixed(2)}`
        if(lucroLiquido < 0) {
            $('#lucro-liquido').style.color = 'var(--red-defalt)'
            $('#lucro-liquido').style.fontWeight = 'bold'

        }else {
            $('#lucro-liquido').style.fontWeight = 'normal'
            $('#lucro-liquido').style.color = 'var(--color-dark)'
        }
    }

    //calculando comissao total ( comissao casa 1 comissao casa 2) e fazendo aparecer na tela

    comissaoOperacao1 = valoecomissao1 / 100;
    comissaoOperacao2 = valoecomissao2 / 100;

    comissaoTotal = comissaoOperacao1 * valorInvestido1 + comissaoOperacao2 * valorInvestido2
    if(isNaN(comissaoTotal)){
        $('#comissao-total').innerHTML = `R$ 0,00`
    }else {
        $('#comissao-total').innerHTML = `R$ ${comissaoTotal.toFixed(2)}`
        if(comissaoTotal < 0) {
            $('#comissao-total').style.color = 'var(--red-defalt)'
            $('#comissao-total').style.fontWeight = 'bold'

        }else {
            $('#comissao-total').style.fontWeight = 'normal'
            $('#comissao-total').style.color = 'var(--color-dark)'
        }
    }

    //calculando lucro liquido + comissao total ( comissao total + lucro liquido) e fazendo aparecer na tela

    lucroLiquidoComissao = comissaoTotal + lucroLiquido;
    if(isNaN(lucroLiquidoComissao)){
        $('#lucro-comissao').innerHTML = `R$ 0,00`
    }else {
        $('#lucro-comissao').innerHTML = `R$ ${lucroLiquidoComissao.toFixed(2)}`
        if(lucroLiquidoComissao < 0) {
            $('#lucro-comissao').style.color = 'var(--red-defalt)'
            $('#lucro-comissao').style.fontWeight = 'bold'

        }else {
            $('#lucro-comissao').style.fontWeight = 'normal'
            $('#lucro-comissao').style.color = 'var(--color-dark)'
        }
    }



}

//LIMPANDOS OS RESULTADOS DA TELA

function limparDados() {
    $('#total-investido').innerHTML = 'R$ 0,00'
    $('#lucro-liquido').innerHTML = 'R$ 0,00'
    $('#comissao-total').innerHTML = 'R$ 0,00'
    $('#lucro-comissao').innerHTML = 'R$ 0,00'
    $('#lucro-comissao').style.fontWeight = 'normal'
    $('#lucro-comissao').style.color = 'var(--color-dark)'
    $('#comissao-total').style.fontWeight = 'normal'
    $('#comissao-total').style.color = 'var(--color-dark)'
    $('#lucro-liquido').style.fontWeight = 'normal'
    $('#lucro-liquido').style.color = 'var(--color-dark)'
}








//CODIGOS DO MODAL 1 CALCULO COM TRES ENTRADAS

//Setando as % e fazendo aparecer na tela
let valorSelectedModal1;
let valorComissaoMOdal1 = 0;
function casaUmModal1() {
    
    valorSelectedModal1 = $('#casa1').value;
    switch(valorSelectedModal1) {
        case 'Selecione':
            valorComissaoMOdal1 = 0;
            break;
        case 'Bet365':
            valorComissaoMOdal1 = 0;
            break;
        case 'Nordeste Bola':
            valorComissaoMOdal1 = 3;
            break;
        case 'Play Bets':
            valorComissaoMOdal1 = 5;
            break;
        case 'TNT':
            valorComissaoMOdal1 = 7;
            break;
        case 'Play Vip':
            valorComissaoMOdal1 = 10;
            break;
        case 'Bets Bola':
            valorComissaoMOdal1 = 10;
            break;
        case '999Bets':
            valorComissaoMOdal1 = 10;
            break;
        case '999Vip':
            valorComissaoMOdal1 = 15;
            break;
        case 'Porto Bet':
            valorComissaoMOdal1 = 20;
            break;
    }
    
    $('#comissao1').innerHTML = valorComissaoMOdal1 + '%';
    if (valorComissaoMOdal1 == 0) {
        $('#comissao1').style.border = 'solid 1px var(--red-defalt)'
        $('#comissao1').style.color = 'var(--red-defalt)'
    } else {
        $('#comissao1').style.border = 'solid 1px var(--fundo-light)'
        $('#comissao1').style.color = 'var(--color-darck)'
    }
    calculoGeralModal1()
}



let valorselected2Modal1;
let valoecomissao2Modal1 = 0;
function casaDoisModal1() {
    
    valorselected2Modal1 = $('#casa2').value;

    switch(valorselected2Modal1) {
        case 'Selecione':
            valoecomissao2Modal1 = 0;
            break;
        case 'Bet365':
            valoecomissao2Modal1 = 0;
            break;
        case 'Nordeste Bola':
            valoecomissao2Modal1 = 3;
            break;
        case 'Play Bets':
            valoecomissao2Modal1 = 5;
            break;
        case 'TNT':
            valoecomissao2Modal1 = 7;
            break;
        case 'Play Vip':
            valoecomissao2Modal1 = 10;
            break;
        case 'Bets Bola':
            valoecomissao2Modal1 = 10;
            break;
        case '999Bets':
            valoecomissao2Modal1 = 10;
            break;
        case '999Vip':
            valoecomissao2Modal1 = 15;
            break;
        case 'Porto Bet':
            valoecomissao2Modal1 = 20;
            break;
    }
    
    $('#comissao2').innerHTML = valoecomissao2Modal1 + '%';
    if (valoecomissao2Modal1 == 0) {
        $('#comissao2').style.border = 'solid 1px var(--red-defalt)'
        $('#comissao2').style.color = 'var(--red-defalt)'
    } else {
        $('#comissao2').style.border = 'solid 1px var(--fundo-light)'
        $('#comissao2').style.color = 'var(--color-darck)'
    }
    calculoGeralModal1()
}


let valorselected3Modal1;
let valoecomissao3Modal1 = 0;
function casaTresModal1() {
    
    valorselected3Modal1 = $('#casa3').value;

    switch(valorselected3Modal1) {
        case 'Selecione':
            valoecomissao3Modal1 = 0;
            break;
        case 'Bet365':
            valoecomissao3Modal1 = 0;
            break;
        case 'Nordeste Bola':
            valoecomissao3Modal1 = 3;
            break;
        case 'Play Bets':
            valoecomissao3Modal1 = 5;
            break;
        case 'TNT':
            valoecomissao3Modal1 = 7;
            break;
        case 'Play Vip':
            valoecomissao3Modal1 = 10;
            break;
        case 'Bets Bola':
            valoecomissao3Modal1 = 10;
            break;
        case '999Bets':
            valoecomissao3Modal1 = 10;
            break;
        case '999Vip':
            valoecomissao3Modal1 = 15;
            break;
        case 'Porto Bet':
            valoecomissao3Modal1 = 20;
            break;
    }
    
    $('#comissao3').innerHTML = valoecomissao3Modal1 + '%';
    if (valoecomissao3Modal1 == 0) {
        $('#comissao3').style.border = 'solid 1px var(--red-defalt)'
        $('#comissao3').style.color = 'var(--red-defalt)'
    } else {
        $('#comissao3').style.border = 'solid 1px var(--fundo-light)'
        $('#comissao3').style.color = 'var(--color-darck)'
    }
    calculoGeralModal1()
}

//manipulando o valor investido da 1° operação
let valorInvestido1Modal1 = 0;
let valorInvestido1TransfModal1 = 0;
function TransfValorInvestidoModal1() {

    valorInvestido1Modal1 = $('#valorInvestido1').value;
    valorInvestido1TransfModal1 = parseFloat(valorInvestido1Modal1)

    calculoGeralModal1()
    
}


//manipulando a odd da 1° operação
let acharodd1Modal1 = 0;
let odd1TransfModal1 = 0;
function Transfodd1Modal1() {

    acharodd1Modal1 = $('#odd1').value;
    odd1TransfModal1 = parseFloat(acharodd1Modal1)

    calculoGeralModal1()
}

//manipulando a odd da 2° operação
let acharodd2Modal1 = 0;
let odd2TransfModal1 = 0;
function Transfodd2Modal1() {

    acharodd2Modal1 = $('#odd2').value;
    odd2TransfModal1 = parseFloat(acharodd2Modal1)

    calculoGeralModal1()
}

//manipulando a odd da 3° operação
let acharodd3Modal1 = 0;
let odd3TransfModal1 = 0;
function Transfodd3Modal1() {

    acharodd3Modal1 = $('#odd3').value;
    odd3TransfModal1 = parseFloat(acharodd3Modal1)

    calculoGeralModal1()
}

//calculos gerais
let acharLucroCasa1Modal1 = 0;
let valorInvestido2Modal1 = 0;
let valorInvestido3Modal1 = 0;
let acharLucroCasa2Modal1 = 0;
let acharLucroCasa3Modal1 = 0;
//let lucroLiquido = 0;
let comissaoOperacao3Modal1 = 0;
//let lucroLiquidoComissao = 0;
function calculoGeralModal1() {

    //Calculando o Lucro da Operação 1 modal 1 (Valor Investido da Operação 1 X Odd Da Operação 1 ) e fazendo aparecer na tela
    acharLucroCasa1Modal1 = valorInvestido1TransfModal1 * odd1TransfModal1;
    if(isNaN(acharLucroCasa1Modal1)){
        $('#lucro1').innerHTML = `R$ 0,00`
    }else {
        $('#lucro1').innerHTML = `R$ ${acharLucroCasa1Modal1.toFixed(2)}`
        if(acharLucroCasa1Modal1 < valorInvestido1TransfModal1) {
            $('#lucro1').style.border = 'solid 1px var(--red-defalt)'
            $('#lucro1').style.color = 'var(--red-defalt)'

        }else {
            $('#lucro1').style.border = 'solid 1px var(--fundo-light)'
            $('#lucro1').style.color = 'var(--color-darck)'
        }
    }


    //Calculando o Valor ivestido da operação 2 modal 1 (Lucro da operação 1 / Pela odd da operação 2) e fazendo aparecer na tela
    if(odd2TransfModal1 <=0) {
        $('#valorInvestido2').innerHTML = `R$ 0,00`
    }else {
        valorInvestido2Modal1 = acharLucroCasa1Modal1 / odd2TransfModal1;
    if(isNaN(valorInvestido2Modal1)){
        $('#valorInvestido2').innerHTML = `R$ 0,00`
    }else {
        $('#valorInvestido2').innerHTML = `R$ ${valorInvestido2Modal1.toFixed(2)}`
    }
    }

    //Calculando o lucro da operação 2 modal 1 (valor investido da operação 2 X odd da operação 2) e fazendo aparecer na tela
    acharLucroCasa2Modal1 = valorInvestido2Modal1 * odd2TransfModal1;
    if(isNaN(acharLucroCasa2Modal1)){
        $('#lucro2').innerHTML = `R$ 0,00`
    }else {
        $('#lucro2').innerHTML = `R$ ${acharLucroCasa2Modal1.toFixed(2)}`
        if(acharLucroCasa2Modal1 < valorInvestido2Modal1) {
            $('#lucro2').style.border = 'solid 1px var(--red-defalt)'
            $('#lucro2').style.color = 'var(--red-defalt)'

        }else {
            $('#lucro2').style.border = 'solid 1px var(--fundo-light)'
            $('#lucro2').style.color = 'var(--color-darck)'
        }
    }


     //Calculando o Valor ivestido da operação 3 modal 1 (Lucro da operação 2 / Pela odd da operação 3) e fazendo aparecer na tela
     if(odd3TransfModal1 <=0) {
        $('#valorInvestido3').innerHTML = `R$ 0,00`
    }else {
        valorInvestido3Modal1 = acharLucroCasa2Modal1 / odd3TransfModal1;
    if(isNaN(valorInvestido3Modal1)){
        $('#valorInvestido3').innerHTML = `R$ 0,00`
    }else {
        $('#valorInvestido3').innerHTML = `R$ ${valorInvestido3Modal1.toFixed(2)}`
    }
    }
    

    //Calculando o lucro da operação 2 modal 1 (valor investido da operação 2 X odd da operação 2) e fazendo aparecer na tela
    acharLucroCasa3Modal1 = valorInvestido3Modal1 * odd3TransfModal1;
    if(isNaN(acharLucroCasa3Modal1)){
        $('#lucro3').innerHTML = `R$ 0,00`
    }else {
        $('#lucro3').innerHTML = `R$ ${acharLucroCasa3Modal1.toFixed(2)}`
        if(acharLucroCasa3Modal1 < valorInvestido3Modal1) {
            $('#lucro3').style.border = 'solid 1px var(--red-defalt)'
            $('#lucro3').style.color = 'var(--red-defalt)'

        }else {
            $('#lucro3').style.border = 'solid 1px var(--fundo-light)'
            $('#lucro3').style.color = 'var(--color-darck)'
        }
    }


    //calculando o total do valor investido (Valor investido da operação 1 + Valor investido da operação 2 + Valor investido da operação 3) e fazendo aparecer na tela

    totalInvestido = valorInvestido1TransfModal1 + valorInvestido2Modal1 + valorInvestido3Modal1;
    if(isNaN(totalInvestido)){
        $('#total-investido').innerHTML = `R$ 0,00`
    }else {
        $('#total-investido').innerHTML = `R$ ${totalInvestido.toFixed(2)}`
    }


    //calculando o lucro liquido ( lucro - total Investido) e fazendo aparecer na tela

    lucroLiquido = acharLucroCasa1Modal1 - totalInvestido;

    if(isNaN(lucroLiquido)){
        $('#lucro-liquido').innerHTML = `R$ 0,00`
    }else {
        $('#lucro-liquido').innerHTML = `R$ ${lucroLiquido.toFixed(2)}`
        if(lucroLiquido < 0) {
            $('#lucro-liquido').style.color = 'var(--red-defalt)'
            $('#lucro-liquido').style.fontWeight = 'bold'

        }else {
            $('#lucro-liquido').style.fontWeight = 'normal'
            $('#lucro-liquido').style.color = 'var(--color-dark)'
        }
    }


    //calculando comissao total ( comissao casa 1 comissao casa 2) e fazendo aparecer na tela

    comissaoOperacao1 = valorComissaoMOdal1 / 100;
    comissaoOperacao2 = valoecomissao2Modal1 / 100;
    comissaoOperacao3Modal1 = valoecomissao3Modal1 / 100;

    comissaoTotal = comissaoOperacao1 * valorInvestido1TransfModal1 + comissaoOperacao2 * valorInvestido2Modal1 + comissaoOperacao3Modal1 * valorInvestido3Modal1
    if(isNaN(comissaoTotal)){
        $('#comissao-total').innerHTML = `R$ 0,00`
    }else {
        $('#comissao-total').innerHTML = `R$ ${comissaoTotal.toFixed(2)}`
        if(comissaoTotal < 0) {
            $('#comissao-total').style.color = 'var(--red-defalt)'
            $('#comissao-total').style.fontWeight = 'bold'

        }else {
            $('#comissao-total').style.fontWeight = 'normal'
            $('#comissao-total').style.color = 'var(--color-dark)'
        }
    }


    //calculando lucro liquido + comissao total ( comissao total + lucro liquido) e fazendo aparecer na tela

    lucroLiquidoComissao = comissaoTotal + lucroLiquido;
    if(isNaN(lucroLiquidoComissao)){
        $('#lucro-comissao').innerHTML = `R$ 0,00`
    }else {
        $('#lucro-comissao').innerHTML = `R$ ${lucroLiquidoComissao.toFixed(2)}`
        if(lucroLiquidoComissao < 0) {
            $('#lucro-comissao').style.color = 'var(--red-defalt)'
            $('#lucro-comissao').style.fontWeight = 'bold'

        }else {
            $('#lucro-comissao').style.fontWeight = 'normal'
            $('#lucro-comissao').style.color = 'var(--color-dark)'
        }
    }
}
