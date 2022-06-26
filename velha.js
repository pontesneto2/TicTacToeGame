let jogador, vencedor = null; //apontando p um obj inexistente (quadrado vazio)
let jogadorSelecionado = document.getElementById('jogador-selecionado'); //trazendo do html as classes
let vencedorSelecionado = document.getElementById('vencedor-selecionado'); //trazendo do html as classes

let btn = document.getElementById('initial');
btn.addEventListener('click', mostra)
//pra ser getElementByTagName teria que ser 'h1' div etc... e se for element's' teria q colocar [0]

function mostra(){
    btn.style.display = 'none';
}

mudarJogador('X'); //vez do jog inicial, começa c X.

function escolherQuadrado(id) { //em qq quadrado(id)
    if (vencedor !== null) { //venced n igual a box vazio.
        return;
    }

    let quadrado = document.getElementById(id);
    if (quadrado.innerHTML !== '-') { //venced n igual a preenchido
        return;
    }

    quadrado.innerHTML = jogador; //dzdo q quadrado se chama jogador

    if (jogador === 'X') {
        quadrado.style.color = 'red' //pintando de red X
        jogador = 'O';//vez do prox jogador O
    } else {
        jogador = 'X'; //vez do jogador X
        quadrado.style.color = 'blue' //pintando de blue O
    }

    //mudarJogador(jogador);//chamada da funcao escolherQuadrado nas ID
    checaVencedor();//chamada da função p checar se houve vencedor.
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor() {
    let quadrado1 = document.getElementById(1);
    let quadrado2 = document.getElementById(2);
    let quadrado3 = document.getElementById(3);
    let quadrado4 = document.getElementById(4);
    let quadrado5 = document.getElementById(5);
    let quadrado6 = document.getElementById(6);
    let quadrado7 = document.getElementById(7);
    let quadrado8 = document.getElementById(8);
    let quadrado9 = document.getElementById(9);

    if (checaSequencia(quadrado1, quadrado2, quadrado3)) {
       
        mudarCorQuadrado(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1);
        
        return;
    }

    if (checaSequencia(quadrado4, quadrado5, quadrado6)) {
        mudarCorQuadrado(quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4);
        return;
    }

    if (checaSequencia(quadrado7, quadrado8, quadrado9)) {
        mudarCorQuadrado(quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado7);
        return;
    }

    if (checaSequencia(quadrado1, quadrado4, quadrado7)) {
        mudarCorQuadrado(quadrado1, quadrado4, quadrado7);
        mudarVencedor(quadrado1);
        return;
    }

    if (checaSequencia(quadrado2, quadrado5, quadrado8)) {
        mudarCorQuadrado(quadrado2, quadrado5, quadrado8);
        mudarVencedor(quadrado2);
        return;
    }

    if (checaSequencia(quadrado3, quadrado6, quadrado9)) {
        mudarCorQuadrado(quadrado3, quadrado6, quadrado9);
        mudarVencedor(quadrado3);
        return;
    }

    if (checaSequencia(quadrado1, quadrado5, quadrado9)) {
        mudarCorQuadrado(quadrado1, quadrado5, quadrado9);
        mudarVencedor(quadrado1);
        return;
    }

    if (checaSequencia(quadrado3, quadrado5, quadrado7)) {
        mudarCorQuadrado(quadrado3, quadrado5, quadrado7);
        mudarVencedor(quadrado3);
    }
}

function mudarVencedor(quadrado) {
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function mudarCorQuadrado(quadrado1, quadrado2, quadrado3) { //vencedor
    quadrado1.style.background = '#035FA9';
    quadrado2.style.background = '#035FA9';
    quadrado3.style.background = '#035FA9';
    quadrado1.style.color = '#ffff00';
    quadrado2.style.color = '#ffff00';
    quadrado3.style.color = '#ffff00';
}

function checaSequencia(quadrado1, quadrado2, quadrado3) {
    let eigual = false;

    if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        eigual = true;
    }

    return eigual;
}

function reiniciar() {
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for (let i = 1; i <= 9; i++) {
        let quadrado = document.getElementById(i);

        quadrado.style.background = '#eee';//pintando quad apos 1 rodada
        quadrado.style.color = '#eee';//pintando cor apos 1 rodada
        quadrado.innerHTML = '-';//pintando apos 1 rodada.
    }
    mudarJogador('X');
}


//estudar.
//let map = array(9).fill('') criando um arrayl com 9 espaços vazios.