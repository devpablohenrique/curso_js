function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minu = data.getMinutes()

    //hora = 6

    msg.innerHTML = `Agora são ${hora}:${minu} `

    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#FDDA7F'
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde
        img.src = 'fototarde.jpg'
        document.body.style.background = '#B37564'
    } else {
        //Boa noite
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#011e39'

    }
}