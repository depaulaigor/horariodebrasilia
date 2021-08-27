function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()
    //var hora = 22
    msg.innerHTML = `Agora são ${hora}:${minutos}:${segundos}`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'fotomanha.png'
        document.body.style.background = '#dfbe9d'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde!
        img.src = 'tarde.png'
        document.body.style.background = '#7591a4'
    }else {
        //Boa noite!
        img.src = 'noite.png'
        document.body.style.background = '#101b21'
    }
}
