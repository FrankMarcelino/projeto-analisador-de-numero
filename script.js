let inum = document.querySelector('input#inum')
let ilista = document.querySelector('select#ilista')
let res = document.querySelector('div#res')
let valores = []

function isNumeroVal(n){
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inListaVal(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
   
    if (isNumeroVal(inum.value) && !inListaVal(inum.value, valores)){
        
    } else {
        window.alert(`Valor invalido ou já encontrado na lista.`)
    }
}