var btn = window.document.querySelector('input#contar')

btn.addEventListener('click', executar)

function executar() {
    let cx1 = window.document.querySelector('input#inicio')
    let cx2 = window.document.querySelector('input#fim')
    let cx3 = window.document.querySelector('input#intervalo')
    let res = window.document.querySelector('p#res')

    let num1 = Number(cx1.value)
    let num2 = Number(cx2.value)
    let num3 = Number(cx3.value)

    if (num1 === '' || num2 === '' || num3 === '') {
        alert('Não trabalhamos com alguma caixa vazia, favor verificar os dados e tente novamente!')
        return
    }

    if (num1 < 0) {
        alert('O valor inicial não pode ser menor do que 0!\nSerá considerado o valor ZERO como inicial!')
        num1 = 0
    }


    var aLista = ''
    var cont = num1
    var temp

    do {
        temp = cont.toString()
        aLista += temp + '&#128073;'

        cont += num3
    } while (cont <= num2)

    aLista += '&#127987;&#8205;&#127752;'

    res.innerHTML = aLista

}