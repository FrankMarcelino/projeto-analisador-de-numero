let inum = document.querySelector('input#inum')
let ilista = document.querySelector('select#ilista')
let ires = document.querySelector('div#ires')
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
        valores.push(Number(inum.value))
        let item = document.createElement('option')
        item.text = `Valor ${inum.value} adicionado.`
        ilista.appendChild(item)
        ires.innerHTML = ''

    } else {
        window.alert(`Valor invalido ou já encontrado na lista.`)
    }
    inum.value = ''
    inum.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Digite um valores antes de finalizar!')
    } else {
        let totalElementos = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores [pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
           
        }
        media = soma / totalElementos
        ires.innerHTML = ''
        ires.innerHTML += `<p>Ao todo, temos ${totalElementos} numeros cadastrados </p> `
        ires.innerHTML += `<p>O maior numero digitado foi ${maior}</p>`
        ires.innerHTML += `<p>O menor numero digitado foi ${menor}</p>`
        ires.innerHTML += `<p>Somando todos os valores, temos o resultado ${soma}</p>`
        ires.innerHTML += `<p>A media dos valores digitados é ${media}</p>`



    }
}