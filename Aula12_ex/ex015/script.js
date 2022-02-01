function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'fotomenino.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'fotojovemhomem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'fotohomem.png')
            } else {
                img.setAttribute('src', 'fotohomemvelho.png')
            }
        } else {
            genero = "Mulher"
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'fotomenina.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'fotojovemmulher.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'fotomulher.png')
            } else {
                img.setAttribute('src', 'fotomulhervelha.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
        res.appendChild(img)
    }


}