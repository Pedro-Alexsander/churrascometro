// carne - 400gr por pessoa   + de 6horas - 650gr
// Cerveja - 1200ml por pessoa + 6horas - 2000ml
// Refrigente/agua - 1000ml por pessoa + 6horas 1500ml
// crianças valem por 0,5



function calc(){
    let adultos = parseInt(document.getElementById("adultos").value)
    let criancas = (parseInt(document.getElementById("criancas").value)/2)
    let tempo = parseFloat(document.getElementById("duracao").value)
    let carne = (adultos * 0.4) + (criancas * 0.4)
    let cerveja = adultos * 1.2
    let refri = (adultos* 1)+(criancas * 1)
    let mensagem = document.getElementById("resultado").innerHTML = " "

    if(tempo <6){
    mensagem = document.getElementById("resultado").innerHTML=
        `${carne}kg de carne<br> 
        ${cerveja} litros de cerveja<br>
        ${refri} litros de refrigerante`
        

    }if(tempo>=6){
        carne = (adultos * 0.65) + (criancas * 0.65)
        cerveja = adultos * 2
        refri = (adultos* 1.5)+(criancas * 1.5)

        mensagem = document.getElementById("resultado").innerHTML=
        `${carne}kg de carne<br> 
        ${cerveja} litros de cerveja<br>
        ${refri} litros de refrigerante`
    }
    }
