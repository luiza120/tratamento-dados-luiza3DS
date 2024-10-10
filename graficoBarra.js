import { configuraEixo, pegarCSS } from "./comum.js"

async function criarGraficoBarra(){
    const url = 'https://raw.githubusercontent.com/luiza120/2024-API-FDB-LUIZA3DS.JSON/refs/heads/main/graficobarra.json'
    const res = await fetch(url)
    const dados = await res.json()
    const marca = Object.keys(dados)
    const percentual = Object.values(dados)

    console.log(marca)
    console.log(percentual)

    const data = [
        {
            x: marca,
            y: percentual,
            type: 'bar',
            marker: {
                color: pegarCSS('--vermelho')
            }
        }
    ]
    const layout = {
        plot_bgcolor: pegarCSS('--branco'),
        paper_bgcolor: pegarCSS('--vermelho'),
        title:{
            text: 'As Marcas de Maquiagens mais Consumidas',
            font:{
                color: pegarCSS('--preto'),
                size: 20
            }
        },
        xaxis:{
            tickfont: configuraEixo,
            tickangle: 25

        },
        yaxis:{
            tickfont: configuraEixo
        }
    }

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('caixa-grafico').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)

}
criarGraficoBarra()