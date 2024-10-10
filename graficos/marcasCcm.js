import { pegarCSS } from "./comum.js"

async function graficosCcm(){
    const url = 'https://raw.githubusercontent.com/luiza120/2024-API-FDB-LUIZA3DS.JSON/refs/heads/main/pesquisaCcm.json'
    const res = await fetch(url)
    const dados = await res.json()
    const marcasVotadas = dados.slice(1).map(marcas => marcas[2])
    const contagemVotagem = marcasVotadas.reduce((acc, marcasVotadas) => {
        acc[marcasVotadas] = (acc, [marcasVotadas] || 0) + 1
        return acc
    }, {})

    const valores = Object.values(contagemVotagem)
    const etiqueta = Object.keys(marcasVotadas)

    const data = [
        {
            values: valores,
            labels: etiqueta,
            type: 'pie',
            tetxoinfo: 'label+percent',
        }
    ]
    const layout = 
    {
        plot_bgcolor: pegarCSS('--branco'),
        paper_bgcolor: pegarCSS('--vermelho'),
        font:{
            color: pegarCSS('--preto'),
            family: pegarCSS('---fonte-primaria'),
            size: 16,
        }
    }
    const pesquisaCcm = document.createElement('h3')
    pesquisaCcm.classList.add('caixa-grafico__titulo')
    pesquisaCcm.innerHTML = `As marcas mais votadas<span>CCM</span>`

    const grafico = document.createElement('div')
    grafico.className = 'grafico-disco'
    document.getElementById('caixa-grafico').appendChild(pesquisaCcm)
    document.getElementById('caixa-grafico').appendChild(grafico)
    const config = {
        responsive: true,
        displeyModeBar: false 
    }
    Plotly.newPlot(grafico, data, layout)

    const caixa = document.getElementById('caixa-grafico')
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('caixa-grafico__texto')
    paragrafo.innerHTML = 'Nota-se que a marca mais votada na escola CCM é diferente do mais votada no mundo. Enquanto os estudantes elegeram, com 16 votos, <span>a O boticário</span> como a marca favorita, já a pesquisa global indicou que <span>a Natura</span> é a marca mais comprada no mundo. Na pesquisa feita na escola, a mesma ficou em quarto lugar'
    caixa.appendChild(paragrafo)
}

graficosCcm()
