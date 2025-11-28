//let nome = "Marco Túlio";
//let idade = 31;
//let estaLogado = "Palmas";
//let ola = "Olá, qual seu nome, sua idade e a cidade onde mora?";
//console.log(ola,nome,idade,estaLogado);
 
//var nome = "antigo";não usar var
//let idade = 25;
//const PI = 3.14;
//let nome = "maria";
//let mensagem = 'Olá mundo!';
//let idade = 30;
//let preco = 19.99;
//let ativo = true;
//let admin = false;

//let ola = 'ola mundo!';
//let noem = "Marco Túlio";
//var variavel = "tres"
//condole.log(olá, nome);


//tipo de dados
//objeto!!
//Uma variável contém um objeto possui atributos. Atributos são variáveis. Uma variável contém valores.

//Usar let ao invés de var


//let frutas = ["maçã", "banana", "laranja"]
//let pessoa = {
//nome: "carlos",
//idade: 25,
//cidade: "Palmas"}

//let soma = 2 + 5;
//console.log("Soma: ", soma);
//let subtracao = 5 - 6;
//console.log("subitração: ", subtracao);
//let divisao = 5/2;
//console.log("divisão: ", divisao)
//let mult = 10*3;
//console.log("multiplicação: ", mult);


//let igual = 10 == 10;
//let estritamenteIgual = 10 === "10";
//let maiorQue = 10 > 5;
//let diferente = 10 != 5;

//Logicos
//let e = true && false;
//let ou = true || false;
//let nao = !true;
//console.log(e);

//Tomada de decisões
//let idade = 19;
//if (idade >= 18) { 
//    console.log("Você é maior de idade");
// } else { 
//    console.log("Você é menor de idade");
//}

//Tomada de decisão

//let idade = 18;

//if (idade >= 18) {
//    console.log("Você é maior de idade");
//}
// else if(idade > 15) {
// console.log("Você é aborrecente");
//}
// else {
//    console.log("Você é menor, mas não é aborrecente!");
//}

// For - quando sabemos quantas vezes repetir

//for (let i = 0; i <= 5; i++) {
//    console.log("Número: " + i);
//}
 
//while - enquanto a condição for verdadeira
 
//let contador = 0;
//while (contador < 3) {
//   console.log("contador: " + contador);
//    contador++;
//}
//blocos de código reutilizáveis
//function cumprimentar(nome){
//    return "Olá, " + nome + "!";
//}
//let mensagem = cumprimentar("Marco");
//console.log(mensagem);

function cumprimentar(nome, idade) {
    let texto = "";
    if(idade >= 18) {
        texto = "é de maior!"
    } else {
        texto = "é de menor!"
    }
    return "olá, " + nome + ". você é de" + texto + "!";
}

let cumprimento = cumprimentar("Marco", 31);
console.log(cumprimento)