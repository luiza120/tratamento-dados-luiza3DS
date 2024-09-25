const url = 'https://raw.githubusercontent.com/luiza120/2024-API-FDB-LUIZA3DS.JSON/refs/heads/main/entrevista.json'

async function visualizarInformacoes() {
    const res = await fetch(url)
    const dados = await res.json()

    const marcas = dados.entrevista.marca[0].nome
    const uso_percentual = dados.entrevista.marca[0].uso_percentual

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('caixa-grafico__texto')
    paragrafo.innerHTML = `Em busca de descobrir as marcas de maquiagens mais consumidas no Brasil,
    foi feita uma série de pesquisas em diferentes fontes. Com o auxilio da inteligência artificial do google,
    foi possível estimar que a marcas mais consumidas são ${marcas} com um percentual de uso de ${uso_percentual}
    `

    const caixa = document.getElementById('caixa-grafico')
    caixa.appendChild(paragrafo)

    console.log(dados.entrevista)
}

visualizarInformacoes()