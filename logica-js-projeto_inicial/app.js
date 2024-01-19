
alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 50
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um numero entre 1 e ${numeroMaximo}`);

    //se o chute for igual ao número secreto
    if (numeroSecreto == chute) {
        break;
        //alert(`Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
    } else {
        if (numeroSecreto > chute) {
            alert(`O numero secreto é maior que ${chute}`);
        } else {
            alert(`O numero secreto é menor que ${chute}`);
        }
       //tentativas = tentativas+1;
        tentativas++
    }

}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
/*
if (tentativas > 1 ) {
alert(`Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
} else {
    alert(`Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
} */