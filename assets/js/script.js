//Fazendo menu aparecer
function menuOpen() {
    if(document.querySelector('aside').classList.contains('menu-off') == true) {
        document.querySelector('aside').classList.remove('menu-off')
        document.querySelector('aside').classList.add('menu-on');
    }else {
        document.querySelector('aside').classList.remove('menu-on')
        document.querySelector('aside').classList.add('menu-off');
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
    }
}


























let valorCasa1;
let comisaoCasa1;

function casaum(){
    valorCasa1 = document.querySelector('#casa1').value;

    switch(valorCasa1){
        case 'BET365':
            comisaoCasa1 = 0;
            break;
        case 'NORDESTE BOLA':
            comisaoCasa1 = 3;
            break;
        case 'PLAY BET':
            comisaoCasa1 = 5;
            break;
        case 'TNT':
            comisaoCasa1 = 7;
            break;
        case 'PLAY VIP':
            comisaoCasa1 = 10;
            break;
        case 'BETS BOLA':
            comisaoCasa1 = 10;
            break;
        case '999BET':
            comisaoCasa1 = 10;
            break;
        case '999VIP':
            comisaoCasa1 = 15;
            break;
        case 'PORTO BET':
            comisaoCasa1 = 20;
            break;
        default:
            comisaoCasa1  = 0;
    };
    


    document.querySelector('#comissao1').innerHTML = comisaoCasa1+'%';
    if (comisaoCasa1 == 0) {
        document.querySelector('#comissao1').style.background = 'red'
    }else {
        document.querySelector('#comissao1').style.background = '#FFF'
    };


}
let acharvalorInvestido1;
let valorInvestido1;
function consutarValorInvestido1(e){
    if(e.keyCode == 13 || e.keyCode == 9) {
        acharvalorInvestido1 = document.querySelector('#valor1').value;
        valorInvestido1 = parseFloat(acharvalorInvestido1)
    }
    
}

let acharvalorOdd1;
let valorOdd1;
let lucro1;
function consutarValorOdd1(e){
    if(e.keyCode == 13 || e.keyCode == 9) {
        acharvalorOdd1 = document.querySelector('#odd1').value;
        valorOdd1 = parseFloat(acharvalorOdd1);
        lucro1 = parseFloat((valorInvestido1 * valorOdd1).toFixed(2))
        
        document.querySelector('#lucro1').innerHTML = `R$ ${lucro1.toFixed(2)}`
    }
}
