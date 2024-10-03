import { pegarCSS } from "./comum.js"

async function criarGraficoPizza(){
    const url = 'https://raw.githubusercontent.com/luiza120/2024-API-FDB-LUIZA3DS.JSON/refs/heads/main/graficobarra.json'
    const res = await fetch(url)
    const dados = await res.json()
    const maquiagensVendidas = Object.keys(dados)
    const maquiagensUsos = Object.values(dados)

    const data = [
        {
            values: maquiagensUsos,
            labels: maquiagensVendidas,
            type: 'pie',
            textinfo: 'label + percent'
        }
    ]
    const layout = {
        height: 400,
        width: 600,
        plot_color: pegarCSS('--vermelho'),
        paper_bgcolor: pegarCSS('--preto')
    }

    const maquiagensTitulo = document.createElement('h3')
    maquiagensTitulo.classList.add('caixa-grafico_titulo')
    maquiagensTitulo.innerHTML = `As <span>Maquiagens mais Usadas</span> no Brasil`

    const grafico = document.createElement('div')
    grafico.className = 'grafico-disco'
    document.getElementById('caixa-grafico').appendChild(maquiagensTitulo)
    document.getElementById('caixa-grafico').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)
}
criarGraficoPizza()