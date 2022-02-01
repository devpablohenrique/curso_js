let aTodos = []
let result = window.document.querySelector('select#res')
let fin = window.document.querySelector('input#fin')
let linhas = window.document.querySelector('div#linhas')

function executar() {
    let cx1 = window.document.querySelector('input#cx1')

    let num = Number(cx1.value)

    cx1.value = ''
    linhas.innerHTML = ''

    if (cx1.value === '') {
        alert("Informe um numero!")
    } else if (num <= 0 || num > 100) {
        alert(`Numero informado ${num} invalido, insira um numero entre 1 e 100!`)
    } else {
        if (aTodos.indexOf(num) != -1) {
            alert(`O valor ${num} já foi inserido, informe outro número!`)
        } else {

            if (aTodos.length === 0) {
                result.innerHTML = ''
            }

            let item = document.createElement('option')

            aTodos.push(num)

            for (let cont in aTodos) {
                item.text = `Valor ${aTodos[cont]} adicionado`
                item.value = `$result(cont)`
                result.appendChild(item)
            }
        }
    }
}

function finalizar() {
    let nCadastr = aTodos.length
    let nMaior = 0
    let nMenor = 0
    let aSomaVlr = 0
    let nMedia = 0
    let aText = []

    if (aTodos.length === 0) {
        alert("Informe um numero!")
    } else {

        linhas.innerHTML = ''

        aTodos.sort

        nMaior = aTodos[(aTodos.length) - 1]
        nMenor = aTodos[0]

        for (let i in aTodos) {
            aSomaVlr += aTodos[i]
        }

        nMedia = aSomaVlr / nCadastr

        aText[0] = `Ao todo, temos ${nCadastr} números cadastrados.`
        aText[1] = `O maior valor informado foi o ${nMaior}.`
        aText[2] = `O menor valor informado foi o ${nMenor}.`
        aText[3] = `Somando todos os valores, teremos ${aSomaVlr}.`
        aText[4] = `A média dos valores digitados é ${nMedia}.`


        for (let i = 0; i < aText.length; i++) {
            let item = document.createElement('p')

            item.innerText = aText[i]
            linhas.appendChild(item)
        }
    }
}