let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio!';

function botaoClicado() {
    console.log('O botão foi clicado');
    alert('O botão foi clicado');
}
function botaoDoAmor() {
    console.log('Eu amo JS!');
    alert('Eu amo JS!');
}
function cidade() {
    cidade = prompt('Qual cidade você visitou?');
    console.log(`Estive em ${cidade} e lembrei de você!`);
    alert(`Estive em ${cidade} e lembrei de você!`);
}
function soma() {
    num1 = parseInt(prompt('Digite o primeiro número:'));
    num2 = parseInt(prompt('Digite o segundo número:'));
    resultado = num1 + num2;
    console.log(`O resultado da soma é ${resultado}`);
    alert(`O resultado da soma é ${resultado}`);
}
