// VARIÁVEIS QUE SERÃO MODIFICADAS COM O DARKMODE
var conteudo = document.getElementsByTagName('body')[0]
var menu = document.getElementsByTagName('nav')[0]
var link = document.getElementsByTagName('a')[0]
var link1 = document.getElementsByTagName('a')[1]
var link2 = document.getElementsByTagName('a')[2]
var link3 = document.getElementsByTagName('a')[3]
var texto = document.getElementById('textoh3')
var darkMode = document.getElementById('darkmode')

// FUNÇÃO PARA MODIFICAR AS VARIÁVEIS (A MODIFICAÇÃO É FEITA NO CSS)
darkMode.addEventListener('click', function(){
    darkMode.classList.toggle('dia')
    conteudo.classList.toggle('noite')
    menu.classList.toggle('noite')
    link.classList.toggle('noite')
    link1.classList.toggle('noite')
    link2.classList.toggle('noite')
    link3.classList.toggle('noite')
    texto.classList.toggle('noite')
})

//FUNÇÃO PARA REALIZAR O CÁLCULO DA CONVERSÃO
function mostraResultado() {  //função do botão
    var valorUsuario = document.getElementById('valor').value //variavel que recebe o valor digitado pelo usuario
    var moeda1 = document.getElementById('moeda1').value //variavel que recebe o valor da moeda inicial
    var moeda2 = document.getElementById('moeda2').value //variavel que recebe o valor da moeda final
    var conversao = 0 //variavel que recebe o calculo da conversao
    var nomeMoeda = 0 //variavel para escrever o nome da moeda 

    //CONDIÇÃO PARA DEFINIR QUAL A MOEDA SERÁ EXIBIDA NO VALOR FINAL
    if(moeda2 == 1){ //valor contido no "value" de cada moeda no select do html
        nomeMoeda = "Reais";
    }else if(moeda2 == 0.18){
        nomeMoeda = "Dólares Americanos";
    }else if(moeda2 == 0.23){
        nomeMoeda = "Dólares Canadenses";
    }else if(moeda2 == 0.15){
        nomeMoeda = "Euros";
    }else if(moeda2 == 0.13){
        nomeMoeda = "Libras";
    }else if(moeda2 == 17.13){
        nomeMoeda = "Pesos Argentinos";
    }

    //CONDIÇÕES PARA QUE O CÁLCULO SEJA REALIZADO
    if(valorUsuario<0 || isNaN(valorUsuario)){ //não pode ser número negativo ou letra
        alert("Hey! Não vale digitar letras nem número menores que zero, tá?");
        document.getElementById('resultado').innerHTML = (("Digite um número maior que zero").fontcolor('brown')) //troca o texto com id "resultado" por esse, com a fonte marrom
        
    }else if(moeda1==moeda2 || valorUsuario=="" || moeda1=="" || moeda2==""){ //não pode selecionar duas moedas iguais, nem deixar o campo valor em branco e nem deixar de selecionar alguma moeda
        alert("Você precisa digitar um valor e escolher moedas diferentes");
        document.getElementById('resultado').innerHTML = (("Tente de novo, digite um valor e selecione as duas moedas diferentes.").fontcolor('brown'))//troca o texto com id "resultado" por esse, com a fonte marrom

    }else{ //se passar pelas condições, faz o calculo e exibe o resultado
        conversao = (valorUsuario * moeda2 / moeda1).toFixed(2) //faz o calculo do valor da conversao com duas casas decimais          
        document.getElementById('resultado').innerHTML = conversao+" "+nomeMoeda //substitui no html o id "resultado" pelo valor obtido na conversão com a moeda selecionada pelo usuário
        document.getElementById('resultado').style.fontSize = "1.6em"; //aumenta o tamanho da fonte do resultado
        document.getElementById('resultado').style.backgroundColor = "#d8e9dc"; //coloca um fundo para destacar
        document.getElementById('resultado').style.color = "black"; //muda a cor da fonte
    }
}


