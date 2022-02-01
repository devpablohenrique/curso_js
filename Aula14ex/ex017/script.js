function tabuada() {
    let num = document.getElementById('cx1')
    let tab = document.getElementById('seltab')

    if (num.value === '') {
        window.alert('Por favor digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab$(c)`
            tab.appendChild(item)
            c++
        }
    }
}