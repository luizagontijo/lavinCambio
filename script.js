// VARIÁVEIS QUE SERÃO MODIFICADAS COM O DARKMODE
var conteudo = document.getElementsByTagName('body')[0]
var menu = document.getElementsByTagName('nav')[0]
var link = document.getElementsByTagName('a')[0]
var link1 = document.getElementsByTagName('a')[1]
var link2 = document.getElementsByTagName('a')[2]
var link3 = document.getElementsByTagName('a')[3]
var servico = document.getElementsByClassName('pServico')[0]
var servico1 = document.getElementsByClassName('pServico')[1]
var servico2 = document.getElementsByClassName('pServico')[2]
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
    servico.classList.toggle('noite')
    servico1.classList.toggle('noite')
    servico2.classList.toggle('noite')
    texto.classList.toggle('noite')
})



// VARIÁVEIS QUE SERÃO MODIFICADAS COM A LETRA MENOR
var paragrafo = document.getElementsByTagName('p')[0]
var paragrafo1 = document.getElementsByTagName('p')[1]
var paragrafo2 = document.getElementsByTagName('p')[2]
var paragrafo3 = document.getElementsByTagName('p')[3]
var paragrafo4 = document.getElementsByTagName('p')[4]
var paragrafo5 = document.getElementsByTagName('p')[5]
var letra1 = document.getElementById('diminuir')

// FUNÇÃO PARA MODIFICAR AS VARIÁVEIS (A MODIFICAÇÃO É FEITA NO CSS)
letra1.addEventListener('click', function(){
    paragrafo.classList.toggle('menos')
    paragrafo1.classList.toggle('menos')
    paragrafo2.classList.toggle('menos')
    paragrafo3.classList.toggle('menos')
    paragrafo4.classList.toggle('menos')
    paragrafo5.classList.toggle('menos')
})



// VARIÁVEIS QUE SERÃO MODIFICADAS COM A LETRA MAIOR
var paragrafo = document.getElementsByTagName('p')[0]
var paragrafo1 = document.getElementsByTagName('p')[1]
var paragrafo2 = document.getElementsByTagName('p')[2]
var paragrafo3 = document.getElementsByTagName('p')[3]
var paragrafo4 = document.getElementsByTagName('p')[4]
var paragrafo5 = document.getElementsByTagName('p')[5]
var letra2 = document.getElementById('aumentar')

// FUNÇÃO PARA MODIFICAR AS VARIÁVEIS (A MODIFICAÇÃO É FEITA NO CSS)
letra2.addEventListener('click', function(){
    paragrafo.classList.toggle('mais')
    paragrafo1.classList.toggle('mais')
    paragrafo2.classList.toggle('mais')
    paragrafo3.classList.toggle('mais')
    paragrafo4.classList.toggle('mais')
    paragrafo5.classList.toggle('mais')
})



