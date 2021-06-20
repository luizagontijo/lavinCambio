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
function maiusc(letra) {
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
    var nasc = Number(idade.value.slice(0, 4))
    var mes = Number(idade.value.slice(5, 7))
    var dia = Number(idade.value.slice(8))
    console.log(nasc)
    console.log(mes)
    console.log(dia)
    console.log(nasc >= 2021 && mes >= 03 && dia > 16)

    if ((nasc >= 2021 && mes >= 03 && dia > 16) || nasc < 1891) {
        alert('Data de nascimento inválida!')
    }

}


function clicou() {
    var nome = document.getElementById('nome').value
    var email = document.getElementById('email').value
    var cpf = document.getElementById('cpf').value
    var sexo = document.getElementById('sexo').value
    var anoNasc = Number(document.getElementById('anoNasc').value.slice(0,4))
    var data = new Date()
    var ano = data.getFullYear()
    var idade = ano - anoNasc
    var dados = document.getElementById('dados')

    dados.innerHTML = `Olá ${nome}, seu login é ${email}. Você tem ${idade} anos, se define como uma pessoa do sexo ${sexo} e pode usar o CPF ${cpf} como senha.`;
}


