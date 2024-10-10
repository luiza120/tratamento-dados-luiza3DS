import { pegarCSS } from "./comum.js"

async function graficosCcm(){
    const url = 'https://raw.githubusercontent.com/luiza120/2024-API-FDB-LUIZA3DS.JSON/refs/heads/main/pesquisaCcm.json'
    const res = await fetch(url)
    const dados = await res.json()
    const turmasParticipantes = dados.slice(1).map(turmas => turmas[1])
    const contagemTurmas = turmasParticipantes.reduce((acc, turmasParticipantes) => {
        acc[turmasParticipantes] = (acc[turmasParticipantes] || 0) + 1 
        return acc
    }, {})

    const valores = Object.values(contagemTurmas)
    const etiqueta = Object.keys(turmasParticipantes)

    const data = [
        {
            values: valores,
            labels: etiqueta,
            type: 'pie',
            textinfo: 'label+percent',
        }
    ]
    const layout = 
    {
        plot_bgcolor: pegarCSS('--salmao'),
        paper_bgcolor: pegarCSS('--vermelho'),
        font:{
            color: pegarCSS('--salmao'),
            family: pegarCSS('---fonte-primaria'),
            size: 16,
        }
    }

    const pesquisaTitulo = document.createElement('h3')
    pesquisaTitulo.classList.add('caixa-grafico__titiulo')
    pesquisaTitulo.innerHTML = `Turmas do  <span>CCM</span> que mais votaram`
    
    const grafico = document.createElement('div')
    grafico.className = 'grafico-disco'
    document.getElementById('caixa-grafico').appendChild(pesquisaTitulo)
    document.getElementById('caixa-grafico').appendChild(grafico)
    const config = {
        responsive: true,
        displeyModeBar: false,
    }
    Plotly.newPlot(grafico, data, layout)

    console.table(dados.slice(1))
}

graficosCcm()