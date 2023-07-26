function contar() {
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passos = document.getElementById('txtp')

    if (inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        window.alert('Tudo OK')
    }
}