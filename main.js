const minNumeroTxt = 1;
const maxNumeroTxt = 50;

//conversao string para numero
let minNumero = Number(minNumeroTxt.valueOf());
let maxNumero = Number(maxNumeroTxt.valueOf());

let tentativa;
//gera numero aleatorio
const resposta = Math.floor(Math.random() * (maxNumero -minNumero + 1) + minNumero);


alert('Bem vindo ao jogo de advinhacao!!!!');
alert(`Escolha um numero entre ${minNumeroTxt} e ${maxNumeroTxt}`);
tentativa = Number(prompt('Escolha um numero: '))


while (tentativa != resposta) {
    
    if (tentativa > resposta) {
        alert(`Dica: ${tentativa} é maior que o numero! Tente um numero menor!`)
    } else if (tentativa < resposta) {
        alert(`Dica: ${tentativa} é menor que o numero! Tente um numero maior! `)
    } 
    tentativa = Number(prompt('Escolha um numero: '))
}
alert(`PARABENS!!! VOCE ACERTOU O NUMERO ESCOLHIDO!!!`)
