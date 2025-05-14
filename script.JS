// let nome = prompt("qual é o seu nome");

// let idade = prompt("quantos anos voçê tem?")

// alert (`Olá, ${nome}! voçê tem ${idade} anos!`)

// confirm()

// let repost = confirm("você tem certeza que deseja sair?")
// console.log(reposta)



// const nomeDoUsuário = prompt("qualé seu nome?");
// const profissaoDoUsuário = prompt("qual é a sua profissão");

// alert(`olá , ${nomeDoUsuário}! que interessante saber que você trabalha com ${profissaoDoUsuário}. `);



// let idade = 20;
// let possuiCarteira = true;

// if (idade >= 18 && possuiCarteira) {
//     console.log("Pode dirigir");
// } else if (nota >= 60) {
//     console.log("precisa tirar a carteira.");
// } else {
//     console.log("Menor de Idade.");
// }



// let nomeDoUsuário = prompt("Qual é o seu nome?")
// let idade = Number(prompt("Qual é a sua idade?"));

// if (idade >= 18) {
//     alert(`Olá, ${nomeDoUsuário}! você pode dirigir`);
// } else {
//     alert(`${nomeDoUsuário}! você não pode dirigir.`);
// }



// let temperatura = Number(prompt("Digite a temperatura atual:"));

// if (temperatura > 35) {
//     alert("Calor Extremo.");
// } else if (temperatura >= 25 && temperatura <= 35) {
//     alert("Clima Quente.");
// } else if (temperatura >= 15 && temperatura <= 24) {
//     alert("Clima agradável.");
// } else if (temperatura >= 5 && temperatura <= 14) {
//     alert("Clima frio.");
// } else {
//     alert("Frio intenso.");
// }



let número = Number(prompt("Digite se o número é par ou impar:"));
let resultado = número % 2 === 0 ? "Par" : "Ímpar";

alert(`O número ${número} é ${resultado}.`)

let número1 =Number(prompt("Digite um número"))

let resultado1;

if (número1 % 2 ===0) {
    resultado1 = "par";
} else {
    resultado1 = "Ímpar"
}

alert (` O número ${número1} é ${resultado1}`)
