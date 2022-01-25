function verificar() {
    const txttim = document.querySelector('input#txttim') //forcei que o meu dado fosse do tipo string
    const res = document.querySelector('div#res')
    const time = String(txttim.value)// esse é o id(tipo primitivo) da minha datalist e está interligada com o input

    res.innerHTML = `<p class="full-team">Seu time é: ${time}</p>`

    if (listaTimes[time]) {
        res.innerHTML += listaTimes[time].result
    } else {
        res.innerHTML += '<a>Por favor, escolha um time da lista!</a>'
    }
}

function newElementForm() {
    const name = document.querySelector('#add_name').value;
    const result = document.querySelector('#add_result').value;
    if (name == '') {
        alert('Por favor, informe um time válido!')
    }
    if (result == '') {
        alert('Por favor, cadastre um time e insira informações a respeito desse time!')
    }
    else {
        newTeam(name, result)
        alert(`Equipe ${name} foi adicionado(a) a lista!`)
        document.querySelector('#add_name').value = '';
        document.querySelector('#add_result').value = '';
    }

}



/*Adicionando novos times na lista */
function newTeam(time, result) {
    const listFullTeams = document.querySelector('times') // A DOM permite via JS pegar os elementos no HTML
    listaTimes[time] = {
        result: result,
        name: time
    }
    const teams = listFullTeams.children

    const novoItem = document.createElement("option")
    novoItem.textContent = `${time}`; // valor dinamico `${valorDinamico}`  template string 

    listFullTeams.insertBefore(novoItem, teams[1])

}

/*Adicionando novos times*/
newTeam("Fortaleza", '<a class="teams" href="https://br.pinterest.com/pin/727683252291710112/"><p>Fortaleza não tem mundial!</p></a>')
newTeam("Ceará")
newTeam("Atlético Mineiro")
newTeam("Grêmio")
newTeam("São Paulo")
newTeam("Corinthians")
newTeam("Sport")
newTeam("Internacional")
newTeam("Palmeiras")
newTeam("Botafogo")
newTeam('Manchester United')
