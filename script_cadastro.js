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

//FUNÇÕES DO FORMULARIO
 function maiusc(letra) { //Transforma as letras do nome em maiúsculo quando o campo nome for deselecionado
    letra.value = letra.value.toUpperCase()
}

function VerificaCPF() {   
strCpf = document.getElementById('cpf').value;

var soma = 0;
var resto;


if (strCpf == "00000000000" || strCpf.length != 11) {
    alert("CPF Inválido");
    return false;
}

for (i = 1; i <= 9; i++) {
    soma = soma + parseInt(strCpf.substring(i - 1, i)) * (11 - i);
}

resto = soma % 11;

if (resto == 10 || resto == 11 || resto < 2) {
    resto = 0;
} else {
    resto = 11 - resto;
}

if (resto != parseInt(strCpf.substring(9, 10))) {
    alert("CPF Válido");
    return false;
}

soma = 0;

for (i = 1; i <= 10; i++) {
    soma = soma + parseInt(strCpf.substring(i - 1, i)) * (12 - i);
}

resto = soma % 11;

if (resto == 10 || resto == 11 || resto < 2) {
    resto = 0;
} else {
    resto = 11 - resto;
}

if (resto != parseInt(strCpf.substring(10, 11))) {
    alert("CPF Inválido");
    return false;
}
alert("CPF VÁLIDO");
return true;
}


function validarEmail(email) {
    if (email.value.indexOf('@') == -1) {
        alert("Email invalido")
    }
}

function validarIdade(idade) {
     var nasc = Number(idade.value.slice(0, 4)) //Pega os quatros primeiros índices da string digitada pelo usuário no campo data de nascimento(ano) e transforma em número
    var mes = Number(idade.value.slice(5, 7)) //Pega os dois índices da string digitada pelo usuário no campo data de nascimento referente ao mês e transforma em número
    var dia = Number(idade.value.slice(8)) //Pega a parte da string digitada pelo usuário no campo data de nascimento referente ao dia e transforma em número
    console.log(nasc)
    console.log(mes)
    console.log(dia)
    console.log(nasc >= 2021 && mes >= 03 && dia > 16)

    if ((nasc >= 2021 && mes >= 03 && dia > 16) || nasc < 1891) {
        alert('Data de nascimento inválida!') //Se a data digitada pelo usuário for posterior ao dia 16/03/2021 e anterior ao ano de 1891, a data será inválida. 
    }

}


function clicou() {
    var nome = document.getElementById('nome').value //A variável vai receber o valor digitado pelo usuário no campo nome
    var email = document.getElementById('email').value  //A variável vai receber o valor digitado pelo usuário no campo email
    var cpf = document.getElementById('cpf').value //A variável vai receber o valor digitado pelo usuário no campo cpf
    var sexo = document.getElementById('sexo').value //A variável vai receber o valor escolhido pelo usuário no campo sexo
    var anoNasc = Number(document.getElementById('anoNasc').value.slice(0,4)) //Recebe os quatros primeiros índices da string digitada pelo usuário no campo data de nascimento(ano) e transformados em número
    var data = new Date()  //A variável vai receber a data atual
    var ano = data.getFullYear() //A variável vai receber apenas o ano da data atual
    var idade = ano - anoNasc //A variável vai receber o resultado da subtração da data atual menos o ano digitado pelo usuário
    var dados = document.getElementById('dados') //A variável vai receber o parágrafo de id "dados"

    dados.innerHTML = `Olá ${nome}, seu login é ${email}. Você tem ${idade} anos, se define como uma pessoa do sexo ${sexo} e pode usar o CPF ${cpf} como senha.`; //A propriedade Element.innerHTML define ou obtém a sintaxe HTML ou XML descrevendo os elementos descendentes. Nesse caso específico, ela irá exibir no documento HTML a frase acima descrita com os valores das respectivas variáveis nome, email, idade, sexo e cpf. Todos digitados pelo usuário.
}


