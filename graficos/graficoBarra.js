
async function criarGraficoBarra(){
    const url = 'https://raw.githubusercontent.com/luiza120/2024-API-FDB-LUIZA3DS.JSON/refs/heads/main/entrevista.json'
    const res = await fetch(url)
    const dados = await res.json()

    console.log(dados)
}
criarGraficoBarra()