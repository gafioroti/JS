function contar() {
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passos = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando:'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passos.value)

        for(var c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449}`
        }

        res.innerHTML += `\u{1F3C1}`
    }
}