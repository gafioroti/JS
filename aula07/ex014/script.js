function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fAno.value.length == 0 || fAno.value > ano ) {
        window.alert("[ERRO] Verifique os dados e tente novamente.")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src','kid-h.png')
            } else if (idade < 22) {
                //jovem
                img.setAttribute('src','jovem-h.png')
            } else if (idade < 55) {
                //adulto
                img.setAttribute('src','adulto-h.png')
            } else {
                //idoso
                img.setAttribute('src','old-h.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src','kid-m.png')
            } else if (idade < 22) {
                //jovem
                img.setAttribute('src','jovem-m.png')
            } else if (idade < 55) {
                //adulto
                img.setAttribute('src','adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src','old-m.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}