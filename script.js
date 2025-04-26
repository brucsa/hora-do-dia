function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()// data atual
    var hora = data.getHours() //hora atual
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = "Imagens/manhã.png"
        document.body.style.background = "#587098"
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
          img.src = "Imagens/tarde.png"
          document.body.style.background = "#905B57"
    } else {
        //boa noite
          img.src = "Imagens/noite.png" 
          document.body.style.background = "#021B39"
    }

}