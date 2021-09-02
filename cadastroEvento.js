console.log("Digite o Nome do Evento:");

let nomeEvento = "Palestra Devs do Futuro"

console.log("Insira a data do evento:");

let dataAtual = ("02/09/2021")
let dataEvento = ("02/09/2021")

if (dataEvento < dataAtual){
    console.log("Data Inválida");
} else {
    console.log("Digite seu nome:");
    var nome = " Danilo Melo"
    console.log("Digite sua idade:");
    var idade = 26;
} 

if (idade < 18){
    console.log("Não é permitido a entrada de menores de 18 anos.");
} else {
    var participantes = [" Paulo Santos", " José Silva", " Caroline Medeiros", " Mariana Pontes", nome];
    var palestrantes = [" Sergio Sttapi", " Rogério Silva", " Marina Souza"];
    console.log("Os participantes são:" + participantes);
    console.log("Os palestrantes são:" + palestrantes);
    console.log("Cadastro realizado com sucesso");
}