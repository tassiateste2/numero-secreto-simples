alert("Bem-vindo(a) ao jogo do número secreto!");

let numeroMaximo = 10;

let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

console.log(numeroSecreto);

let chute;

let tentativas = 1;

while (chute != numeroSecreto) {

        chute = prompt(`Chute um número entre 1 e ${numeroMaximo}:`);

        if (chute == numeroSecreto) {

                break;

        } else {

                if (chute > numeroSecreto) {

                        alert(`O número secreto é menor que ${chute}.`);

                } else {

                        alert(`O número secreto é maior que ${chute}.`);

                }
        }

        tentativas++;
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

alert(`Parabéns, o número secreto é ${numeroSecreto}! Você descobriu com ${tentativas} ${palavraTentativa}.`);