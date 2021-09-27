var n = document.getElementById("txtn")
var tab = document.getElementById("txts")
var res = document.getElementById("res1")
var resp = document.getElementById("resp")
var caixa = []

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }

}

function validar(){
    resp.innerHTML = ``
    

    if(n.value.length == 0 || n.value == 0){
        window.alert("ensira um numero")

    }else if(Number(n.value) > 100){
        window.alert("insira um numero menor")
    
    }else{        
        
        var num = Number(n.value)
        
        if(!inLista(n.value, caixa)){

            caixa.push(num)


             for(pos = 0; pos < caixa.length; i++){

              var iten = document.createElement('option')
                iten.text = `o valor ${num} foi adcionado`
                iten.value = `tab${pos}`
                tab.appendChild(iten)
                resp.innerHTML = ''
               n.value = ''           
               
            }
        }else{ 
            window.alert('esse numero ja existe')

            n.value = ''
            }
     
     
    }
}

// Funcao para retornar o menor valor de um array
Array.min = function(array) {
    return Math.min.apply(Math, array);
}

// Funcao para retornar o maior valor de um array
Array.max = function(array) {
    return Math.max.apply(Math, array);
};

function somar(){

    if(caixa.length == 0){
        window.alert("ensira um numero")
    }else{
        caixa.sort()
        var soma = 0

        for(let p = 0; p <caixa.length; p++){
            soma += caixa[p]
        }

        numMe = caixa.length
        media = soma/numMe

        
        resp.innerHTML =`<p>Ao todo, temos ${caixa.length} valores cadastrados</p>`
        resp.innerHTML +=`<p>O maior valor informado foi ${Array.max(caixa)}</p>`
        resp.innerHTML += `<p>O menor valor informaldo foi ${Array.min(caixa)}</p>`
        resp.innerHTML += `<p>Somando todos os numeros, temos ${soma}</p>`
        resp.innerHTML += `<p>A media entre os valores é ${media}</p>`

    }

}