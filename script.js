function verificar() {
    var txtalu = window.document.querySelector('input#txtalu')
    var res = window.document.querySelector('div#res')
    var aluno = String(txtalu.value)

    res.innerHTML = `<p class="nome1">Nome do Aluno: ${aluno}.</p>`
    if (aluno == 'Wiliamis') {
        res.innerHTML += 'Wiliamis é um cara legal!'
    }
    if (aluno == 'Jackson' || 'Joao' || 'Pedro' || 'Carlos') {
        res.innerHTML += "Desculpe, ainda estamos atualizando o sistema!"
    }
    else {
        res.innerHTML += `Desculpe, o aluno(a) ${aluno} não possui cadastro nesta instituição!:(`
    }
}

